import { Component, OnInit } from '@angular/core';
import {FatwaService} from '../fatwa.service'

@Component({
  selector: 'app-add-fatwa',
  templateUrl: './add-fatwa.component.html',
  styleUrls: ['./add-fatwa.component.css']
})
export class AddFatwaComponent implements OnInit {

  constructor(private fatwaService:FatwaService) { }

  public result;
  ngOnInit() {
    this.fatwaService.addFatwa().subscribe(data=>this.result = data);
  }

}
