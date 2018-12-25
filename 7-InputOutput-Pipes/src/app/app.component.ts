import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Test';
  isLoggedIn = false

  checkLoggin(e){

    console.log(e ,"ee")
    if(e.success){
      this.isLoggedIn =true
    }

  }
}
