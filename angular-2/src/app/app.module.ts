import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SectionServerComponent } from './section-server/section-server.component';
import { SectionAddServerComponent } from './section-add-server/section-add-server.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionServerComponent,
    SectionAddServerComponent,
    HeaderComponent,
    MainComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
