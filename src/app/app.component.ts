import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Badbus';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Badbus(free-locker)"
    // }, 3000);
  }
}
