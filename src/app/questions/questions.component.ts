import { Component } from '@angular/core';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { QuestionService } from './question.service';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [QuestionBoxComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {

  questionsData: Question[] = [];

  constructor(private questionService: QuestionService) {
    this.questionsData = this.questionService.getQuestions();
  }

  closeBoxes() {
    
  }
}
