import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-click',
  templateUrl: './for-loop-click.component.html',
  styleUrls: ['./for-loop-click.component.css']
})



export class ForLoopClickComponent   {
 
 constructor() { }

  data = [];
  i = 1;
 
   btnClick(){
     let student = {
      id : this.i,
      name:"test " + this.i
    }
    this.data.push(student);
    this.i++;
  }

  btnAdd(){
    
  }

}
