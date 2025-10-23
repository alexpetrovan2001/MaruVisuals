import {Component, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {of} from 'rxjs';
import {Router, RouterLink} from '@angular/router';
import {ClientDetails} from '../../models/client-details.model';
import {ClientCard} from '../../components/client-card/client-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    ClientCard
  ],
  standalone: true
})
export class HomeComponent {
    baseLogoRef = "assets/logo/"
    baseImageRef = "assets/images/"

    clients: ClientDetails[] = [
      {
        name: 'Aarunya',
        route: '/aarunya',
        logo: this.baseLogoRef + 'aarunya.svg',
        sampleImage: this.baseImageRef + 'sample.jpg'
      },
      {
        name: 'Nham Village',
        route: '/nham-village',
        logo: this.baseLogoRef + 'nham-village.svg',
        sampleImage: this.baseImageRef + 'sample.jpg'
      },
      {
        name: 'Tam Toc',
        route: '/tam-toc',
        logo: this.baseLogoRef + 'tam-toc.webp',
        sampleImage: this.baseImageRef + 'sample.jpg'
      },
      {
        name: 'Topas Ecolodge',
        route: '/topas-ecolodge',
        logo: this.baseLogoRef + 'topas-ecolodge.svg',
        sampleImage: this.baseImageRef + 'sample.jpg'
      },
      {
        name: 'Westin',
        route: '/westin',
        logo: this.baseLogoRef + 'westin.svg',
        sampleImage: this.baseImageRef + 'sample.jpg'
      },
    ];

  constructor(private router: Router) {}

  navigateToClientPage(client: ClientDetails){
    this.router.navigate([client.route])
  }
}
