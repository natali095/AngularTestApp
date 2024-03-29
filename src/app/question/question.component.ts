import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public surename: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isTestCompleted: boolean = false;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {

    this.name = localStorage.getItem("name")!;
    this.surename = localStorage.getItem("surename")!;
    

    this.getAllQuestions();
    this.startcounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
    } else {
      this.points -= 10;
      this.inCorrectAnswer++;
    }
  
    this.questionService.setPoints(this.points); 
    console.log(`Current value of this.points: ${this.points}`);
  
    if (currentQno === this.questionList.length) {
      this.isTestCompleted = true;
      this.stopCaunter();
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    }
  }
  startcounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000)

  }
  stopCaunter() {
    this.interval$.unsubscribe();
    this.counter = 0;

  }
  resetCounter() {
    this.stopCaunter();
    this.counter = 60;
    this.startcounter();

  }
  resetTest() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";
    
  }
  
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
    
  }


  

}
