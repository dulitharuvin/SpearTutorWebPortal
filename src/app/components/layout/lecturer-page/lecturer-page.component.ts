import { Component, OnInit } from '@angular/core';
import { slideToRight } from './../../../router.animations';

@Component({
  selector: 'app-lecturer-page',
  templateUrl: './lecturer-page.component.html',
  styleUrls: ['./lecturer-page.component.scss'],
  animations: [slideToRight()]
})
export class LecturerPageComponent implements OnInit {


  constructor() {
    
  }

  ngOnInit() {
  }

}
