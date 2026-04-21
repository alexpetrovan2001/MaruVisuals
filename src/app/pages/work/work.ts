import { Component, OnInit } from '@angular/core';
import {ClientDetails, CLIENTS} from '../../models/client-details.model';
import {Router} from '@angular/router';
import {ClientCard} from '../../components/client-card/client-card';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  styleUrl: './work.scss',
  imports: [
    ClientCard
  ],
  standalone: true
})
export class WorkComponent implements OnInit {
  clients = CLIENTS;

  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to top before snap engine can fire
    window.scrollTo(0, 0);
    const html = document.documentElement;
    html.style.scrollSnapType = 'none';
    setTimeout(() => {
      html.style.scrollSnapType = '';
    }, 200);
  }

  navigateToClientPage(client: ClientDetails){
    this.router.navigate(['/', client.route])
  }
}
