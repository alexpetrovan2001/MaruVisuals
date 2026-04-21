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

    container.scrollLeft = 0;
  }

  private onScroll() {
  }
}
