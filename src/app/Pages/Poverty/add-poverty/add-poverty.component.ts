import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Poverty } from 'src/app/model/activity';

@Component({
  selector: 'app-add-poverty',
  templateUrl: './add-poverty.component.html',
  styleUrls: ['./add-poverty.component.css']
})
export class AddPovertyComponent implements OnInit {
 // kpl:Kpl[]=[];
 poverty:Poverty = new Poverty();

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
this._lpService.addPoverty(this.poverty).subscribe(res=>{
 console.log(res);
 window.location.reload();
})
this.close();
}
close() {
this.dialog.closeAll();

}
}