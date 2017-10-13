import { Component, OnInit } from '@angular/core';
import { slideToRight } from './../../../router.animations';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  animations: [slideToRight()]
  
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
