import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity112 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity112Component } from '../add-activity112/add-activity112.component';

@Component({
  selector: 'app-view-activity112',
  templateUrl: './view-activity112.component.html',
  styleUrls: ['./view-activity112.component.css']
})
export class ViewActivity112Component implements OnInit {
  activity112: Activity112[];
  public data = [
  ];

  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity112().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity112 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity112Component,{
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
