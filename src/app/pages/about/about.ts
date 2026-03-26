import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ngOnInit() {
    const setupInstagram = () => {
      const instgrm = (window as any).instgrm;
      if (instgrm && instgrm.Embeds && typeof instgrm.Embeds.process === 'function') {
        try {
          instgrm.Embeds.process();
        } catch (err) {
          console.warn('Instagram embed process failed', err);
        }
      }
    };

    if ((window as any).instgrm) {
      setupInstagram();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => setupInstagram();
      script.onerror = () => console.warn('Instagram embed script failed to load');
      document.body.appendChild(script);
    }
  }

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

    // Choose middle card as initial focused item; fallback is first card.
    const initialIndex = Math.floor(cards.length / 2);
    const target = cards[initialIndex] || cards[0];

    const targetCenter = target.offsetLeft + target.offsetWidth / 2;
    const containerCenter = container.clientWidth / 2;
    container.scrollLeft = Math.max(0, targetCenter - containerCenter);
  }

  private onScroll() {
    // Blur effect removed
  }
}
