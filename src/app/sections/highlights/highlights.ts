import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-highlights',
  imports: [CommonModule, DatePipe],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css',
})
export class Highlights {
  selectedHighlight: HighlightModel | null = null;
  isModalOpen = false;
  currentImageIndex: number = 0;

  highlightList: HighlightModel[] = [
    {
      id: '2026-05-02_TiffanyMickey',
      title: "Tiffany & Mickey's Wedding",
      location: 'Anaheim, California, US',
      date: new Date(2026, 4, 2),
      description: "With Mari by Tiffany’s side as a bridesmaid and Tim, honored to officiate, we celebrated the beautiful, love-filled union of our sister Tiffany and her husband Mickey.",
      imageUrl: "https://images.unsplash.com/photo-1590705741616-0a7fcc932d1d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2026-05-02_TiffanyMickey/0.jpg',
        'assets/images/2026-05-02_TiffanyMickey/1.jpg',
        'assets/images/2026-05-02_TiffanyMickey/2.jpg',
        'assets/images/2026-05-02_TiffanyMickey/3.jpg',
        'assets/images/2026-05-02_TiffanyMickey/4.jpg',
        'assets/images/2026-05-02_TiffanyMickey/5.jpg',
        'assets/images/2026-05-02_TiffanyMickey/6.jpg',
      ],
      photos: 6767,
      days: '1',
      memories: 'Cherished',
      highlights: [
        "Wedding Ceremony",
        "Bridesmaids getting ready",
        "First Look",
        "Portraits",
        "Ceremony with Timmy as officiant",
        "Cocktail Hour",
        "Reception",
      ]
    },
    {
      id: '2026-01-06_oahu',
      title: 'Back to Paradise',
      location: 'Oahu, Hawaii, US',
      date: new Date(2026, 0, 6),
      description: "Our journey through O'ahu, Hawai'i, was a vibrant adventure, from snorkeling in electric-blue coves and hiking to emerald ridges to eating our way from legendary shrimp trucks to fresh poke on the sand.",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/04/84/88/20/1000_F_484882005_H4dEJ1eHEh6tEvgituX3tnErK4zNo5qI.jpg",
      images: [
        'assets/images/2026-01-06_oahu/0.jpg',
        'assets/images/2026-01-06_oahu/1.JPG',
        'assets/images/2026-01-06_oahu/2.JPG',
        'assets/images/2026-01-06_oahu/3.JPG',
        'assets/images/2026-01-06_oahu/4.JPG',
        'assets/images/2026-01-06_oahu/5.JPG',
        'assets/images/2026-01-06_oahu/6.JPG',
        'assets/images/2026-01-06_oahu/7.JPG',
      ],
      photos: 1127,
      days: '5',
      memories: 'Vibrant',
      highlights: [
        "Snorkeling at Lanikai Beach",
        "Basalt's Ribeye and Prime Rib",
        "Penny's Waikiki Malasadas",
        "Leonard's Bakery",
        "Makapu'u Point Lighthouse trail",
        "Koko Crater Tramway to Kokohead Lookout",
        "Lanikai Pillboxes via Ka'iwa Ridge Trail",
        "Snorkeling at Lanikai Beach",
        "Kualua Ranch Movie Sites & Ranch Tour",
        "Adela's Country Eatery",
        "YogurStory",
        "Aloha Stadium Swap Meet",
        "Pu'u O Hulu Trail (Pink Pillbox)",
        "Mermaids Cave"
      ]
    },
    {
      id: '2026-01-01_theBigIsland',
      title: "Squad 30's trip",
      location: 'The Big Island, Hawaii, US',
      date: new Date(2026, 0, 1),
      description: "To celebrate Tim's squad turning 30, our squad lived our values of adventure and connection on the Big Island, snorkeling with manta rays, hiking volcanic jungle trails, and witnessing the Hawai'i Volcanoes National Park.",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/04/39/77/12/1000_F_439771243_0C9eLmcmQG1OyuE4BLA7kV6KETfhCyJ3.jpg",
      images: [
        'assets/images/2026-01-01_theBigIsland/0.jpg',
        'assets/images/2026-01-01_theBigIsland/1.JPG',
        'assets/images/2026-01-01_theBigIsland/2.JPG',
        'assets/images/2026-01-01_theBigIsland/3.JPG',
        'assets/images/2026-01-01_theBigIsland/4.JPG',
        'assets/images/2026-01-01_theBigIsland/5.JPG',
        'assets/images/2026-01-01_theBigIsland/6.JPG',
        'assets/images/2026-01-01_theBigIsland/7.jpg',
      ],
      photos: 298,
      days: '6',
      memories: 'Transformative',
      highlights: [
        "Sunset Manta Ray Snorkel",
        "Manini'owali Beach",
        "Greenwell Farm free coffee tour",
        "La'aloa Beach Park (aka Magic Sands)",
        "Sunset Manta Ray Snorkel",
        "Broke da mouth",
        "Pu'uhonua O Honaunau National Historical Park",
        "Live Your Values",
        "Pololu Trail",
        "Pineapples Island Fresh Cuisine",
        "Hawai'i Volcanoes National Park.",
        "Kīlauea Iki & Crater Rim Trail",
        "Pacific Rim"
      ]
    }
  ];

  openHighlight(highlightId: string) {
    this.selectedHighlight = this.highlightList.find(highlight => highlight.id === highlightId) || null;
    this.currentImageIndex = 0; // Reset to first image
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  nextImage(): void {
    if (this.selectedHighlight && this.selectedHighlight.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedHighlight.images.length;
    }
  }

  prevImage(): void {
    if (this.selectedHighlight && this.selectedHighlight.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedHighlight.images.length) % this.selectedHighlight.images.length;
    }
  }

  closeHighlight() {
    this.selectedHighlight = null;
    this.isModalOpen = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: Event) {
    // Cast the event to KeyboardEvent
    const keyboardEvent = event as KeyboardEvent;
    if (this.isModalOpen && keyboardEvent.key === 'Escape') {
      this.closeHighlight();
    }
  }

  // Alternative approach without casting:
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isModalOpen && event.key === 'Escape') {
      this.closeHighlight();
    }
  }

  // Optional: Add smooth scroll to section
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
