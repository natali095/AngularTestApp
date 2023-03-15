import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  @ViewChild('name') nameKey!: ElementRef;
  @ViewChild('surename') surenameKey!: ElementRef;

  startTest(){
    
localStorage.setItem("name", this.nameKey.nativeElement.value);
  
localStorage.setItem("surename", this.surenameKey.nativeElement.value);
  
 

}
  
    
  }


