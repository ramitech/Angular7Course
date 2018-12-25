import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isActive = true;
  result = "";
  result2="";
  btnKeyup(e){
      //console.log(e.target.value);
      this.result = e.target.value;
  }

  btnAdd(elem)
  {
    //console.log(elem.value);
    this.result2=elem.value;
  }
}
