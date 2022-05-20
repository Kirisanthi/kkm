import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

import { Activity111, Activity139 } from 'src/app/model/activity';

@Component({
  selector: 'app-add-activity111',
  templateUrl: './add-activity111.component.html',
  styleUrls: ['./add-activity111.component.css']
})
export class AddActivity111Component implements OnInit {
  activity111List:Activity111[]=[];
  activity111:Activity111 = new Activity111();

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
 this._lpService.addActivity111(this.activity111).subscribe(res=>{
  console.log(res);
  window.location.reload();
})
this.close();
}
close() {
 this.dialog.closeAll();

}


}
