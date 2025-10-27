import { Component, OnInit } from '@angular/core';
import {ClientDetails, CLIENTS} from '../../models/client-details.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client-portofolio',
  templateUrl: './client-portofolio.html',
  styleUrl: './client-portofolio.scss',
  standalone: true
})
export class ClientPortofolioComponent implements OnInit {
  client!: ClientDetails | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    const activeClient = this.route.snapshot.paramMap.get('client');
    console.log('Route param -> ', activeClient)
    this.client = CLIENTS.find(c => c.route === activeClient)
    console.log('Client found - ', JSON.stringify(this.client))
  }
}
