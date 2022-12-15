import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ServerComponent } from './server/server.component';
import { ServerExistComponent } from './server-exist/server-exist.component';
import { AddServerModalComponent } from './add-server-modal/add-server-modal.component';
import { ServerDetailsModalComponent } from './server-details-modal/server-details-modal.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ServerComponent,
    ServerExistComponent,
    AddServerModalComponent,
    ServerDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
