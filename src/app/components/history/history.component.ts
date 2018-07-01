import { Component, Input } from '@angular/core';
import { HistoryType } from '../../models/HistoryType';
import { History } from '../../models/History';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  public historyType = HistoryType;

  @Input()
  public history: History;

  @Input()
  public type: HistoryType;

  constructor() { }
}
