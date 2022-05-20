import { Component, OnInit } from '@angular/core';
import { Poverty } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  poverty: Poverty[];
  public data = [
  ];
  constructor(private _lpService: LpService,) { }

  ngOnInit() {

  }
  printPage() {
    window.print()
  }
}
