import { Component, OnInit } from '@angular/core';
import { Activity211 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import {MatDialog} from '@angular/material/dialog';
import { AddActivity211Component } from '../add-activity211/add-activity211.component';

@Component({
  selector: 'app-view-activity211',
  templateUrl: './view-activity211.component.html',
  styleUrls: ['./view-activity211.component.css']
})
export class ViewActivity211Component implements OnInit {
  activity211: Activity211[];
  addactivity211: any;
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity211().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity211 = data;
    });
  }

  addActivity() {
    const dialogRef = this.dialog.open(AddActivity211Component,{
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
