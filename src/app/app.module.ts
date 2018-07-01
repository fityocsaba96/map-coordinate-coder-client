import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './modules/material/material.module';
import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CodeComponent } from './components/code/code.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryService } from './services/history.service';
import { EncodeComponent } from './components/encode/encode.component';
import { DecodeComponent } from './components/decode/decode.component';
import { NotifierService } from './services/notifier.service';
import { CodeService } from './services/code.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CodeComponent,
    HistoryListComponent,
    HistoryComponent,
    EncodeComponent,
    DecodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB05BGG8vL_vhk6rj4DaX0AQ1PEL3DgweI'
    })
  ],
  providers: [
    NotifierService,
    HistoryService,
    CodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
