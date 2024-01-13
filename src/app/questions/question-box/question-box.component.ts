import { Component, Input } from '@angular/core';
import { Question } from '../../question';

@Component({
  selector: 'app-question-box',
  standalone: true,
  imports: [],
  templateUrl: './question-box.component.html',
  styleUrl: './question-box.component.css'
})
export class QuestionBoxComponent {
  @Input() questionData?: Question;
  isClosed: boolean = true;

  toggleBox() {
    this.isClosed = !this.isClosed;
  }
  
  constructor() {}
}
