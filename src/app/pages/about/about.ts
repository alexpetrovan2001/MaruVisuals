import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ngAfterViewInit() {
    const container = this.carousel.nativeElement as HTMLElement;
    container.addEventListener('scroll', this.onScroll.bind(this));

    requestAnimationFrame(() => {
      this.centerInitialCard();
      this.onScroll();
    });

    window.addEventListener('resize', () => {
      this.centerInitialCard();
      this.onScroll();
    });
  }

  private centerInitialCard() {
    const container = this.carousel.nativeElement as HTMLElement;
    const cards = container.querySelectorAll<HTMLElement>('.about-reel-card');
    if (!cards.length) {
      return;
    }

    container.scrollLeft = 0;
  }

  private onScroll() {
  }
}
