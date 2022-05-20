import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Kpl, Poverty } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddPovertyComponent } from '../add-poverty/add-poverty.component';
import { GraphPovertyComponent } from '../graph-poverty/graph-poverty.component';



@Component({
  selector: 'app-view-poverty',
  templateUrl: './view-poverty.component.html',
  styleUrls: ['./view-poverty.component.css']
})
export class ViewPovertyComponent implements OnInit {
  poverty: Poverty[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getPoverty().subscribe((data: any[]) => {
      this.poverty = data;
    });
  }
  addPoverty() {
    const dialogRef = this.dialog.open(AddPovertyComponent,{
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

  viewgraph(){
    this.view()
    const dialogRef = this.dialog.open(GraphPovertyComponent,{
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}