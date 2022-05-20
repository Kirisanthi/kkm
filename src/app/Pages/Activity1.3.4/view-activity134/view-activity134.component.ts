import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity134 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity134Component } from '../add-activity134/add-activity134.component';

@Component({
  selector: 'app-view-activity134',
  templateUrl: './view-activity134.component.html',
  styleUrls: ['./view-activity134.component.css']
})
export class ViewActivity134Component implements OnInit {
  activity134: Activity134[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity134().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity134 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity134Component,{
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