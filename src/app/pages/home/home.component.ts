import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ClientDetails} from '../../models/client-details.model';
import {ClientCard} from '../../components/client-card/client-card';
import {BASE_IMAGE_REF, BASE_LOGO_REF} from '../../shared/constants';

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
    clients: ClientDetails[] = [
      {
        name: 'Aarunya Nature Resort - Sri Lanka',
        route: '/aarunya',
        logo: BASE_LOGO_REF + 'aarunya.svg',
        sampleImage: BASE_IMAGE_REF + 'sample_arunya.webp'
      },
      {
        name: 'Nham Village Resort - Vietnam',
        route: '/nham-village',
        logo: BASE_LOGO_REF + 'nham.png',
        sampleImage:  BASE_IMAGE_REF + 'sample.jpg'
      },
      {
        name: 'Tam Toc Garden Resort - Vietnam',
        route: '/tam-toc',
        logo: BASE_LOGO_REF + 'tam-coc-garden.svg',
        sampleImage: BASE_IMAGE_REF + 'sample.jpg'
      },
      {
        name: 'Topas Ecolodge',
        route: '/topas-ecolodge',
        logo: BASE_LOGO_REF + 'topas-ecolodge.svg',
        sampleImage: BASE_IMAGE_REF + 'sample.jpg'
      },
      {
        name: 'Westin',
        route: '/westin',
        logo: BASE_LOGO_REF + 'westin.svg',
        sampleImage: BASE_IMAGE_REF + 'sample.jpg'
      },
      {
        name: 'Movenpick',
        route: '/movenpick',
        logo: BASE_LOGO_REF + 'movenpick.png',
        sampleImage: BASE_IMAGE_REF + 'sample.jpg'
      }
    ];

  constructor(private router: Router) {}

  navigateToClientPage(client: ClientDetails){
    this.router.navigate([client.route])
  }
}
