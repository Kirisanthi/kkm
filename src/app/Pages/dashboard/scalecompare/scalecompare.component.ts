import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { LpService } from 'src/app/service/lp.service';
import { Income, Scale } from 'src/app/model/activity';

@Component({
  selector: 'app-scalecompare',
  templateUrl: './scalecompare.component.html',
  styleUrls: ['./scalecompare.component.css']
})
export class ScalecompareComponent implements OnInit {
  scale: Scale[];
 
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

    this._lpService.getScaledash().subscribe((dt: any[]) => {
      // this.poverty = dt;
    dt.forEach(function (value) {
      console.log(dt)
      // console.log(value.no);
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


//   year1: any; 
//   chartType = 'bar';
//   public data = [
//   ];
//    y1 = [];
//   y2 = [];
//   y3 = []; 

//   constructor(private _lpService: LpService,) { }
//   ngOnInit() {
//  let y1;
//  let y2;
//  let y3;


//   // this._lpService.getScaledash().subscribe((dt: any[]) => {
//   // dt.forEach(function (value) {
//   //   console.log(value)
//   // y1.push(value.y1);
//   //  y2.push(value.y2);
//   // y3.push(value.y3);
//   //  });
   
//   // });

//   // this._lpService.getScaledash().subscribe((data: any[]) => {
//   //   console.log(data)
//   //   // this.activity121 = data;
//   //   // console.log(this.activity121)
 
//   // });

// }


// chartDatasets = [
//   this._lpService.getScaledash().subscribe((data: any[]) => {
//     console.log(data)
//   }),
//   console.log(this.data),
//   { data:  [this.data[0]], label: 'My First dataset' }
// ];

//   chartLabels = ['year1', 'year2', 'year3'];

//   chartColors = [
//     {
//       backgroundColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//       ],
//       borderWidth: 2,
//     }
//   ];

//   chartOptions: any = {
//     responsive: true,
//     scales: {
//       yAxes: [{
//           ticks: {
//               beginAtZero: true
//           }
//       }],
// }
//   };

//   chartClicked(event: any): void {
//     console.log(event);
//   }

//   chartHovered(event: any): void {
//     console.log(event);
//   }
  
// }


