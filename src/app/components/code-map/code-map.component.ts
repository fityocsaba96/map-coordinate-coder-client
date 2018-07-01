import { Component, OnInit } from '@angular/core';
import { NotifierService } from '../../services/notifier.service';
import { Coordinate } from '../../models/Coordinate';

@Component({
  selector: 'app-code-map',
  templateUrl: './code-map.component.html',
  styleUrls: ['./code-map.component.css']
})
export class CodeMapComponent implements OnInit {

  public coordinate: Coordinate;

  constructor(
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
    this.notifierService.encodingDone.subscribe(history => {
      this.coordinate = history.coordinate;
    });
    this.notifierService.decodingDone.subscribe(history => {
      this.coordinate = history.coordinate;
    });
  }
}
