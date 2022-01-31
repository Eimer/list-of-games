import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppServiceService} from "../../../services/app-service.service";
import {CategoryInterface} from "../../../interfaces/category.interface";
import {environment} from "../../../../environments/environment";
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {GameCardInterface} from "../../../interfaces/game-card.interface";
import {Observable, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchControl: FormControl;
  public env = environment;
  public categories: CategoryInterface[] = [];
  public langFormControl: FormControl | undefined;
  public langs: any = environment.supportedLangsArray;
  public games: GameCardInterface[] = [];
  public selectedCategory: CategoryInterface | undefined = undefined;
  public gamesItemsPerPage = 9;
  public ifSearchedGames: boolean = true;
  private gamesSubscriptions: Observable<any>[] = [];

  constructor(
    private route: ActivatedRoute,
    public appService: AppServiceService,
    public cd: ChangeDetectorRef
  ) {
    this.searchControl = new FormControl('');
  }

  ngOnInit(): void {
    this.getCategory('popular');
    this.initLangForm();
    this.langs = this.env.supportedLangsArray;
    this.getCategories();
    this.getPopularGames();
  }

  private getCategories() {
    this.appService.getCategoriesCollection().subscribe((data) => {
      this.categories = [];
      data.docs.forEach((item: any) => {
        this.categories.push(item.data())
      })
    })
  }

  private getCategory(categoryName: string) {
    this.appService.getCategoryByName(categoryName).subscribe((data) => {
      this.selectedCategory = data.data();
    })
  }

  private getPopularGames() {
    const subscription = this.appService.gamesCollection('popular').subscribe((data: any) => {
      this.searchControl.reset();
      this.games = data;
    })
    this.gamesSubscriptions.push(subscription);
  }

  private initLangForm() {
    this.langFormControl = new FormControl(this.route.snapshot.data.lang, Validators.required);
  }

  public onSearchChanged(event: any) {
    if (!event.value) {
      event.value = ''
    }
    if (this.selectedCategory) {
      this.ifSearchedGames = true;
      this.games = [];
      this.appService.searchGameQuery(this.selectedCategory.name, event.value)
        .pipe(debounceTime(300))
        .subscribe((data: any) => {
        this.games = data;
        this.games.length ? this.ifSearchedGames = true : this.ifSearchedGames = false;
      })
    }
  }

  public onSelectedCategory(event: CategoryInterface) {
    this.gamesSubscriptions.forEach((item: any) => {
      item.unsubscribe();
    })
    const subscription = this.appService.gamesCollection(event.name).subscribe((data: any) => {
      this.ifSearchedGames = false
      this.selectedCategory = event;
      this.hideGames();
      this.searchControl.reset();
      this.games = data;
    })
    this.gamesSubscriptions.push(subscription);
  }

  public showMore() {
    if (this.games && this.gamesItemsPerPage > this.games?.length) {
      this.gamesItemsPerPage = this.games.length;
    } else {
      this.gamesItemsPerPage += 9;
    }
  }

  public hideGames() {
    this.gamesItemsPerPage = 9;
  }


  ngOnDestroy() {
    this.gamesSubscriptions.forEach((item: any) => {
      item.unsubscribe();
    })
  }
}
