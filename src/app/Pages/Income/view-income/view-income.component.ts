import { Component, OnInit } from '@angular/core';
import { AddIncomeComponent } from '../add-income/add-income.component';
import { MatDialog } from '@angular/material';
import { Kpl, Income } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { GraphIncomeComponent } from '../graph-income/graph-income.component';

@Component({
  selector: 'app-view-income',
  templateUrl: './view-income.component.html',
  styleUrls: ['./view-income.component.css']
})
export class ViewIncomeComponent implements OnInit {
  income: Income[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getIncome().subscribe((data: any[]) => {
      console.log(this.data)
      this.income = data;
    });
  }
  addIncome() {
    const dialogRef = this.dialog.open(AddIncomeComponent,{
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
    const dialogRef = this.dialog.open(GraphIncomeComponent,{
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}