import { Component } from '@angular/core';
import { Server } from '../Server.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  ServerArr: Server[] = JSON.parse(localStorage.getItem("Servers") as any) || [];

  SaveServerSubscriber(server: any){
    server.ServerId = this.ServerArr.length + 1;
    this.ServerArr.push(server);
    localStorage.setItem("Servers", JSON.stringify(this.ServerArr));
  }
}
