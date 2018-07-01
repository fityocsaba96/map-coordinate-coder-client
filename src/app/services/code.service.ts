import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coordinate } from '../models/Coordinate';
import { Observable } from 'rxjs';

@Injectable()
export class CodeService {

  constructor(
    private http: HttpClient
  ) { }

  public encode(coordinate: Coordinate, accuracy: number): Observable<any> {
    return this.http.post('/api/encode', { coordinate, accuracy });
  }

  public decode(code: string): Observable<Coordinate> {
    return this.http.post<Coordinate>('/api/decode', { code });
  }
}
