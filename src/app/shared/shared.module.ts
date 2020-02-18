import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from './todo-input/todo-input.component';

@NgModule({
  declarations: [TodoInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodoInputComponent
  ]
})
export class SharedModule { }
