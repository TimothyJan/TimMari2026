import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro implements OnInit, AfterViewInit {
  countries: string[] = ["Japan", "Taiwan", "United States"];
  hikeCount: number = 10;
  restaurantCount: number = 1000;

  daysSince: number = 0;
  animatedDaysSince: number = 0;
  animatedRestaurantCount: number = 0;
  animatedHikeCount: number = 0;

  currentDateTime: string = '';
  lastUpdated: string = '';
  private timer: any;
  // 1st day meeting Mari
  // private readonly TARGET_DATE: Date = new Date('2023-05-06T00:00:00-08:00');
  // Days marrid
  private readonly TARGET_DATE: Date = new Date('2024-08-10T00:00:00-08:00');

  ngOnInit() {
    this.updateDaysSince();
    // Update every minute
    this.timer = setInterval(() => {
      this.updateDaysSince();
    }, 60000);
  }

  ngAfterViewInit() {
    // Start animations after view is initialized
    setTimeout(() => {
      this.startCountAnimations();
    }, 1000); // Delay to ensure everything is loaded
  }

  private updateDaysSince(): void {
    const nowPST = this.getCurrentPSTDateTime();
    const targetDate = new Date(this.TARGET_DATE);

    // Calculate difference in days
    const timeDiff = nowPST.getTime() - targetDate.getTime();
    this.daysSince = Math.floor(timeDiff / (1000 * 3600 * 24));

    // Format current date/time in PST
    this.currentDateTime = this.formatDateTime(nowPST);
    this.lastUpdated = this.formatDateTime(new Date());

    // Update animated values if they haven't been animated yet
    if (this.animatedDaysSince === 0) {
      this.animatedDaysSince = this.daysSince;
    }
  }

  private startCountAnimations() {
    // Animate days since counter
    this.animateValue(0, this.daysSince, 2000, (value) => {
      this.animatedDaysSince = value;
    });

    // Animate restaurant counter
    this.animateValue(0, this.restaurantCount, 2000, (value) => {
      this.animatedRestaurantCount = value;
    });

    // Animate hike counter
    this.animateValue(0, this.hikeCount, 2000, (value) => {
      this.animatedHikeCount = value;
    });
  }

  private animateValue(start: number, end: number, duration: number, callback: (value: number) => void) {
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);

      callback(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private getCurrentPSTDateTime(): Date {
    const now = new Date();
    // Convert to PST (UTC-8)
    const pstOffset = -8 * 60; // PST is UTC-8
    const localOffset = now.getTimezoneOffset();
    const pstTime = new Date(now.getTime() + (localOffset - pstOffset) * 60000);
    return pstTime;
  }

  private formatDateTime(date: Date): string {
    return date.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  }

  // Smooth scroll to sections
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
