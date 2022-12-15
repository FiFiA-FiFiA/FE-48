import { User } from './../User.model';
import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(){}
  ngOnInit(): void {}

  User__Arr:User = new User();
  
  @Output() AddUserEmitter:EventEmitter<User> = new EventEmitter();

  Active__AddUser__Container(status: boolean){
    let Add__User__Container = document.querySelector("[Add__User__Container]") as HTMLDivElement;
    Add__User__Container.setAttribute("Active__AddUser__Container", `${status}`);
  }

  AddUser(){
    this.AddUserEmitter.emit(this.User__Arr);
    this.User__Arr = new User();
  }
}
