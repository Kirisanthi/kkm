import { Component, OnInit } from '@angular/core';
import { Activity3131 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';

@Component({
  selector: 'app-view-activity3131',
  templateUrl: './view-activity3131.component.html',
  styleUrls: ['./view-activity3131.component.css']
})
export class ViewActivity3131Component implements OnInit {
  activity3131: Activity3131[];
  public data = [
  ];
  constructor(private _lpService: LpService,) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity3131().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity3131 = data;
    });
  }
  
  printPage() {
    window.print()
  }
}