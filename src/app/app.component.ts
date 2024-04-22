import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp';
  name: string = "Mean Stack";
  cse = {
    fname: "Durga",
    lname: "Prasad",
  };
  csecolor: string = "red";
  csestyle: object = {
    color: "white",
    background: "red",
    border: '5px solid black',
  };
  rating: number = 5;
  check: boolean = true;
  check1: boolean = false;
  cses: boolean = true;
  cses1: boolean = false;
  c1apply: boolean = true;
  c2apply: boolean = true;
  path: string = "./assets/Screenshot (290).png";
  styles: string = "box";
  names: string = "Durga Prasad";
  rocks() {
    this.names = "MNST Faculty";
  }
  disp() {
    console.log("Clicked ON Button");
  }
}
