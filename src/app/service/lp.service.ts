import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Activity111, Activity112, Activity121, Activity122, Activity123, Activity124, Activity125, Activity126, Activity131, Activity132, Activity133, Activity134, Activity135, Activity138, Activity139, Activity211, Activity212, Activity213, Activity222, Activity223, Activity225, Activity311, Activity3131, Activity323, Activity324, Income, Kpl, Poverty, Scale, Scg, Score} from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class LpService {
  userlogin(email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  // baseUrl ="https://kaverikalamanram.org/";
  baseUrl ="http://localhost/kkm-back/";
  redirectUrl: any;
  
  constructor(private http: HttpClient) { }

  // getActivity111(){
  //   return this.http.get<Activity111[]>(this.baseUrl+ 'activity111_view.php');
  // }
  getActivity111(){
    return this.http.get<Activity111[]>(this.baseUrl + 'activity111_view.php');
  }
  getActivity112(){
    return this.http.get<Activity112[]>(this.baseUrl + 'activity112_view.php');
  }
  getActivity121(){
    return this.http.get<Activity121[]>(this.baseUrl + 'activity121_view.php');
  }
  getActivity122(){
    return this.http.get<Activity122[]>(this.baseUrl + 'activity122_view.php');
  }
  getActivity123(){
    return this.http.get<Activity123[]>(this.baseUrl + 'activity123_view.php');
  }
  getActivity124(){
    return this.http.get<Activity124[]>(this.baseUrl + 'activity124_view.php');
  }
  getActivity125(){
    return this.http.get<Activity125[]>(this.baseUrl + 'activity125_view.php');
  }

  getActivity126(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity126_view.php');
  }

  getActivity131(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity131_view.php');
  }
  getActivity132(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity132_view.php');
  }
  getActivity133(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity133_view.php');
  }
  getActivity134(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity134_view.php');
  }
  getActivity135(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity135_view.php');
  }
  getActivity138(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity138_view.php');
  }
  getActivity139(){
    return this.http.get<Activity126[]>(this.baseUrl + 'activity139_view.php');
  }
  getdash1(){
    return this.http.get<Activity126[]>(this.baseUrl + 'dashboard.php');
  }
  getIncomedash(){
    return this.http.get<Activity126[]>(this.baseUrl + 'incomedashboard.php');
  }
  getScoredash(){
    return this.http.get<Activity126[]>(this.baseUrl + 'scoredashboard.php');
  }
  getScaledash(){
    return this.http.get<Activity126[]>(this.baseUrl + 'scaledashboard.php');
  }
  

  // getActivity122(){
  //   return this.http.get<Activity122[]>(this.baseUrl + 'activity122_view.php');
  // }

  getActivity211(){
    return this.http.get<Activity211[]>(this.baseUrl + 'activity211_view.php');
  }
 
  getActivity212(){
    return this.http.get<Activity212[]>(this.baseUrl + 'activity212_view.php');
  }
  getActivity213(){
    return this.http.get<Activity213[]>(this.baseUrl + 'activity213_view.php');
  }
  getActivity222(){
    return this.http.get<Activity222[]>(this.baseUrl + 'activity222_view.php');
  }
  getActivity223(){
    return this.http.get<Activity223[]>(this.baseUrl + 'activity223_view.php');
  }
  getActivity225(){
    return this.http.get<Activity225[]>(this.baseUrl + 'activity225_view.php');
  }
  getActivity3131(){
    return this.http.get<Activity3131[]>(this.baseUrl + 'activity3131_view.php');
  }
  getActivity311(){
    return this.http.get<Activity311[]>(this.baseUrl + 'activity311_view.php');
  }
  getActivity323(){
    return this.http.get<Activity323[]>(this.baseUrl + 'activity323_view.php');
  }
  getActivity324(){
    return this.http.get<Activity324[]>(this.baseUrl + 'activity324_view.php');
  }
  addActivity111(activity111: Activity111){
    return this.http.post( this.baseUrl + 'activity111_insert.php',activity111);
  }
  
  addActivity211(activity211: Activity211){
    return this.http.post( this.baseUrl + 'activity211_insert.php',activity211);
  }
  addActivity132(activity132: Activity132){
    return this.http.post( this.baseUrl + 'activity132_insert.php',activity132);
  }
  addActivity112(activity112: Activity112){
    return this.http.post( this.baseUrl + 'activity112_insert.php',activity112);
  }
  addActivity139(activity139: Activity139){
    return this.http.post( this.baseUrl + 'activity139_insert.php',activity139);
  }
  addActivity121(activity121: Activity121){
    return this.http.post( this.baseUrl + 'activity121_insert.php',activity121);
  }
  addActivity122(activity122: Activity122){
    return this.http.post( this.baseUrl + 'activity122_insert.php',activity122);
  }
  addActivity123(activity123: Activity123){
    return this.http.post( this.baseUrl + 'activity123_insert.php',activity123);
  }
  addActivity124(activity124: Activity124){
    return this.http.post( this.baseUrl + 'activity124_insert.php',activity124);
  }
  addActivity125(activity125: Activity125){
    return this.http.post( this.baseUrl + 'activity125_insert.php',activity125);
  }
  addActivity126(activity126: Activity126){
    return this.http.post( this.baseUrl + 'activity126_insert.php',activity126);
  }
  addActivity131(activity131: Activity131){
    return this.http.post( this.baseUrl + 'activity131_insert.php',activity131);
  }
  addActivity133(activity133: Activity133){
    return this.http.post( this.baseUrl + 'activity133_insert.php',activity133);
  }
  addActivity134(activity134: Activity134){
    return this.http.post( this.baseUrl + 'activity134_insert.php',activity134);
  }
  addActivity135(activity135: Activity135){
    return this.http.post( this.baseUrl + 'activity135_insert.php',activity135);
  }
  addActivity138(activity138: Activity138){
    return this.http.post( this.baseUrl + 'activity138_insert.php',activity138);
  }
  addActivity212(activity212: Activity212){
    return this.http.post( this.baseUrl + 'activity212_insert.php',activity212);
  }
  addActivity213(activity213: Activity213){
    return this.http.post( this.baseUrl + 'activity213_insert.php',activity213);
  }
  addActivity222(activity222: Activity222){
    return this.http.post( this.baseUrl + 'activity222_insert.php',activity222);
  }
  addActivity223(activity223: Activity223){
    return this.http.post( this.baseUrl + 'activity223_insert.php',activity223);
  }
  addActivity225(activity225: Activity225){
    return this.http.post( this.baseUrl + 'activity225_insert.php',activity225);
  }
  getKpl(){
    return this.http.get<Kpl[]>(this.baseUrl + 'kpl_view.php');
  }
  addKpl(kpl: Kpl){
    return this.http.post( this.baseUrl + 'kpl_insert.php',kpl);
  }
  getPoverty(){
    return this.http.get<Kpl[]>(this.baseUrl + 'poverty_view.php');
  }
  addPoverty(poverty: Poverty){
    return this.http.post( this.baseUrl + 'poverty_insert.php',poverty);
  }
  getIncome(){
    return this.http.get<Kpl[]>(this.baseUrl + 'income_view.php');
  }
  addIncome(income: Income){
    return this.http.post( this.baseUrl + 'income_insert.php',income);
  }
  getScale(){
    return this.http.get<Kpl[]>(this.baseUrl + 'scale_view.php');
  }
  getScore(){
    return this.http.get<Kpl[]>(this.baseUrl + 'score_view.php');
  }
  getScg(){
    return this.http.get<Kpl[]>(this.baseUrl + 'scg_view.php');
  }

  addScale(scale: Scale){
    return this.http.post( this.baseUrl + 'scale_insert.php',scale);
  }
  addScore(score: Score){
    return this.http.post( this.baseUrl + 'score_insert.php',score);
  }
  addScg(scg: Scg){
    return this.http.post( this.baseUrl + 'scg_insert.php',scg);
  }
 login(loginData) {
  return this.http.post(this.baseUrl + 'login.php', loginData);
}
}
