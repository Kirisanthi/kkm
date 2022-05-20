import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {  Scg } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddScgComponent } from '../add-scg/add-scg.component';


@Component({
  selector: 'app-view-scg',
  templateUrl: './view-scg.component.html',
  styleUrls: ['./view-scg.component.css']
})
export class ViewScgComponent implements OnInit {
  scg: Scg[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    debugger
    this._lpService.getScg().subscribe((data: any[]) => {
      console.log(this.data)
      this.scg = data;
    });
  }
  addScg() {
    const dialogRef = this.dialog.open(AddScgComponent,{
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