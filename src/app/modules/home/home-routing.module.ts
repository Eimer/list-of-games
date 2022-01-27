import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {environment} from "../../../environments/environment";

const env = environment;

const routes: Routes = [
  {
    path: '',
    redirectTo: env.defaultLang,
    pathMatch: 'full'
  },
  {
    path: env.defaultLang,
    data: {lang: env.defaultLang},
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
