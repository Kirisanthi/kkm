import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity131 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity131Component } from '../add-activity131/add-activity131.component';

@Component({
  selector: 'app-view-activity131',
  templateUrl: './view-activity131.component.html',
  styleUrls: ['./view-activity131.component.css']
})
export class ViewActivity131Component implements OnInit {
  activity131: Activity131[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity131().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity131 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity131Component,{
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
