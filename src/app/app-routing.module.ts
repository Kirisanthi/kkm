import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewActivity111Component } from './Pages/Activity 1.1.1/view-activity111/view-activity111.component';
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

import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HeaderComponent } from './Pages/header/header.component';
import { ViewActivity311Component } from './Pages/outcome3/Activity3.1.1/view-activity311/view-activity311.component';
import { ViewActivity323Component } from './Pages/outcome3/Activity3.2.3/view-activity323/view-activity323.component';
import { ViewActivity324Component } from './Pages/outcome3/Activity324/view-activity324/view-activity324.component';
import { ViewActivity3131Component } from './Pages/outcome3/Activity1.3.1/view-activity3131/view-activity3131.component';
import { ViewKplComponent } from './Pages/KPLF/view-kpl/view-kpl.component';
import { ViewPovertyComponent } from './Pages/Poverty/view-poverty/view-poverty.component';
import { ViewIncomeComponent } from './Pages/Income/view-income/view-income.component';
import { ViewScaleComponent } from './Pages/Scale/view-scale/view-scale.component';
import { ViewScoreComponent } from './Pages/Score/view-score/view-score.component';
import { ViewScgComponent } from './Pages/SCG/view-scg/view-scg.component';
import { LoginComponent } from './Pages/login/login.component';



const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'dash',component: DashboardComponent},
  { path : 'header', component: HeaderComponent},
  { path : 'home', component: DashboardComponent},
  { path : 'view-Activity111', component: ViewActivity111Component},
  { path : 'view-Activity112', component: ViewActivity112Component},
  { path : 'view-Activity121', component: ViewActivity121Component},
  { path : 'view-Activity122', component: ViewActivity122Component},
  { path : 'view-Activity123', component: ViewActivity123Component},
  { path : 'view-Activity124', component: ViewActivity124Component},
  { path : 'view-Activity125', component: ViewActivity125Component},
  { path : 'view-Activity126', component: ViewActivity126Component},


  { path : 'view-Activity131', component: ViewActivity131Component},
  { path : 'view-Activity132', component: ViewActivity132Component},
  { path : 'view-Activity133', component: ViewActivity133Component},
  { path : 'view-Activity134', component: ViewActivity134Component},
  { path : 'view-Activity135', component: ViewActivity135Component},
  { path : 'view-Activity138', component: ViewActivity138Component},
  { path : 'view-Activity139', component: ViewActivity139Component},

  { path : 'view-Activity211', component: ViewActivity211Component},
  { path : 'view-Activity212', component: ViewActivity212Component},
  { path : 'view-Activity213', component: ViewActivity213Component},
  { path : 'view-Activity222', component: ViewActivity222Component},
  { path : 'view-Activity223', component: ViewActivity223Component},
  { path : 'view-Activity225', component: ViewActivity225Component},

  { path : 'view-Activity311', component: ViewActivity311Component},
  { path : 'view-activity3131', component: ViewActivity3131Component},
  { path : 'view-Activity323', component: ViewActivity323Component},
  { path : 'view-Activity324', component: ViewActivity324Component},


  { path : 'view-Kpl', component: ViewKplComponent},
  { path : 'view-Poverty', component: ViewPovertyComponent},
  { path : 'view-Income', component: ViewIncomeComponent},
  { path : 'view-Scale', component: ViewScaleComponent},
  { path : 'view-Score', component: ViewScoreComponent},
  { path : 'view-Scg', component: ViewScgComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
