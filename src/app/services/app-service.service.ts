import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(
    private store: AngularFirestore
  ) { }

  getCategoriesCollection (): Observable<any> {
    return this.store.collection('categories').get()
  }

}
