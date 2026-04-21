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
  isDark = true;

  ngOnInit() {
    // Theme toggle is currently disabled; dark mode is always active
    this.isDark = true;
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }
}
