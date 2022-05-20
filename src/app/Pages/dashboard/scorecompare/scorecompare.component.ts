import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { LpService } from 'src/app/service/lp.service';
import { Income, Score } from 'src/app/model/activity';

@Component({
  selector: 'app-scorecompare',
  templateUrl: './scorecompare.component.html',
  styleUrls: ['./scorecompare.component.css']
})
export class ScorecompareComponent implements OnInit {
  score: Score[];
 
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

let y1 = [];
let y2 = [];

    this._lpService.getScoredash().subscribe((dt: any[]) => {
      // this.poverty = dt;
    dt.forEach(function (value) {
      console.log(dt)
      // console.log(value.no);
    //  x.push(value.no);
     y1.push(value.y1);
     y2.push(value.y2);
     }); 
// this.barChartLabels = x;
this.barChartData = [
  { data: y1, label: '2020' },
  { data: y2, label: '2021' },
]
    });

    
  }



  printPage() {
    window.print()
  }
  
}
