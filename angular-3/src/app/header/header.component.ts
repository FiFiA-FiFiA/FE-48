import { Component, Output, EventEmitter } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private DataShare: DataSharingService) { }

  Open__AddServerModal() {
    this.DataShare.OpenAddServer__Modal__Emitter.emit();
  }
}
