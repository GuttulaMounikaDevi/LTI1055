import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularapp';
  Name:string="Mounika";
  Email:String="Mouni@gmail.com"
  Phn_No:String="987654321220"
}
