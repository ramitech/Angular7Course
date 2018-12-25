import { Component, OnInit } from '@angular/core';
import {FatwaService} from '../fatwa.service'

@Component({
  selector: 'app-fatwa-list',
  templateUrl: './fatwa-list.component.html',
  styleUrls: ['./fatwa-list.component.css']
})
export class FatwaListComponent implements OnInit {

  constructor(private fatwaService:FatwaService) { }

  public fatwa=[];

  ngOnInit() {
    this.fatwaService.getFatwa().subscribe(data=>this.fatwa = data);
  }

}
