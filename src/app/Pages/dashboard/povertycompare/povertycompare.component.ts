import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { LpService } from 'src/app/service/lp.service';
import { Income, Poverty } from 'src/app/model/activity';

@Component({
  selector: 'app-povertycompare',
  templateUrl: './povertycompare.component.html',
  styleUrls: ['./povertycompare.component.css']
})
export class PovertycompareComponent implements OnInit {
  poverty: Poverty[];
 
  public dt = [];


  
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  
  public barChartData: ChartDataSets[] = [

    { data: [], label: '2019' },
    { data: [], label: '.2020' },
    { data: [], label: '2021' },
  ];
  
  constructor(private _lpService: LpService,) { }
  
  ngOnInit() {
let x = [];
let y1 = [];
let y2 = [];
let y3 = [];

    this._lpService.getdash1().subscribe((dt: any[]) => {
      // this.poverty = dt;
    dt.forEach(function (value) {
      console.log(dt)
      // console.log(value.no);
     x.push(value.no);
     y1.push(value.y1);
     y2.push(value.y2);
     y3.push(value.y3);
     }); 
// this.barChartLabels = x;
this.barChartData = [
  { data: y1, label: '2019' },
  { data: y2, label: '2020' },
  { data: y3, label: '2021' },
]
    });
  }

  printPage() {
    window.print()
  }
  
}
