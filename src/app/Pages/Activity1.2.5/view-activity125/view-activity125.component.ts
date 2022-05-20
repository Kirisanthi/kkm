import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity125 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity125Component } from '../add-activity125/add-activity125.component';

@Component({
  selector: 'app-view-activity125',
  templateUrl: './view-activity125.component.html',
  styleUrls: ['./view-activity125.component.css']
})
export class ViewActivity125Component implements OnInit {
  activity125: Activity125[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity125().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity125 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity125Component,{
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
