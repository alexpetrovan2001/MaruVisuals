import { Component } from '@angular/core';
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
export class WorkComponent {
  clients = CLIENTS;

  constructor(private router: Router) {}

  navigateToClientPage(client: ClientDetails){
    this.router.navigate(['/', client.route])
  }
}
