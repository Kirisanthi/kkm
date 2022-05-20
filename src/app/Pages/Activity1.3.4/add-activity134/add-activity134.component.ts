import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Activity112, Activity134 } from 'src/app/model/activity';
@Component({
  selector: 'app-add-activity134',
  templateUrl: './add-activity134.component.html',
  styleUrls: ['./add-activity134.component.css']
})
export class AddActivity134Component implements OnInit {
  activity134List:Activity134[]=[];
  activity134:Activity134 = new Activity134();

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
 this._lpService.addActivity134(this.activity134).subscribe(res=>{
  console.log(res);
  window.location.reload();
})
this.close();
}
close() {
 this.dialog.closeAll();

}


}
