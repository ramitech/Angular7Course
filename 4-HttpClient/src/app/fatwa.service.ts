import { Injectable } from '@angular/core';
import {IFatwa} from '../Model/Fatwa';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FatwaService {

  constructor(private http:HttpClient) {

   }
   private _getUrl:string = "http://api.sobolalsalam.com/api/Main/GetFatwa?CategoryId=0&pageIndex=1&pageSize=10&q=";
   getFatwa():Observable<IFatwa[]>{
     return this.http.get<IFatwa[]>(this._getUrl);
   }

   private _addUrl:string = "http://api.sobolalsalam.com/api/Main/addFatawi";
   addFatwa():Observable<IFatwa[]>
   {
     
    // Post parm JSON foramt
     let fatwaNew= {
      "Name": "test name",
      "Email": "test@aa.com",
      "Title": "test title",
      "Summary": "test test test",
      "Notes": "test note"
       }

      // Post param in body
      let body = new URLSearchParams();
      body.set('Name', "test name");
      body.set('Email', "test@aa.com");
      body.set('Title', "test title");
      body.set('Summary', "test test test");
      body.set('Notes', "test note");

     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    return this.http.post<IFatwa[]>(this._addUrl,body.toString(),httpOptions);
   }
}
