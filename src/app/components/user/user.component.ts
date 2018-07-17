import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string ='john doe';

  constructor() { }

  ngOnInit() {
console.log('ngoninit run')
this.name = 'smithy'
  }

}
