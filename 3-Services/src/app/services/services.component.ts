import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../../app/data.service';
import {Route,RouterModule} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public d:DataService) { 

  }

  ngOnInit() {
  }

}
