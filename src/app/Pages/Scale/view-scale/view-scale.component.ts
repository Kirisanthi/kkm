import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Scale } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddScaleComponent } from '../add-scale/add-scale.component';
import { GraphScaleComponent } from '../graph-scale/graph-scale.component';

@Component({
  selector: 'app-view-scale',
  templateUrl: './view-scale.component.html',
  styleUrls: ['./view-scale.component.css']
})
export class ViewScaleComponent implements OnInit {
  scale: Scale[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getScale().subscribe((data: any[]) => {
      console.log(this.data)
      this.scale = data;
    });
  }
  addKpl() {
    const dialogRef = this.dialog.open(AddScaleComponent,{
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // ViewGraph(){

  // }
  printPage() {
    window.print()
  }

  viewgraph(){
    this.view()
    const dialogRef = this.dialog.open(GraphScaleComponent,{
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}