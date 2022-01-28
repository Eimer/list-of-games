import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearcherComponent} from "./components/searcher/searcher.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../../../environments/environment";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";


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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    SearcherComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    RouterModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}
