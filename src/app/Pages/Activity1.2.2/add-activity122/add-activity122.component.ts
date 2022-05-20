import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Activity122, Activity139 } from 'src/app/model/activity';

@Component({
  selector: 'app-add-activity122',
  templateUrl: './add-activity122.component.html',
  styleUrls: ['./add-activity122.component.css']
})
export class AddActivity122Component implements OnInit {
  activity122List:Activity122[]=[];
  activity122:Activity122 = new Activity122();

constructor(
  private _lpService: LpService,
  private router: Router,
  protected cd: ChangeDetectorRef,
  public dialog: MatDialog,
  // private snackBar: MatSnackBar,
 ) { }


ngOnInit() {
}

onSubmit(form:NgForm):void{
 this._lpService.addActivity122(this.activity122).subscribe(res=>{
  console.log(res);
  window.location.reload();
})
this.close();
}
close() {
 this.dialog.closeAll();

}


}