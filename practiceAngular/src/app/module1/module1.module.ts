import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice/practice.component';



@NgModule({
  declarations: [
    PracticeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PracticeComponent
  ]
})
export class Module1Module { }
