import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from '../../components/code/code.component';
import { HistoryListComponent } from '../../components/history-list/history-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'code', pathMatch: 'full' },
  { path: 'code', component: CodeComponent },
  { path: 'history', component: HistoryListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
