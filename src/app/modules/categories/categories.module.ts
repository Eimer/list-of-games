import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryCardComponent} from './category-card/category-card.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CategoryCardComponent]
})
export class CategoriesModule {
}
