import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryInterface} from "../../../interfaces/category.interface";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  // @ts-ignore
  @Input() data: CategoryInterface;
  @Input() widthIndex: number = -1;
  @Output() onSelectedCategory = new EventEmitter<CategoryInterface>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectCategory(data: CategoryInterface) {
    this.onSelectedCategory.emit(data);
  }
}
