import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit, OnDestroy {
  private subscriptionArray = <any>[];
  @Input() searchControl = new FormControl('', Validators.required);
  @Output() onSearchChanged = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    const subscription = this.searchControl?.valueChanges.subscribe((value) => {
      this.changeSearch();
    })
    if (subscription) {
      this.subscriptionArray.push(subscription);
    }
  }

  changeSearch() {
    this.onSearchChanged.emit(this.searchControl);
  }

  ngOnDestroy() {
    this.subscriptionArray.forEach((item: any) => {
      item.unsubscribe();
    })
    this.subscriptionArray = [];
  }
}
