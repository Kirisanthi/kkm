import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity135 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity135Component } from '../add-activity135/add-activity135.component';

@Component({
  selector: 'app-view-activity135',
  templateUrl: './view-activity135.component.html',
  styleUrls: ['./view-activity135.component.css']
})
export class ViewActivity135Component implements OnInit {
  activity135: Activity135[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity135().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity135 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity135Component,{
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