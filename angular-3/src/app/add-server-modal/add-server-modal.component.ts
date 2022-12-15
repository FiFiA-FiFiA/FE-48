import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Server } from '../Server.model';

@Component({
  selector: 'app-add-server-modal',
  templateUrl: './add-server-modal.component.html',
  styleUrls: ['./add-server-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddServerModalComponent {
  constructor(private DataShare: DataSharingService) { }
  ServerArr: Server[] = JSON.parse(localStorage.getItem("Servers") as any) || [];
  Server: Server = new Server();
  clicked: any;
  ButtonsStatus: boolean = true;

  AddServer() {
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
    const AlertWrapper = document.querySelector("[AlertWrapper]") as HTMLDivElement;
    const Alert = (AlertText: String, AlertType: String, remove: any) => {
      AlertWrapper.innerHTML = "";
      const div = document.createElement("div");
      div.classList.add("AlertBody", `${AlertType}`);
      div.innerHTML = `
        <span>${AlertText}</span>
        <button type="button" class="Button-AlertClose" Button-AlertClose>
          <i class="fa fa-times"></i>
        </button>`;
      AlertWrapper.append(div);

      const ButtonAlertClose = document.querySelector("[Button-AlertClose]") as HTMLButtonElement || null;
      if (ButtonAlertClose != null) {
        ButtonAlertClose.onclick = () => div.remove();
      }
      setTimeout(() => {
        div.remove();
      }, remove);
    }

    const FindServer = this.ServerArr.findIndex(i => i.ServerName.trim() == this.Server.ServerName.trim());

    if (FindServer == -1) {
      if (this.Server.ServerName.trim() != "") {
        if (this.Server.Port != "") {
          this.ServerArr.push(this.Server);
          for (let index = 0; index < this.ServerArr.length; index++) {
            this.ServerArr[index].ServerId = index;
          }
          localStorage.setItem("Servers", JSON.stringify(this.ServerArr));
          this.DataShare.Server__Emitter.emit(this.ServerArr);
          this.Server = new Server();
          Alert('Server has been Successfully added', 'Success', 3000);
          setTimeout(() => {
            this.Close__Modal();
          }, 1000);
        } else {
          Alert('Server Port cannot be Empty', 'Error', 3000);
        }
      } else {
        Alert('Server Name cannot be Empty', 'Error', 3000);
      }
    } else {
      Alert('Server Already Exists', 'Error', 3000);
    }
  }

  EditServer() {
    this.ServerArr = JSON.parse(localStorage.getItem("Servers") as any) || [];
    const AlertWrapper = document.querySelector("[AlertWrapper]") as HTMLDivElement;
    const Alert = (AlertText: String, AlertType: String, remove: any) => {
      AlertWrapper.innerHTML = "";
      const div = document.createElement("div");
      div.classList.add("AlertBody", `${AlertType}`);
      div.innerHTML = `
        <span>${AlertText}</span>
        <button type="button" class="Button-AlertClose" Button-AlertClose>
          <i class="fa fa-times"></i>
        </button>`;
      AlertWrapper.append(div);

      const ButtonAlertClose = document.querySelector("[Button-AlertClose]") as HTMLButtonElement || null;
      if (ButtonAlertClose != null) {
        ButtonAlertClose.onclick = () => div.remove();
      }
      setTimeout(() => {
        div.remove();
      }, remove);
    }

    if (this.Server.ServerName.trim() != "") {
      if (this.Server.Port != "") {
        let FindServer = this.ServerArr.find(i => i.ServerId == this.Server.ServerId);
        if (FindServer) {
          FindServer.ServerName = this.Server.ServerName;
          FindServer.Port = this.Server.Port;
          FindServer.Status = this.Server.Status;
        }
        localStorage.setItem("Servers", JSON.stringify(this.ServerArr));
        this.DataShare.Server__Emitter.emit(this.ServerArr);
        this.Server = new Server();
        Alert('Server has been Changed', 'Success', 3000);
        setTimeout(() => {
          this.Close__Modal();
        }, 1000);
      } else {
        Alert('Server Port cannot be Empty', 'Error', 3000);
      }
    } else {
      Alert('Server Name cannot be Empty', 'Error', 3000);
    }
  }

  ngOnInit(): void {
    this.DataShare.OpenAddServer__Modal__Emitter.subscribe((temp: any) => {
      this.clicked = true;
      this.ButtonsStatus = true;
      this.Server = new Server();
    });
    this.DataShare.AddServer__Modal__Emitter.subscribe((server: any) => {
      this.clicked = true;
      this.ButtonsStatus = false;
      this.Server = server;
    });
    this.DataShare.Server__Emitter.emit(this.ServerArr);
  }

  Close__Modal() {
    this.clicked = false;
  }
}