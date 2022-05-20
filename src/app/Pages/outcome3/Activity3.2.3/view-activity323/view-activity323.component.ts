import { Component, OnInit } from '@angular/core';
import { Activity323 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';

@Component({
  selector: 'app-view-activity323',
  templateUrl: './view-activity323.component.html',
  styleUrls: ['./view-activity323.component.css']
})
export class ViewActivity323Component implements OnInit {
  activity323: Activity323[];
  public data = [
  ];
  constructor(private _lpService: LpService,) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity323().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity323 = data;
    });
  }
  
  printPage() {
    window.print()
  }
}
