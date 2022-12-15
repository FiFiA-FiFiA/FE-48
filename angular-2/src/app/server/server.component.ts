import { Server } from './../Server.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  @Input() server:Server = new Server();
  ServerArr: Server[] = JSON.parse(localStorage.getItem("Servers") as any) || [];

  ChangeStatus(){
    if(this.ServerArr){
    this.server.Status == 'Enabled' ? this.server.Status = 'Disabled' : this.server.Status = 'Enabled';
    let NewServerArr = this.ServerArr.find(i=> i.ServerId == this.server.ServerId);
    if(NewServerArr){
      NewServerArr.Status == 'Enabled' ? NewServerArr.Status = 'Disabled' : NewServerArr.Status = 'Enabled';
    }
    localStorage.setItem("Servers", JSON.stringify(this.ServerArr));    
  }
}
}
