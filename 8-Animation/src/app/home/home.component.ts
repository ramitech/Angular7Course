import { Component, OnInit } from '@angular/core';
import { trigger,group, transition ,style,animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('inas' ,[
      transition('void=>*',[
        style({
            opacity:0,
            transform:'translateX(500px)'
        }),
        group([
        animate(1000,style({
          opacity:1,
        })),
        animate(5000,style({
          transform:'translateX(0)'

        }))
      ])
      ])
    ])
 ,
 trigger('nour' ,[
   transition('void=>*',[
    style({
      color:'green'
    }),
    animate(1000 , 
      keyframes([
        style({
          color:'#7EF9FF',
          offset:.3
        }) ,
        style({
         color:'#89CFF0',
         offset:.6
       }) ,
       style({
         color:'#4682B4',
         offset:1
       })
      ])

      )
 
  ])])]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
