import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule, WavesModule, ButtonsModule} from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from './material/material.module';

import { ViewActivity111Component } from './Pages/Activity 1.1.1/view-activity111/view-activity111.component';
import { AddActivity111Component } from './Pages/Activity 1.1.1/add-activity111/add-activity111.component';

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ViewActivity112Component } from './Pages/Activity1.1.2/view-activity112/view-activity112.component';
import { ViewActivity121Component } from './Pages/activity1.2.1/view-activity121/view-activity121.component';
import { ViewActivity122Component } from './Pages/Activity1.2.2/view-activity122/view-activity122.component';
import { ViewActivity123Component } from './Pages/Activity1.2.3/view-activity123/view-activity123.component';
import { ViewActivity124Component } from './Pages/Activity1.2.4/view-activity124/view-activity124.component';
import { ViewActivity125Component } from './Pages/Activity1.2.5/view-activity125/view-activity125.component';
import { ViewActivity126Component } from './Pages/Activity1.2.6/view-activity126/view-activity126.component';
import { ViewActivity131Component } from './Pages/Activity1.3.1/view-activity131/view-activity131.component';
import { ViewActivity132Component } from './Pages/Activity1.3.2/view-activity132/view-activity132.component';
import { ViewActivity133Component } from './Pages/Activity1.3.3/view-activity133/view-activity133.component';
import { ViewActivity134Component } from './Pages/Activity1.3.4/view-activity134/view-activity134.component';
import { ViewActivity135Component } from './Pages/Activity1.3.5/view-activity135/view-activity135.component';
import { ViewActivity138Component } from './Pages/Activity1.3.8/view-activity138/view-activity138.component';
import { ViewActivity139Component } from './Pages/Activity1.3.9/view-activity139/view-activity139.component';
import { ViewActivity211Component } from './Pages/Activity2.1.1/view-activity211/view-activity211.component';
import { ViewActivity212Component } from './Pages/Activity2.1.2/view-activity212/view-activity212.component';
import { ViewActivity213Component } from './Pages/Activity2.1.3/view-activity213/view-activity213.component';
import { ViewActivity222Component } from './Pages/Activity2.2.2/view-activity222/view-activity222.component';
import { ViewActivity223Component } from './Pages/Activity2.2.3/view-activity223/view-activity223.component';
import { ViewActivity225Component } from './Pages/Activity2.2.5/view-activity225/view-activity225.component';
import { ViewActivity311Component } from './Pages/outcome3/Activity3.1.1/view-activity311/view-activity311.component';
import { ViewActivity3131Component } from './Pages/outcome3/Activity1.3.1/view-activity3131/view-activity3131.component';
import { ViewActivity323Component } from './Pages/outcome3/Activity3.2.3/view-activity323/view-activity323.component';
import { ViewActivity324Component } from './Pages/outcome3/Activity324/view-activity324/view-activity324.component';
import { AddActivity211Component } from './Pages/Activity2.1.1/add-activity211/add-activity211.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddActivity132Component } from './Pages/Activity1.3.2/add-activity132/add-activity132.component';
import { AddActivity139Component } from './Pages/Activity1.3.9/add-activity139/add-activity139.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddActivity112Component } from './Pages/Activity1.1.2/add-activity112/add-activity112.component';
import { AddActivity121Component } from './Pages/activity1.2.1/add-activity121/add-activity121.component';
import { AddActivity122Component } from './Pages/Activity1.2.2/add-activity122/add-activity122.component';
import { AddActivity123Component } from './Pages/Activity1.2.3/add-activity123/add-activity123.component';
import { AddActivity124Component } from './Pages/Activity1.2.4/add-activity124/add-activity124.component';
import { AddActivity125Component } from './Pages/Activity1.2.5/add-activity125/add-activity125.component';
import { AddActivity126Component } from './Pages/Activity1.2.6/add-activity126/add-activity126.component';
import { AddActivity131Component } from './Pages/Activity1.3.1/add-activity131/add-activity131.component';
import { AddActivity133Component } from './Pages/Activity1.3.3/add-activity133/add-activity133.component';
import { AddActivity134Component } from './Pages/Activity1.3.4/add-activity134/add-activity134.component';
import { AddActivity135Component } from './Pages/Activity1.3.5/add-activity135/add-activity135.component';
import { AddActivity138Component } from './Pages/Activity1.3.8/add-activity138/add-activity138.component';
import { AddActivity212Component } from './Pages/Activity2.1.2/add-activity212/add-activity212.component';
import { AddActivity213Component } from './Pages/Activity2.1.3/add-activity213/add-activity213.component';
import { AddActivity222Component } from './Pages/Activity2.2.2/add-activity222/add-activity222.component';
import { AddActivity223Component } from './Pages/Activity2.2.3/view-activity223/add-activity223/add-activity223.component';
import { AddActivity225Component } from './Pages/Activity2.2.5/add-activity225/add-activity225.component';
import { ViewIncomeComponent } from './Pages/Income/view-income/view-income.component';
import { AddIncomeComponent } from './Pages/Income/add-income/add-income.component';
import { ViewKplComponent } from './Pages/KPLF/view-kpl/view-kpl.component';
import { AddKplComponent } from './Pages/KPLF/add-kpl/add-kpl.component';
import { ViewPovertyComponent } from './Pages/Poverty/view-poverty/view-poverty.component';
import { AddPovertyComponent } from './Pages/Poverty/add-poverty/add-poverty.component';
import { ViewScaleComponent } from './Pages/Scale/view-scale/view-scale.component';
import { AddScaleComponent } from './Pages/Scale/add-scale/add-scale.component';
import { ViewScgComponent } from './Pages/SCG/view-scg/view-scg.component';
import { AddScgComponent } from './Pages/SCG/add-scg/add-scg.component';
import { AddScoreComponent } from './Pages/Score/add-score/add-score.component';
import { ViewScoreComponent } from './Pages/Score/view-score/view-score.component';
import { LoginComponent } from './Pages/login/login.component';
import { ChartsModule } from 'ng2-charts';
import { GraphPovertyComponent } from './Pages/Poverty/graph-poverty/graph-poverty.component';
import { GraphIncomeComponent } from './Pages/Income/graph-income/graph-income.component';
import { GraphScaleComponent } from './Pages/Scale/graph-scale/graph-scale.component';
import { GraphScoreComponent } from './Pages/Score/graph-score/graph-score.component';
import { PovertycompareComponent } from './Pages/dashboard/povertycompare/povertycompare.component';
import { IncomecompareComponent } from './Pages/dashboard/incomecompare/incomecompare.component';
import { ScalecompareComponent } from './Pages/dashboard/scalecompare/scalecompare.component';
import { ScorecompareComponent } from './Pages/dashboard/scorecompare/scorecompare.component';
// import { IgxItemLegendModule, IgxLegendModule, IgxPieChartModule } from 'igniteui-angular-charts';



// import { PieChartDataSampleComponent } from "./pie-chart-overview/pie-chart-overview.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ViewActivity111Component,
    AddActivity111Component,
    ViewActivity112Component,
    ViewActivity121Component,
    ViewActivity122Component,
    ViewActivity123Component,
    ViewActivity124Component,
    ViewActivity125Component,
    ViewActivity126Component,
    ViewActivity131Component,
    ViewActivity132Component,
    ViewActivity133Component,
    ViewActivity134Component,
    ViewActivity135Component,
    ViewActivity138Component,
    ViewActivity139Component,
    ViewActivity211Component,
    ViewActivity212Component,
    ViewActivity213Component,
    ViewActivity222Component,
    ViewActivity223Component,
    ViewActivity225Component,
    ViewActivity311Component,
    ViewActivity3131Component,
    ViewActivity323Component,
    ViewActivity324Component,
    AddActivity211Component,
    AddActivity132Component,
    AddActivity139Component,
    AddActivity112Component,
    AddActivity121Component,
    AddActivity122Component,
    AddActivity123Component,
    AddActivity124Component,
    AddActivity125Component,
    AddActivity126Component,
    AddActivity131Component,
    AddActivity133Component,
    AddActivity134Component,
    AddActivity135Component,
    AddActivity138Component,
    AddActivity212Component,
    AddActivity213Component,
    AddActivity222Component,
    AddActivity223Component,
    AddActivity225Component,
    ViewIncomeComponent,
    AddIncomeComponent,
    ViewKplComponent,
    AddKplComponent,
    ViewPovertyComponent,
    AddPovertyComponent,
    ViewScaleComponent,
    AddScaleComponent,
    ViewScgComponent,
    AddScgComponent,
    AddScoreComponent,
    ViewScoreComponent,
    AddIncomeComponent,
    AddScaleComponent,
    AddScoreComponent,
    AddScgComponent,
    LoginComponent,
    GraphPovertyComponent,
    GraphIncomeComponent,
    GraphScaleComponent,
    GraphScoreComponent,
    PovertycompareComponent,
    PovertycompareComponent,
    IncomecompareComponent,
    ScalecompareComponent,
    ScorecompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MaterialModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddActivity211Component,
    AddActivity132Component,
    AddActivity139Component,
    AddActivity131Component,
    AddActivity133Component,
    AddActivity134Component,
    AddActivity135Component,
    AddActivity138Component,
    AddActivity112Component,
    AddActivity121Component,
    AddActivity122Component,
    AddActivity123Component,
    AddActivity124Component,
    AddActivity125Component,
    AddActivity126Component,
    AddActivity212Component,
    AddActivity213Component,
    AddActivity222Component,
    AddActivity223Component,
    AddActivity225Component,
    AddActivity111Component,
    AddKplComponent,
    AddPovertyComponent,
    AddIncomeComponent,
    AddScaleComponent,
    AddScoreComponent,
    AddScgComponent,
    GraphPovertyComponent,
    GraphIncomeComponent,
    GraphScaleComponent,
    GraphScoreComponent
   ]
})
export class AppModule { }
