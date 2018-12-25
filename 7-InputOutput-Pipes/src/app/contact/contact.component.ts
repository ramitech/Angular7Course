import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  x ='teStR '
  userInfo ={name:"mona"}

  orderNum = 1
  title ='angular course'

  myNumber = 10

  today = new Date()

  salary =1000

  z = 155.88884


  numbers =[1,2,3,4,5,6,7,8]
  constructor() { }

  ngOnInit() {
  }
  addToArray(){
    this.numbers.push(12)
    //console.log(this.numbers)
  }

}
