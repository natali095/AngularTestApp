import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../service/question.service';



export interface TableEmployee {
  name: string;
  position: number;
  points: number;
  rating: number;
}


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
 
  // Component configuration here
  })
export class ResultComponent implements OnInit {
  userName: string = " ";
  points: number = 0;
  dataSource: TableEmployee[] = [];

  
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.userName = this.questionService.getUserName();
    this.points = this.questionService.getPoints();
    console.log("Points:", this.points);
  
    let tempArray: TableEmployee[] = [
      {position: 1, name: this.userName, points: this.points, rating: 1},
      {position: 2, name: 'John Dow', points: 50, rating: 3},
      {position: 3, name: 'Olga Shtern', points: 30, rating: 4},
      {position: 4, name: 'John Smit', points: 20, rating: 1},
      {position: 5, name: 'Ivan McGregor', points: 70, rating: 2}
    ];
  
    // Update the points for the first user
    tempArray[0].points = this.points;
  
    // Sort the array based on the points in descending order
    tempArray.sort((a, b) => b.points - a.points);
  
    // Update the rating for each user based on their position in the array
    for (let i = 0; i < tempArray.length; i++) {
      tempArray[i].rating = i + 1;
    }
  
    // Update the dataSource array
    this.dataSource = tempArray.concat(this.dataSource.slice(0, 8));
  }
  
  

  displayedColumns: string[] = ['position', 'name', 'points', 'rating'];


}

