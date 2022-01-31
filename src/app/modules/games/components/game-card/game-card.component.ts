import {Component, Input, OnInit} from '@angular/core';
import {GameCardInterface} from "../../../../interfaces/game-card.interface";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() data : GameCardInterface | undefined
  @Input() isShown : boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
