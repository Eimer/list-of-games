import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppServiceService} from "../../../services/app-service.service";
import {CategoryInterface} from "../../../interfaces/category.interface";
import {environment} from "../../../../environments/environment";
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {GameCardInterface} from "../../../interfaces/game-card.interface";
import {Observable} from "rxjs";


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
  public games: GameCardInterface[] | undefined;
  private gamesSubscriptions: Observable<any>[] = [];

  constructor(
    private route: ActivatedRoute,
    public appService: AppServiceService,
  ) {
     this.searchControl = new FormControl('');
  }

  ngOnInit(): void {
    this.initLangForm();
    this.langs = this.env.supportedLangsArray;
    this.getCategories();
  }

  public getCategories() {
    this.appService.getCategoriesCollection().subscribe((data) => {
      data.docs.forEach((item: any) => {
        this.categories.push(item.data())
      })
    })
  }

  private initLangForm() {
    this.langFormControl = new FormControl(this.route.snapshot.data.lang, Validators.required);
  }

  public onSearchChanged(event: any) {
    this.appService.searchGameQuery(event.value).subscribe()
  }

  public onSelectedCategory(event: CategoryInterface) {
    this.gamesSubscriptions.forEach((item: any) => {
      item.unsubscribe();
    })
    const subscription = this.appService.gamesCollection(event.name).subscribe((data: any) => {
      this.searchControl.reset();
      this.games = data;
    })
    this.gamesSubscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.gamesSubscriptions.forEach((item: any) => {
      item.unsubscribe();
    })
  }
}
