import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
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


  searchGameQuery(cateGoryName: string, searchStr: string) {
    return this.store.collection('categories').doc(cateGoryName)
      .collection('games', ref => ref.where('name', '>=', searchStr)
        .where('name', '<=', searchStr + '\uf8ff')).valueChanges();
  }

  getCategoryByName(name: string): Observable<any> {
    return this.store.collection('categories').doc(name).get()
  }
}
