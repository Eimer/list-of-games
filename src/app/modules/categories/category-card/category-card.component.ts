import {Component, Input, OnInit} from '@angular/core';
import {CategoryInterface} from "../../../interfaces/category.interface";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() data: CategoryInterface | undefined;
  @Input() widthIndex: number = -1;

  constructor() {
  }

  ngOnInit(): void {
  }
}
