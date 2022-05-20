import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { LpService } from 'src/app/service/lp.service';
import { Scale, Score } from 'src/app/model/activity';

@Component({
  selector: 'app-graph-score',
  templateUrl: './graph-score.component.html',
  styleUrls: ['./graph-score.component.css']
})
export class GraphScoreComponent implements OnInit {
  score: Score[];

  public dt = [
  ];


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  // public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [

  // ];

  public barChartData: ChartDataSets[] = [

    { data: [0, 0, 0], label: '2019' },
    { data: [0, 0, 0], label: '.2020' },
    { data: [0, 0, 0], label: '2021' },
  ];
  // options: {
  //   scales: {
  //     y: {
  //       beginAtZero: true
  //     }
  //   }
  // }
  constructor(private _lpService: LpService,) { }

  ngOnInit() {
    let x = [];
    let y1 = [];
    let y2 = [];
    let y3 = [];

    this._lpService.getScore().subscribe((dt: any[]) => {
      dt.forEach(function (value) {
        x.push(value.name);
        y1.push(value.y1);
        y2.push(value.y2);
        y3.push(value.y3);
      });
      this.barChartLabels = x;
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

