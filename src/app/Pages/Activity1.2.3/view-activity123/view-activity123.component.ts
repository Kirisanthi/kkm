import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity123 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity123Component } from '../add-activity123/add-activity123.component';

@Component({
  selector: 'app-view-activity123',
  templateUrl: './view-activity123.component.html',
  styleUrls: ['./view-activity123.component.css']
})
export class ViewActivity123Component implements OnInit {
  activity123: Activity123[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity123().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity123 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity123Component,{
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
