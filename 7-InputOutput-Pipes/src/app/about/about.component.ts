import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = "welcome to about component";

  btnClick(){
    //alert("button Submit");
    this.title = "Title Changes";
  }

  data = [{id:3,name:"rami"},{id:4,name:"ahmed"}];
}
