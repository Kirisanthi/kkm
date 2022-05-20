import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity213 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity213Component } from '../add-activity213/add-activity213.component';

@Component({
  selector: 'app-view-activity213',
  templateUrl: './view-activity213.component.html',
  styleUrls: ['./view-activity213.component.css']
})
export class ViewActivity213Component implements OnInit {
  activity213: Activity213[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity213().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity213 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity213Component,{
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
