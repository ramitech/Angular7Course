import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templatex',
  //templateUrl: './template.component.html',
  template:'<p> Welcome To Template Test </p>',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
