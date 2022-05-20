import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Kpl } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';
import { AddKplComponent } from '../add-kpl/add-kpl.component';

@Component({
  selector: 'app-view-kpl',
  templateUrl: './view-kpl.component.html',
  styleUrls: ['./view-kpl.component.css']
})
export class ViewKplComponent implements OnInit {
  kpl: Kpl[];
  public data = [
  ];
  constructor(private _lpService: LpService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getKpl().subscribe((data: any[]) => {
      console.log(this.data)
      this.kpl = data;
    });
  }
  addKpl() {
    const dialogRef = this.dialog.open(AddKplComponent,{
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