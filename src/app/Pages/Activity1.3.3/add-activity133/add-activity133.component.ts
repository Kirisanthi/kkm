import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { LpService } from 'src/app/service/lp.service';
import { ChangeDetectorRef } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Activity112, Activity133 } from 'src/app/model/activity';

@Component({
  selector: 'app-add-activity133',
  templateUrl: './add-activity133.component.html',
  styleUrls: ['./add-activity133.component.css']
})
export class AddActivity133Component implements OnInit {
  activity133List:Activity133[]=[];
  activity133:Activity133 = new Activity133();

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
 this._lpService.addActivity133(this.activity133).subscribe(res=>{
  console.log(res);
  window.location.reload();
})
this.close();
}
close() {
 this.dialog.closeAll();

}


}