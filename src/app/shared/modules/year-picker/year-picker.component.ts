import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss']
})
export class YearPickerComponent implements OnInit {

  private years: number[] = [];
  private yy: number;

  constructor() { }

  ngOnInit() {
    this.getYear();
  }

  getYear() {
    let today = new Date();
    this.yy = today.getFullYear();
    for (var i = (this.yy - 50); i < this.yy; i++) {
      this.years.push(i);
    }

    for (var i = this.yy; i <= (this.yy + 50); i++) {
      this.years.push(i);
    }
  }
}
