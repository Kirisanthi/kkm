import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Activity133 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddActivity133Component } from '../add-activity133/add-activity133.component';

@Component({
  selector: 'app-view-activity133',
  templateUrl: './view-activity133.component.html',
  styleUrls: ['./view-activity133.component.css']
})
export class ViewActivity133Component implements OnInit {
  activity133: Activity133[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity133().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity133 = data;
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity133Component,{
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
