import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity122 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity122Component } from '../add-activity122/add-activity122.component';

@Component({
  selector: 'app-view-activity122',
  templateUrl: './view-activity122.component.html',
  styleUrls: ['./view-activity122.component.css']
})
export class ViewActivity122Component implements OnInit {
  activity122: Activity122[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity122().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity122 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity122Component,{
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
