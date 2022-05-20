import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity138 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity138Component } from '../add-activity138/add-activity138.component';

@Component({
  selector: 'app-view-activity138',
  templateUrl: './view-activity138.component.html',
  styleUrls: ['./view-activity138.component.css']
})
export class ViewActivity138Component implements OnInit {
  activity138: Activity138[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity138().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity138 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity138Component,{
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
