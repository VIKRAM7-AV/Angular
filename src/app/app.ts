import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="Angular nkknJs";

  getName (){
    return "Vikram Swe"
  };

  ImageURl="https://picsum.photos/200/300";
  Imagealt="Okk"

}
