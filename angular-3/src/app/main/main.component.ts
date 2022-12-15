import { Component, Input } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Server } from '../Server.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private DataShare: DataSharingService) { }
  ServerArr: Server[] = [];

  ngOnInit(): void {
    this.DataShare.Server__Emitter.subscribe((server: any) => {
      this.ServerArr = server;
    });
  }
}
