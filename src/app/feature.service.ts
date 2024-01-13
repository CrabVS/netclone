import { Injectable } from '@angular/core';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  featureData: Feature[] = [
    {
      id: 0,
      header: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      imgUrl: '/assets/tv.png',
      imgAlt: 'tv image',
      swapPositions: false
    },
    {
      id: 1,
      header: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
      imgUrl: '/assets/mobile-0819.jpg',
      imgAlt: 'mobile movie image',
      swapPositions: true
    },
    {
      id: 2,
      header: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      swapPositions: false
    },
    {
      id: 3,
      header: 'Create profiles for kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
      imgUrl: '/assets/netkids.png',
      imgAlt: 'kids movie image',
      swapPositions: true
    }
  ]

  getData() {
    return this.featureData.slice();
  }
}
