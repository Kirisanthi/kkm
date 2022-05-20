import { Component, OnInit } from '@angular/core';
import { Activity324 } from 'src/app/model/activity';
import { LpService } from 'src/app/service/lp.service';

@Component({
  selector: 'app-view-activity324',
  templateUrl: './view-activity324.component.html',
  styleUrls: ['./view-activity324.component.css']
})
export class ViewActivity324Component implements OnInit {
  activity324: Activity324[];
  public data = [
  ];
  constructor(private _lpService: LpService,) { }

  ngOnInit() {
    this.view();
  }
  view(){
    this._lpService.getActivity324().subscribe((data: any[]) => {
      console.log(this.data)
      this.activity324 = data;
    });
  }
  
  printPage() {
    window.print()
  }
}
