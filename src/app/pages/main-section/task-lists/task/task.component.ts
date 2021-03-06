import { Component, OnInit } from '@angular/core';
import { faListUl, faPlus, faUndoAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  faListUl = faListUl;
  faPlus = faPlus;
  faUndoAlt = faUndoAlt;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit() {
  }

}
