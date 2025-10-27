import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
  imports: [
    NgClass
  ],
  standalone: true
})
export class ThemeToggle implements OnInit {
  isDark = false;

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark'){
      this.isDark = true
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }
}
