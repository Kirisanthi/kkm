import { Component, OnInit } from '@angular/core';
import { Activity311 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';

@Component({
  selector: 'app-view-activity311',
  templateUrl: './view-activity311.component.html',
  styleUrls: ['./view-activity311.component.css']
})
export class ViewActivity311Component implements OnInit {
  activity311: Activity311[];
  public data = [
  ];
  constructor(private _lpService: LpService,) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity311().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity311 = data;
    });
  }
  
  printPage() {
    window.print()
  }
}