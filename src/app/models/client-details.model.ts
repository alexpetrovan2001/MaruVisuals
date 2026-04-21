import {BASE_CLIENT_IMAGE_REF, BASE_LOGO_REF} from '../shared/constants';

export interface ClientDetails {
  name: string;
  logo?: string;
  route: string;
  sampleImage?: string;
  landscapeImage?: string;
  landscapeImage2?: string;
  landscapeImage3?: string;
  landscapeImage4?: string;
  portraitImage?: string;
  portraitImage2?: string;
  portraitImage3?: string;
  portraitImage4?: string;
}

export const CLIENTS: ClientDetails[] = [
  {
    name: 'Four Seasons',
    route: 'four-seasons',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'four_seasons/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'four_seasons/client_1.png',
    landscapeImage2: BASE_CLIENT_IMAGE_REF + 'four_seasons/client_2.png',
    landscapeImage3: BASE_CLIENT_IMAGE_REF + 'four_seasons/client_3.png',
    landscapeImage4: BASE_CLIENT_IMAGE_REF + 'four_seasons/client_4.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'four_seasons/client_mobile_1.png',
    portraitImage2: BASE_CLIENT_IMAGE_REF + 'four_seasons/client_mobile_2.png',
    portraitImage3: BASE_CLIENT_IMAGE_REF + 'four_seasons/client_mobile_3.png',
  },
  {
    name: 'Rosewood',
    route: 'rosewood',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'rosewood/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'rosewood/client_1.png',
    landscapeImage2: BASE_CLIENT_IMAGE_REF + 'rosewood/client_2.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'rosewood/client_mobile_1.png',
    portraitImage2: BASE_CLIENT_IMAGE_REF + 'rosewood/client_mobile_2.png',
  },
  {
    name: 'Aarunya Nature Resort - Sri Lanka',
    route: 'aarunya',
    logo: BASE_LOGO_REF + 'aarunya.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'aarunya/sample.webp',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'aarunya/client_1.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'aarunya/client_mobile_1.png'
  },
  {
    name: 'Nham Village Resort - Vietnam',
    route: 'nham-village',
    logo: BASE_LOGO_REF + 'nham.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'nham-village/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'nham-village/client_1.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'nham-village/client_mobile_1.png',
    landscapeImage2: BASE_CLIENT_IMAGE_REF + 'nham-village/client_2.png',
    portraitImage2: BASE_CLIENT_IMAGE_REF + 'nham-village/client_mobile_2.png'
  },
  {
    name: 'Tam Coc Garden Resort - Vietnam',
    route: 'tam-coc-garden',
    logo: BASE_LOGO_REF + 'tam-coc.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'tam-coc-garden/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'tam-coc-garden/client_1.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'tam-coc-garden/client_mobile_1.png'
  },
  {
    name: 'Topas Ecolodge',
    route: 'topas-ecolodge',
    logo: BASE_LOGO_REF + 'topas.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'topas-ecolodge/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'topas-ecolodge/client_1.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'topas-ecolodge/client_mobile_1.png'
  },
  {
    name: 'Westin',
    route: 'westin',
    logo: BASE_LOGO_REF + 'westin.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'westin/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'westin/client_1.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'westin/client_mobile_1.png'
  },
  {
    name: 'Movenpick',
    route: 'movenpick',
    logo: BASE_LOGO_REF + 'movenpick.png',
    sampleImage: BASE_CLIENT_IMAGE_REF + 'movenpick/sample.png',
    landscapeImage: BASE_CLIENT_IMAGE_REF + 'movenpick/client_1.png',
    portraitImage: BASE_CLIENT_IMAGE_REF + 'movenpick/client_mobile_1.png'
  }
];

