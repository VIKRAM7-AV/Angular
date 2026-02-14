import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
countNumber=0;

Add(){
 this.countNumber++;
}

Minus(){
  if(this.countNumber > 0){
    this.countNumber--;
  }
}
}
