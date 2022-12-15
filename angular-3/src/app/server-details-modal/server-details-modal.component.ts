import { DataSharingService } from './../data-sharing.service';
import { Server } from './../Server.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-details-modal',
  templateUrl: './server-details-modal.component.html',
  styleUrls: ['./server-details-modal.component.scss']
})
export class ServerDetailsModalComponent {
  constructor(private DataShare: DataSharingService) { }

  ServerArr: Server[] = [];
  @Input() ServerInfo: Server = new Server();
  clicked: any;
  ChangeButtonText: String = "";

  ngOnInit(): void {
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
    this.DataShare.Server__Details__Modal__Emitter.subscribe((server: any) => {
      this.ServerInfo = server;
      this.clicked = true;
    });
    this.ServerInfo.Status == "Enabled" ? this.ChangeButtonText = "Off" : this.ChangeButtonText = "On";
  }

  ChangeStatus() {
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
    this.ServerInfo.Status == 'Enabled' ? this.ServerInfo.Status = 'Disabled' : this.ServerInfo.Status = 'Enabled';
    let NewServerArr: any = this.ServerArr.find(i => i.ServerId == this.ServerInfo.ServerId);
    if (NewServerArr) {
      NewServerArr.Status == 'Enabled' ? NewServerArr.Status = 'Disabled' : NewServerArr.Status = 'Enabled';
      NewServerArr.Status == "Enabled" ? this.ChangeButtonText = "Off" : this.ChangeButtonText = "On";
    }
    localStorage.setItem("Servers", JSON.stringify(this.ServerArr));
  }
  EditServer() {
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
    let NewServerArr = this.ServerArr.find(i => i.ServerName == this.ServerInfo.ServerName);
    if (NewServerArr) {
      this.DataShare.AddServer__Modal__Emitter.emit(this.ServerInfo);
      this.Close__Modal();
    }
  }
  DeleteServer() {
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
    let DeleteIndex = this.ServerArr.findIndex(i => i.ServerName == this.ServerInfo.ServerName);
    this.ServerArr.splice(DeleteIndex, 1);
    for (let index = 0; index < this.ServerArr.length; index++) {
      this.ServerArr[index].ServerId = index;
    }
    localStorage.setItem("Servers", JSON.stringify(this.ServerArr));
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
    this.DataShare.Server__Emitter.emit(this.ServerArr);
    this.ServerInfo = new Server();
    this.Close__Modal();
  }
  Close__Modal() {
    this.clicked = false;
  }
}
