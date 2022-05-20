import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity126 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity126Component } from '../add-activity126/add-activity126.component';

@Component({
  selector: 'app-view-activity126',
  templateUrl: './view-activity126.component.html',
  styleUrls: ['./view-activity126.component.css']
})
export class ViewActivity126Component implements OnInit {
  activity126: Activity126[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity126().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity126 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity126Component,{
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
