import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryList } from '../models/HistoryList';

@Injectable()
export class HistoryService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllHistory(): Observable<HistoryList> {
    return this.http.get<HistoryList>('/api/history');
  }
}
