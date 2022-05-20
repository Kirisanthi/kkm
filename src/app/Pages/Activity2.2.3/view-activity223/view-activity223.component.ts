import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity223 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity223Component } from './add-activity223/add-activity223.component';

@Component({
  selector: 'app-view-activity223',
  templateUrl: './view-activity223.component.html',
  styleUrls: ['./view-activity223.component.css']
})
export class ViewActivity223Component implements OnInit {
  activity223: Activity223[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity223().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity223 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity223Component,{
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