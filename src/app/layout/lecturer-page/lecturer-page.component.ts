import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-lecturer-page',
  templateUrl: './lecturer-page.component.html',
  styleUrls: ['./lecturer-page.component.scss'],
  animations: [routerTransition()]
})
export class LecturerPageComponent implements OnInit {


  constructor() {
    
  }

  ngOnInit() {
  }

}
