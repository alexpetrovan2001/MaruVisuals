import {AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, OnDestroy, Output} from '@angular/core';
import {ClientDetails} from '../../models/client-details.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-card',
  styleUrl: 'client-card.scss',
  templateUrl: './client-card.html',
  standalone: true
})
export class ClientCard implements AfterViewInit, OnDestroy {
  @Input() client!: ClientDetails;
  @Output() viewMore = new EventEmitter<void>();

  isActive = false;
  private observer?: IntersectionObserver;
  mobile? = false;

  constructor(private route: Router, private el: ElementRef, private zone: NgZone) {
  }

  ngAfterViewInit() {
    this.mobile = window.innerWidth <= 1024; // only on small screens

    if (!this.mobile) return; // skip IntersectionObserver on large screens

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            this.zone.run(() => {
              this.isActive = entry.isIntersecting && entry.intersectionRatio > 0.5;
            });
          });
        },
        {
          root: null,
          threshold: Array.from({length: 11}, (_, i) => i/10),
          rootMargin: '-30% 0px -30% 0px'
        }
      );
      this.observer.observe(this.el.nativeElement);
    })
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  onViewMore(){
    this.route.navigate([this.client.route]);
  }
}
