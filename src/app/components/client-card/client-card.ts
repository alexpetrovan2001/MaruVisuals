import {AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, Input, NgZone, OnDestroy, Output} from '@angular/core';
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
  @Input() isFirst = false;
  @Output() viewMore = new EventEmitter<void>();

  isActive = false;
  private observer?: IntersectionObserver;
  mobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  @HostBinding('style.scroll-snap-align')
  get snapAlign(): string {
    return this.isFirst ? 'none' : '';
  }

  constructor(private route: Router, private el: ElementRef, private zone: NgZone) {
  }

  ngAfterViewInit() {
    this.mobile = window.innerWidth <= 768; // only on phone screens

    if (!this.mobile) return;

    // First card starts active immediately on mobile
    if (this.isFirst) {
      this.isActive = true;
    }

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
          // First card: only clip from bottom so it's active at the top of the page
          // Other cards: clip from both sides so they activate when centred
          rootMargin: this.isFirst ? '0px 0px -50% 0px' : '-30% 0px -30% 0px'
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
