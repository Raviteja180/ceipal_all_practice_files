import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  arr = ["raviteja","ratnakar","bharath"];
  constructor() { }

  ngOnInit(): void {
  }

}
