import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
