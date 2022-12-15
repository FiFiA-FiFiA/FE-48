import { DataSharingService } from './../data-sharing.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../Server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  constructor(private DataShare: DataSharingService) { }
  ServerArr: Server[] = [];
  @Input() ServerInfo: Server = new Server();

  ngOnInit(): void {
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
  }

  OpenServerDetails() {
    this.DataShare.Server__Details__Modal__Emitter.emit(this.ServerInfo);
  }
}
