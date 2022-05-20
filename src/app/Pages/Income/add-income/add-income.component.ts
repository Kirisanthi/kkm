import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Income} from 'src/app/model/activity';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
 // kpl:Kpl[]=[];
 income:Income = new Income();

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
this._lpService.addIncome(this.income).subscribe(res=>{
 console.log(res);
 window.location.reload();
})
this.close();
}
close() {
this.dialog.closeAll();

}
}