import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity132 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity132Component } from '../add-activity132/add-activity132.component';

@Component({
  selector: 'app-view-activity132',
  templateUrl: './view-activity132.component.html',
  styleUrls: ['./view-activity132.component.css']
})
export class ViewActivity132Component implements OnInit {
  activity132: Activity132[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity132().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity132 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity132Component,{
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
