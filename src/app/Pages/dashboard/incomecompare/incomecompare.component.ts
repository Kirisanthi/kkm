import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { LpService } from 'src/app/service/lp.service';
import { Income } from 'src/app/model/activity';

@Component({
  selector: 'app-incomecompare',
  templateUrl: './incomecompare.component.html',
  styleUrls: ['./incomecompare.component.css']
})
export class IncomecompareComponent implements OnInit {
  income: Income[];
 
  public dt = [];


  
  public barChartOptions: ChartOptions = {
    responsive: true,
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
let basicincome = [];
let by2 = [];
let by3 = [];

    this._lpService.getIncomedash().subscribe((dt: any[]) => {
      // this.poverty = dt;
    dt.forEach(function (value) {
      console.log(dt)
      // console.log(value.no);
     x.push(value.no);
     basicincome.push(value.basicincome);
     by2.push(value.by2);
     by3.push(value.by3);
     }); 
// this.barChartLabels = x;
this.barChartData = [
  { data: basicincome, label: 'basicincome' },
  { data: by2, label: '2020' },
  { data: by3, label: '2021' },
]
    });
  }

  printPage() {
    window.print()
  }
  
}
