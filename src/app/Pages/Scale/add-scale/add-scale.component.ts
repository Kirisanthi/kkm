import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Scale } from 'src/app/model/activity';

@Component({
  selector: 'app-add-scale',
  templateUrl: './add-scale.component.html',
  styleUrls: ['./add-scale.component.css']
})
export class AddScaleComponent implements OnInit {
// kpl:Kpl[]=[];
scale:Scale = new Scale();

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
this._lpService.addScale(this.scale).subscribe(res=>{
 console.log(res);
 window.location.reload();
})
this.close();
}
close() {
this.dialog.closeAll();

}
}