import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./components/home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {CategoriesModule} from "../categories/categories.module";
import {SharedModule} from "../shared/shared.module";
import {GamesModule} from "../games/games.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CategoriesModule,
        SharedModule,
        GamesModule,
        ReactiveFormsModule
    ],
})
export class HomeModule {
}
