import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Activity112, Activity225, Kpl } from 'src/app/model/activity';

@Component({
  selector: 'app-add-kpl',
  templateUrl: './add-kpl.component.html',
  styleUrls: ['./add-kpl.component.css']
})
export class AddKplComponent implements OnInit {
  // kpl:Kpl[]=[];
  kpl:Kpl = new Kpl();
  activity225:Activity225 = new Activity225();

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
 this._lpService.addKpl(this.kpl).subscribe(res=>{
  console.log(res);
  window.location.reload();
})
this.close();
}
close() {
 this.dialog.closeAll();

}
}
