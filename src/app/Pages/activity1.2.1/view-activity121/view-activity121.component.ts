import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity121 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity121Component } from '../add-activity121/add-activity121.component';

@Component({
  selector: 'app-view-activity121',
  templateUrl: './view-activity121.component.html',
  styleUrls: ['./view-activity121.component.css']
})
export class ViewActivity121Component implements OnInit {
  activity121: Activity121[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
    // this.totalParticipants(i);
  }
  view(){
    this._lpService.getActivity121().subscribe((data: any[]) => {
      console.log(data)
      this.activity121 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity121Component,{
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  printPage() {
    window.print()
  }
  totalParticipants(i: number){
    this._lpService.getActivity121().subscribe((data: any[]) => {
      console.log(data)
      this.activity121 = data;
      console.log(this.activity121)
    });
    // participants

      var sum = 0;
      var keys = Object.keys(this.activity121[i]);
      keys.forEach(key => {
        if (key == "participants") {
          sum += Number(this.activity121[i][key]);
        }
      });
      console.log(sum);
      // this.activity121[i].average = sum / (keys.length - 1);
  



  }
}


