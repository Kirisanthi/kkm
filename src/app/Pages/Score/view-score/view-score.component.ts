import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Score } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddScoreComponent } from '../add-score/add-score.component';
import { GraphScoreComponent } from '../graph-score/graph-score.component';

@Component({
  selector: 'app-view-score',
  templateUrl: './view-score.component.html',
  styleUrls: ['./view-score.component.css']
})
export class ViewScoreComponent implements OnInit {
  score: Score[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getScore().subscribe((data: any[]) => {
      console.log(this.data)
      this.score = data;
    });
  }
  addScore() {
    const dialogRef = this.dialog.open(AddScoreComponent,{
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
    const dialogRef = this.dialog.open(GraphScoreComponent,{
      width: '75%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
