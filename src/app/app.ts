import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  title="Angular nkknJs";

  getName (){
    return "Vikram Swe"
  };

  ImageURl="https://picsum.photos/200/300";
  Imagealt="Okk";

  User:any=null;

  ngOnInit (){
    this.User={
      age :39
    }
  }

  countNumber =0;

  CLickMe(){
    this.countNumber++;
  }

}
