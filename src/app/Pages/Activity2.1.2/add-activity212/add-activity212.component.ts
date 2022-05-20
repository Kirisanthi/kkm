import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Activity112, Activity212 } from 'src/app/model/activity';

@Component({
  selector: 'app-add-activity212',
  templateUrl: './add-activity212.component.html',
  styleUrls: ['./add-activity212.component.css']
})
export class AddActivity212Component implements OnInit {
  activity212List:Activity212[]=[];
  activity212:Activity212 = new Activity212();

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
 this._lpService.addActivity212(this.activity212).subscribe(res=>{
  console.log(res);
  window.location.reload();
})
this.close();
}
close() {
 this.dialog.closeAll();

}


}
