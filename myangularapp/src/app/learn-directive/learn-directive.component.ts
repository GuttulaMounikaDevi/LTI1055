import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-directive',
  templateUrl: './learn-directive.component.html',
  styleUrls: ['./learn-directive.component.css']
})
export class LearnDirectiveComponent implements OnInit {
  constructor() { }
number=prompt("Enter a number in word","one");
  ngOnInit(): void {
  }

}
