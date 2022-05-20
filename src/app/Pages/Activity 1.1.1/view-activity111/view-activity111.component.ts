import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { Activity111 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { AddActivity111Component } from '../add-activity111/add-activity111.component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-activity111',
  templateUrl: './view-activity111.component.html',
  styleUrls: ['./view-activity111.component.css']
})
export class ViewActivity111Component implements OnInit {
  activity111: Activity111[];
  morespent:number = 45000;
  extraspent:number;
  totalspent: any;
  morebalance = -45000
  public data = [
  ];
  balance: any;
  budget:any;

  constructor( private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }

  view(){
    this._lpService.getActivity111().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity111 = data;
      // this.extraspent = this.activity111[0].spent
      // this.totalspent = this.extraspent + this.morespent
      // console.log(this.activity111[0].spent);
      // console.log(this.morespent);
    });
  }
  addActivity() {
    const dialogRef = this.dialog.open(AddActivity111Component,{
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



