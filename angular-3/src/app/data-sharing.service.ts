import { Server } from './Server.model';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  @Output() OpenAddServer__Modal__Emitter: EventEmitter<any> = new EventEmitter();
  @Output() AddServer__Modal__Emitter: EventEmitter<Server> = new EventEmitter();
  @Output() Server__Details__Modal__Emitter: EventEmitter<Server> = new EventEmitter();
  @Output() Server__Emitter: EventEmitter<any> = new EventEmitter();
}
