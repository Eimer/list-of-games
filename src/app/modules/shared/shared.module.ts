import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearcherComponent} from "./components/searcher/searcher.component";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SearcherComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatDividerModule,
        RouterModule,
    ],
    exports: [
      SearcherComponent,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatSelectModule,
      MatDividerModule,
      RouterModule,
    ]
})
export class SharedModule {
}
