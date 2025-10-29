import {BASE_CLIENT_IMAGE_REF, BASE_LOGO_REF} from '../shared/constants';

export interface ClientDetails {
  name: string;
  logo: string;
  route: string;
  sampleImage?: string;
  landscapeImage?: string;
  landscapeImage2?: string;
  portraitImage?: string;
  portraitImage2?: string;
}

export const CLIENTS: ClientDetails[] = [
  {
    name: 'Aarunya Nature Resort - Sri Lanka',
    route: 'aarunya',
    logo: BASE_LOGO_REF + 'aarunya.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'aarunya/sample.webp',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'aarunya/landscape.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'aarunya/portrait.png'
  },
  {
    name: 'Nham Village Resort - Vietnam',
    route: 'nham-village',
    logo: BASE_LOGO_REF + 'nham.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'nham-village/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'nham-village/landscape.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'nham-village/portrait.png',
    landscapeImage2: BASE_CLIENT_IMAGE_REF + 'nham-village/landscape_2.png',
    portraitImage2: BASE_CLIENT_IMAGE_REF + 'nham-village/portrait_2.png'
  },
  {
    name: 'Tam Coc Garden Resort - Vietnam',
    route: 'tam-coc-garden',
    logo: BASE_LOGO_REF + 'tam-coc.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'tam-coc-garden/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'tam-coc-garden/landscape.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'tam-coc-garden/portrait.png'
  },
  {
    name: 'Topas Ecolodge',
    route: 'topas-ecolodge',
    logo: BASE_LOGO_REF + 'topas.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'topas-ecolodge/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'topas-ecolodge/landscape.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'topas-ecolodge/portrait.png'
  },
  {
    name: 'Westin',
    route: 'westin',
    logo: BASE_LOGO_REF + 'westin.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'westin/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'westin/landscape.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'westin/portrait.png'
  },
  {
    name: 'Movenpick',
    route: 'movenpick',
    logo: BASE_LOGO_REF + 'movenpick.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'movenpick/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'movenpick/landscape.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'movenpick/portrait.png'
  }
];

