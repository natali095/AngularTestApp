import { Component } from '@angular/core';
import { Router } from '@angular/router';



export interface TableEmployee {
  name: string;
  position: number;
  score: number;
  rating: number;
}

const EMPLOYEE_DATA: TableEmployee[] = [
  {position: 1, name: 'Hydrogen', score: 10, rating: 1},
  {position: 2, name: 'Helium', score: 20, rating: 2},
  {position: 3, name: 'Lithium', score: 30, rating: 3},
  {position: 4, name: 'Beryllium', score: 40, rating: 4},
  {position: 5, name: 'Boron', score: 20, rating: 5},
  {position: 6, name: 'Carbon', score: 60, rating: 6},
  {position: 7, name: 'Nitrogen', score: 80, rating: 7},
  {position: 8, name: 'Oxygen', score: 90, rating: 8},
  {position: 9, name: 'Fluorine', score: 60, rating: 9},
  {position: 10, name: 'Neon', score: 20, rating: 10},
];

/**
 * @title Styling columns using their auto-generated column names
 */

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-score', 'demo-rating'];
  dataSource = EMPLOYEE_DATA;





}


