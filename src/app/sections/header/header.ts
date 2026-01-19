import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isMenuOpen = false;
  headerBackground = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Change header background after hero section
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.headerBackground = scrollPosition > 250;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent scrolling when menu is open on mobile
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
    // Close menu when clicking outside on mobile
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const isClickInsideMenu = target.closest('.nav-list');
      const isClickOnHamburger = target.closest('.hamburger');

      if (!isClickInsideMenu && !isClickOnHamburger && this.isMenuOpen) {
        this.closeMenu();
      }
    });

    // Close menu when resizing to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1200 && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }
}
