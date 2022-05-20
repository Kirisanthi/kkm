import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity124 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity124Component } from '../add-activity124/add-activity124.component';

@Component({
  selector: 'app-view-activity124',
  templateUrl: './view-activity124.component.html',
  styleUrls: ['./view-activity124.component.css']
})
export class ViewActivity124Component implements OnInit {
  activity124: Activity124[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity124().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity124 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity124Component,{
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
