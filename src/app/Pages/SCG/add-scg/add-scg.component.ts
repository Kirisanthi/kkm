import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Scg } from 'src/app/model/activity';

@Component({
  selector: 'app-add-scg',
  templateUrl: './add-scg.component.html',
  styleUrls: ['./add-scg.component.css']
})
export class AddScgComponent implements OnInit {
  scg:Scg = new Scg();

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
  this._lpService.addScg(this.scg).subscribe(res=>{
   console.log(res);
   window.location.reload();
  })
  this.close();
  }
  close() {
  this.dialog.closeAll();
  
  }
  }
