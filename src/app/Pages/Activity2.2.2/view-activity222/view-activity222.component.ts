import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity222 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity222Component } from '../add-activity222/add-activity222.component';

@Component({
  selector: 'app-view-activity222',
  templateUrl: './view-activity222.component.html',
  styleUrls: ['./view-activity222.component.css']
})
export class ViewActivity222Component implements OnInit {
  activity222: Activity222[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity222().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity222 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity222Component,{
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