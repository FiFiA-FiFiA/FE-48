import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from '../Server.model';

@Component({
  selector: 'app-section-add-server',
  templateUrl: './section-add-server.component.html',
  styleUrls: ['./section-add-server.component.css']
})
export class SectionAddServerComponent {
  server: Server = new Server();
  @Output() addServerEmitter: EventEmitter<Server> = new EventEmitter();

  SaveServer() {
    this.addServerEmitter.emit(this.server);
    this.server = new Server();

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder') as HTMLDivElement;

    const alert = (message: String, type: any) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')

      alertPlaceholder.append(wrapper)
    }
    
    alert('Server has been Successfully added', 'success'); 
  }
}
