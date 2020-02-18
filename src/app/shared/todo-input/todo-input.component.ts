import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Input() public defaultInputProp: any;

  constructor() { }

  ngOnInit() {
  }

}
