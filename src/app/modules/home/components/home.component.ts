import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../../services/app-service.service";
import {CategoryInterface} from "../../../interfaces/category.interface";
import {environment} from "../../../../environments/environment";
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public env = environment;
  public categories: CategoryInterface[] = [];
  public langFormControl: FormControl | undefined;
  public langs: any = environment.supportedLangsArray;

  constructor(
    private route: ActivatedRoute,
    public appService: AppServiceService,
  ) {

  }

  ngOnInit(): void {
    this.initLangForm();
    this.langs = this.env.supportedLangsArray;
    this.getCategories();

    // for (let i = 0; i < 10; i++) {
    //   this.todo.doc('category' + i).set({
    //     name: 'category' + i
    //   })
    // }

    // for (let i = 0; i < 2; i++) {
    //   this.todo.doc('category' + i).collection('games').add({'name': '123'})
    // }

    // this.todo.doc('categories1').set({name:"fff"})

    // this.todo.add({name: 'qwer'}).then((ref) => {
    //   console.log(123)
    // })
    // this.todo.valueChanges().subscribe((data) => {
    //   console.log(data);
    // })
  }

  public getCategories() {
    this.appService.getCategoriesCollection().subscribe((data) => {
      data.docs.forEach( (item: any) => {
        this.categories.push(item.data())
      } )
    })
  }

  private initLangForm() {
    this.langFormControl = new FormControl(this.route.snapshot.data.lang , Validators.required);
  }
}
