import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ClientDetails} from '../../models/client-details.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.html',
  standalone: true
})
export class ClientCard {
  @Input() client!: ClientDetails;
  @Output() viewMore = new EventEmitter<void>();

  constructor(private route: Router) {
  }

  onViewMore(){
    this.route.navigate([this.client.route]);
  }
}
