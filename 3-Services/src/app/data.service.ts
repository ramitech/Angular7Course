import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  ListOfData = [{Id:1,Name:"rami"},{Id:2,Name:"Ahmed"}];
}
