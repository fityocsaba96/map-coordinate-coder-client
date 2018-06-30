import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB05BGG8vL_vhk6rj4DaX0AQ1PEL3DgweI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
