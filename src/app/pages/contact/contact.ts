import { Component } from '@angular/core';
import {ContactDetails} from '../../models/contact-details.model';
import {
  BASE_IMAGE_REF,
  BASE_LOGO_REF,
  FACEBOOK_ICON,
  GMAIL_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON
} from '../../shared/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true
})
export class ContactComponent {
    contacts: ContactDetails[] = [
      {
        logo: INSTAGRAM_ICON,
        image: 'contact_1.jpg',
        url: '',
      },
      {
        logo: FACEBOOK_ICON,
        image: 'contact_2.jpg',
        url: ''
      },
      {
        logo: GMAIL_ICON,
        image: 'contact_3.jpg',
        url: ''
      },
      {
        logo: LINKEDIN_ICON,
        image: 'contact_4.jpg',
        url: ''
      }
  ]
  protected readonly BASE_IMAGE_REF = BASE_IMAGE_REF;
  protected readonly BASE_LOGO_REF = BASE_LOGO_REF;
}
