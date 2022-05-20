import { Component, OnInit } from '@angular/core';
import { Activity139 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity139Component } from '../add-activity139/add-activity139.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-view-activity139',
  templateUrl: './view-activity139.component.html',
  styleUrls: ['./view-activity139.component.css']
})
export class ViewActivity139Component implements OnInit {
  activity139: Activity139[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity139().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity139 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity139Component,{
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
}
