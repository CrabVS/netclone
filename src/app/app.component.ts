import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureService } from './feature.service';
import { Feature } from './feature';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BannerComponent, FeatureComponent, QuestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Netclone';
  featureData: Feature[] = [];

  constructor(private featureService: FeatureService) {
    this.featureData = this.featureService.getData();
  }
}
