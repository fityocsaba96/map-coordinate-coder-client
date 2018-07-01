import { Component, OnInit } from '@angular/core';
import { HistoryList } from '../../models/HistoryList';
import { HistoryService } from '../../services/history.service';
import { HistoryType } from '../../models/HistoryType';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  public historyList: HistoryList;
  public historyType = HistoryType;

  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.historyService.getAllHistory().subscribe(response => {
      this.historyList = response;
    });
  }
}
