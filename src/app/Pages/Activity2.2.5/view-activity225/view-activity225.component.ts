import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity225 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity225Component } from '../add-activity225/add-activity225.component';

@Component({
  selector: 'app-view-activity225',
  templateUrl: './view-activity225.component.html',
  styleUrls: ['./view-activity225.component.css']
})
export class ViewActivity225Component implements OnInit {
  activity225: Activity225[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity225().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity225 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity225Component,{
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