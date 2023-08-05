import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
  inputs: ['fruit'],
})
export class FruitComponent implements OnInit {
  constructor() {}
  fruit?: string;
  @Output() private deleteF: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  deleteFruit() {
    this.deleteF.emit(this.fruit);
  }
}
