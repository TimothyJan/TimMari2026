import { Component } from '@angular/core';
import { RandomGenerator } from "../../components/random-generator/random-generator";

@Component({
  selector: 'app-questions',
  imports: [RandomGenerator],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {

}
