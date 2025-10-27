import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  standalone: true
})
export class LandingComponent {
  constructor(private router: Router) {}

  enterSite() {
    this.router.navigate(['/work']); // Navigate to the main site
  }
}
