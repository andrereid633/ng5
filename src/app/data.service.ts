import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['This is the inital goal', 'Just another silly life goal!']);

  goal = this.goals.asObservable();

  changeGoal(goal) {
    this.goals.next(goal);
  }
  

  constructor() { }
}
