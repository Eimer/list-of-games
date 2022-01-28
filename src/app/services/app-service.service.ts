import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  // @ts-ignore
  private readonly itemsRef: AngularFirestoreCollection<any>;

  constructor(
    private store: AngularFirestore
  ) {
  }

  getCategoriesCollection(): Observable<any> {
    return this.store.collection('categories').get()
  }

  gamesCollection(name: string): any {
    return this.store.collection('categories').doc(name).collection('games').valueChanges();
  }


  searchGameQuery(searchStr: string) {
    return this.store.collection('categories', ref => ref.where('name', '>=', searchStr)
      .where('name', '<=', '' + '\uf8ff')).valueChanges();
  }
}
