import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity212 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity212Component } from '../add-activity212/add-activity212.component';

@Component({
  selector: 'app-view-activity212',
  templateUrl: './view-activity212.component.html',
  styleUrls: ['./view-activity212.component.css']
})
export class ViewActivity212Component implements OnInit {
  activity212: Activity212[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity212().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity212 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity212Component,{
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
