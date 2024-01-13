import { Component, HostListener, Input } from '@angular/core';
import { Feature } from '../feature';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
  @Input() featureData?: Feature;

  windowSize = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowSize = (event.target as Window).innerWidth;
  }
}
