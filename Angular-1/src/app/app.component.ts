import { User } from './User.model';
import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Dropdown__Manu: boolean = false;
  SortValue : string = "";
  User__Arr:User[] = [];

  Active__Dropdown__Manu(){
    let Buttin__Sort__Dropdown = document.querySelector("[Buttin-Sort__Dropdown]") as HTMLButtonElement;
    this.Dropdown__Manu = !this.Dropdown__Manu;
    this.Dropdown__Manu ? Buttin__Sort__Dropdown.setAttribute("Active__Dropdown__Manu", `${this.Dropdown__Manu}`) : Buttin__Sort__Dropdown.setAttribute("Active__Dropdown__Manu", `${this.Dropdown__Manu}`);
  }

  Active__AddUser__Container(status: boolean){
    let Add__User__Container = document.querySelector("[Add__User__Container]") as HTMLDivElement;
    Add__User__Container.setAttribute("Active__AddUser__Container", `${status}`);
  }

  Select__Sort__Value(){
    let Dropdown__Menu__Item: NodeListOf<HTMLDivElement> = document.querySelectorAll("[Dropdown__Menu] [Dropdown__Menu__Item]");
    Dropdown__Menu__Item.forEach(Item=> {
      Item.onclick = ()=>{
        let ItemIext = Item.textContent;
        if(ItemIext != null){
          this.SortValue = ItemIext;
          if(ItemIext == "Sort by Age"){
            this.SortUserByAge();
          }
          if(ItemIext == "Sort by Name"){
            this.SortUserByName();
          }
        }
      }
    });
  }

  CreateUser(info:any){
    this.User__Arr.push(info);
  }

  SortUserByAge(){
    this.User__Arr.sort((a,b) => {return Number(a.Age) - Number(b.Age)});
  }
  SortUserByName(){
    // this.User__Arr.sort((a, b)=> a.FirstName.toLowerCase() > b.FirstName.toLowerCase() ? 1 : -1);
    this.User__Arr.sort((a, b)=> a.FirstName.toLowerCase().localeCompare(b.FirstName.toLowerCase()));
  }
}
