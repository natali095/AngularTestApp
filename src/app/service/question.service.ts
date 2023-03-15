import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class QuestionService {
 private points: number = 0;


  constructor(private http: HttpClient) { }

  getQuestionJson() {
    return this.http.get<any>("assets/questions.json");

  }

  setPoints(points: number) {
    this.points = points;
  }
  
  getPoints() {
    console.log(`Current value of this.points: ${this.points}`);
    return this.points;

  }
  

  getUserName(): string {
    const name = localStorage.getItem('name');
    const surename = localStorage.getItem('surename');
    return `${name} ${surename}`;
}

  
}







