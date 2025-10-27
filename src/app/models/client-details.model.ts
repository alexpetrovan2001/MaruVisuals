import {BASE_IMAGE_REF, BASE_LOGO_REF} from '../shared/constants';

export interface ClientDetails {
  name: string;
  logo: string;
  route: string;
  sampleImage: string;
  landscapeImage?: string;
  portraitImage?: string;
}

export const CLIENTS: ClientDetails[] = [
  {
    name: 'Aarunya Nature Resort - Sri Lanka',
    route: 'aarunya',
    logo: BASE_LOGO_REF + 'aarunya.svg',
    sampleImage: BASE_IMAGE_REF + 'sample_arunya.webp',
    landscapeImage: BASE_IMAGE_REF + 'client/arunya/landscape.png',
    portraitImage: BASE_IMAGE_REF + 'client/arunya/portrait.png'
  },
  {
    name: 'Nham Village Resort - Vietnam',
    route: 'nham-village',
    logo: BASE_LOGO_REF + 'nham.png',
    sampleImage:  BASE_IMAGE_REF + 'sample.jpg'
  },
  {
    name: 'Tam Toc Garden Resort - Vietnam',
    route: 'tam-toc',
    logo: BASE_LOGO_REF + 'tam-coc-garden.svg',
    sampleImage: BASE_IMAGE_REF + 'sample.jpg'
  },
  {
    name: 'Topas Ecolodge',
    route: 'topas-ecolodge',
    logo: BASE_LOGO_REF + 'topas-ecolodge.svg',
    sampleImage: BASE_IMAGE_REF + 'sample.jpg'
  },
  {
    name: 'Westin',
    route: 'westin',
    logo: BASE_LOGO_REF + 'westin.svg',
    sampleImage: BASE_IMAGE_REF + 'sample.jpg'
  },
  {
    name: 'Movenpick',
    route: 'movenpick',
    logo: BASE_LOGO_REF + 'movenpick_2.png',
    sampleImage: BASE_IMAGE_REF + 'sample.jpg'
  }
];

