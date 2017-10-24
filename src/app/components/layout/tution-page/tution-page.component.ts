import { Component, OnInit } from '@angular/core';
import { slideToRight } from './../../../router.animations';

@Component({
  selector: 'app-tution-page',
  templateUrl: './tution-page.component.html',
  styleUrls: ['./tution-page.component.scss'],
  animations: [slideToRight()]
})
export class TutionPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
