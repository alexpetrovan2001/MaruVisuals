import { Component } from '@angular/core';
// import {ContactDetails} from '../../models/contact-details.model';
// import {
//   BASE_IMAGE_REF,
//   BASE_LOGO_REF,
//   FACEBOOK_ICON,
//   GMAIL_ICON,
//   INSTAGRAM_ICON,
//   LINKEDIN_ICON
// } from '../../shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true
})
export class ContactComponent {
  //   contacts: ContactDetails[] = [
  //     {
  //       logo: INSTAGRAM_ICON,
  //       image: 'contact_1.webp',
  //       url: '',
  //     },
  //     {
  //       logo: FACEBOOK_ICON,
  //       image: 'contact_2.webp',
  //       url: ''
  //     },
  //     {
  //       logo: GMAIL_ICON,
  //       image: 'contact_3.webp',
  //       url: ''
  //     },
  //     {
  //       logo: LINKEDIN_ICON,
  //       image: 'contact_4.webp',
  //       url: ''
  //     }
  // ]
  // protected readonly BASE_IMAGE_REF = BASE_IMAGE_REF;
  // protected readonly BASE_LOGO_REF = BASE_LOGO_REF;
  formData = { name: '', email: '', message: '' };

  constructor(private router: Router) {}

  onSubmit() {
    const body = new URLSearchParams({
      'form-name': 'contact',
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then(() => this.router.navigate(['/success']))
      .catch((err) => console.error(err));
  }
}
