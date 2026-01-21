import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule, DatePipe],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  selectedTimelineItem: HighlightModel | null = null;
  isModalOpen = false;
  currentImageIndex: number = 0;
  showItemList: boolean = false;

  // Scroller properties
  activeScrollerItem: string = '';
  scrollerItems: Array<{id: string, label: string, date: Date}> = [];

  // New properties for scroller visibility
  isTimelineInView: boolean = false;
  timelineSection: HTMLElement | null = null;
  private scrollCheckTimeout: any;

  timelineList: HighlightModel[] = [
    {
      id: '2025-10-14_japan',
      title: "Mari's home",
      location: 'Japan',
      date: new Date(2025, 9, 14),
      description: "We tasted Japan's regional soul, from simmered Okinawan soba and sizzling yakiniku to sweet street festival treats, while immersing ourselves in its diverse beauty—from digital art museums and coastal aquariums to historic streets and relaxing onsen soaks. The journey was a personal highlight, especially experiencing the local charm and warmth of Mari's hometown in Kawagoe.",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/02/01/71/04/1000_F_201710452_Ar242DFoMmCjrh2vETiQ2l7SdSPuYVrY.jpg",
      images: [
        'assets/images/2025-10-14_japan/0.jpg',
        'assets/images/2025-10-14_japan/1.JPG',
        'assets/images/2025-10-14_japan/2.JPG',
        'assets/images/2025-10-14_japan/3.JPG',
        'assets/images/2025-10-14_japan/4.JPG',
        'assets/images/2025-10-14_japan/5.JPG',
        'assets/images/2025-10-14_japan/6.JPG',
        'assets/images/2025-10-14_japan/7.JPG',
        'assets/images/2025-10-14_japan/8.jpg',
        'assets/images/2025-10-14_japan/9.jpg',
        'assets/images/2025-10-14_japan/10.JPG',
      ],
      photos: 1626,
      days: '10',
      memories: 'Captivating',
      highlights: [
        "Wandering through Kawagoe",
        "teamLab Borderless: MORI Building DIGITAL ART MUSEUM",
        "DisneySea",
        "Wedding Photos in Kawagoe",
        "Hatsukari onsen",
        "Wandering through Kawagoe",
        "Seiganji onsen",
        "Kawagoe Festival",
        "Kamakura",
        "Yokohama",
        "Okinawa"
      ]
    },
    {
      id: '2025-09-05_pnw',
      title: 'Pacific Northwest',
      location: 'Seattle WA, Portland OR',
      date: new Date(2025, 8, 5),
      description: "In the Pacific Northwest, we fueled our adventures with incredible food, from Thai/Chinese bites and famous market chowders to modern fusion BBQ. We chased waterfalls in the Columbia River Gorge, explored iconic urban landmarks, and hiked through lush, misty forests, perfectly blending vibrant city flavors with breathtaking natural beauty.",
      imageUrl: "https://images.unsplash.com/photo-1472073834672-adb08feda350?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2025-09-05_pnw/0.jpg',
        'assets/images/2025-09-05_pnw/1.jpg',
        'assets/images/2025-09-05_pnw/2.JPG',
        'assets/images/2025-09-05_pnw/3.JPG',
        'assets/images/2025-09-05_pnw/4.JPG',
      ],
      photos: 397,
      days: '4',
      memories: 'Revitalizing',
      highlights: [
        "Kin Len Thai Night Bites",
        "Pikes Place Market",
        "Starbucks Reserve Roastery",
        "The Spheres",
        "Multnomah Falls",
        "Bridge of the Gods",
        "Eem",
        "Washington Park",
        "Trail of the Ten Falls",
        "Yaowarat",
        "Paseos"
      ]
    },
    {
      id: '2025-08-10_1stWedAnniv',
      title: '1st Wedding Anniversary',
      location: 'Los Angeles County, California',
      date: new Date(2025, 7, 10),
      description: "We celebrated our first year of marriage with romantic coastal dinners and leisurely coffee stops, savoring delicious meals in Malibu. Our anniversary trip blended relaxed beachside strolls and scenic hikes in the Santa Monica Mountains with memorable visits to iconic art and mountain-view lookouts.",
      imageUrl: "https://images.unsplash.com/photo-1635120347022-3f37c74a36b2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2025-08-10_1stWedAnniv/0.jpg',
        'assets/images/2025-08-10_1stWedAnniv/1.JPG',
        'assets/images/2025-08-10_1stWedAnniv/2.JPG',
        'assets/images/2025-08-10_1stWedAnniv/3.JPG',
        'assets/images/2025-08-10_1stWedAnniv/4.JPG',
        'assets/images/2025-08-10_1stWedAnniv/5.JPG',
      ],
      photos: 124,
      days: '1',
      memories: 'Harmonious',
      highlights: [
        "Fogo De Chao",
        "Da Vien Coffee",
        "The Getty",
        "Fogo De Chao",
        "Malibu Country Mart",
        "Topanga Lookout Trail",
      ]
    },
    {
      id: '2025-06-07_solvang',
      title: 'Danish Capital Of America',
      location: 'Solvang, California',
      date: new Date(2025, 5, 7),
      description: "We indulged in classic Danish pastries and savory sausages while exploring the charming European-style village of Solvang. Our days blended unique adventures, from visiting an ostrich farm to hiking the nearby coastal Gaviota Wind Cave trail.",
      imageUrl: "https://images.unsplash.com/photo-1612809419442-0e73640762c3?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2025-06-07_solvang/0.jpg',
        'assets/images/2025-06-07_solvang/1.JPG',
        'assets/images/2025-06-07_solvang/2.JPG',
        'assets/images/2025-06-07_solvang/3.JPG',
        'assets/images/2025-06-07_solvang/4.JPG',
        'assets/images/2025-06-07_solvang/5.JPG',
        'assets/images/2025-06-07_solvang/6.JPG',
        'assets/images/2025-06-07_solvang/7.JPG',
        'assets/images/2025-06-07_solvang/8.JPG',
        'assets/images/2025-06-07_solvang/9.JPG',
        'assets/images/2025-06-07_solvang/10.JPG',
        'assets/images/2025-06-07_solvang/11.JPG',
      ],
      photos: 317,
      days: '1',
      memories: 'Whimsical',
      highlights: [
        "Ostrichland",
        "Copenhagen Sausage Garden",
        "Olsen's Danish Village Bakery",
        "Morttensen's Danish Bakery",
        "Birkholm's Bakery & Cafe",
        "The Solvang Bakery",
        "Gaviota Wind Cave trail",
      ]
    },
    {
      id: '2025-02-03_disneyworld',
      title: 'DisneyWorld',
      location: 'Orlando, Florida',
      date: new Date(2025, 1, 3),
      description: "We reveled in Disney magic with a fairy tale dinner at the Be Our Guest Restaurant, cheered at the Beauty and the Beast - Live on Stage show, and ended our nights beneath spectacular fireworks. Our trip was filled with thrilling coasters, immersive attractions, and memorable meals across all the parks.",
      imageUrl: "https://images.unsplash.com/photo-1634221558053-3a617b5201d9?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2025-02-03_disneyworld/0.jpg',
        'assets/images/2025-02-03_disneyworld/1.jpg',
        'assets/images/2025-02-03_disneyworld/2.JPG',
        'assets/images/2025-02-03_disneyworld/3.JPG',
        'assets/images/2025-02-03_disneyworld/4.jpg',
        'assets/images/2025-02-03_disneyworld/5.JPG',
        'assets/images/2025-02-03_disneyworld/6.JPG',
        'assets/images/2025-02-03_disneyworld/7.JPG',
        'assets/images/2025-02-03_disneyworld/8.JPG',
      ],
      photos: 1055,
      days: '5',
      memories: 'Enchanting',
      highlights: [
        "Be Our Guest Restaurant",
        "Epcot",
        "Remy's Ratatouille Adventure",
        "Frozen Ever After",
        "Guardians of the Galaxy Cosmic Rewind",
        "Animal Kingdom",
        "Avatar Flight of Passage",
        "Na'vi River Journey",
        "Kilamanjaro Safari",
        "Festival of the Lion King",
        "Hollywood Studios",
        "Rock 'n' Roller Coaster Starring Aerosmith",
        "The Twilight Zone Tower of Terror",
        "Beauty and the Beast - Live on Stage",
        "Indiana Jones Epic Stunt Spectacular",
        "Sci Fi Diner",
        "Star wars Rise of the Resistance ",
        "Fantasmic",
        "Magic Kingdom",
        "Space Mountain",
        "Tianna's Bayou Adventure",
        "Tron Lightcycle Power Run",
        "Be Our Guest Restaurant",
        "Happily Ever After",
      ]
    },
    {
      id: '2024-12-31_lasvegas',
      title: 'Jan and Yamazaki in Vegas',
      location: 'Las Vegas NV',
      date: new Date(2024, 11, 31),
      description: "We rang in the new year with a dazzling Cirque du Soleil show and a vibrant Strip countdown. The celebration was fueled by incredible eats, from legendary late-night tacos and lavish buffets to famous gourmet street food.",
      imageUrl: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2024-12-31_lasvegas/0.JPG',
        'assets/images/2024-12-31_lasvegas/1.jpg',
        'assets/images/2024-12-31_lasvegas/2.jpg',
        'assets/images/2024-12-31_lasvegas/3.JPG',
      ],
      photos: 997,
      days: '2',
      memories: 'Electric',
      highlights: [
        "Countdown in Vegas",
        "Tacos El Gordo",
        "Pet Kingdom",
        "O by Cirque du Soleil",
        "Bacchanal Buffet",
        "Countdown in Vegas",
        "Las Vegas Strip",
        "Gordon Ramsay Fish & Chips"
      ]
    },
    {
      id: '2024-12-30_monumentvalley',
      title: 'Monument Valley',
      location: 'Navajo Nation Reservation AZ',
      date: new Date(2024, 11, 30),
      description: "We experienced the awe-inspiring beauty of Monument Valley on its iconic scenic drive, marveling at the towering red rock formations. Our journey connected the stunning landscapes of the Southwest through a memorable road trip across Arizona and into Nevada.",
      imageUrl: "https://images.unsplash.com/photo-1480004902249-cdb28d6a01a4?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2024-12-30_monumentvalley/0.JPG',
        'assets/images/2024-12-30_monumentvalley/1.JPG',
        'assets/images/2024-12-30_monumentvalley/2.JPG',
        'assets/images/2024-12-30_monumentvalley/3.JPG',
        'assets/images/2024-12-30_monumentvalley/4.JPG',
      ],
      photos: 801,
      days: '1',
      memories: 'Epic',
      highlights: [
        "Monument Valley scenic drive",
        "Monument Valley Visitor Center",
        "Monument Valley scenic drive",
        "Monument Valley -> Page, Az",
        "Page, Az -> St. George",
        "St. George -> Las Vegas",
      ]
    },
    {
      id: '2024-12-29_antelopecanyon',
      title: 'Antelope Canyon and Horseshoe Bend',
      location: 'Near Page AZ',
      date: new Date(2024, 11, 29),
      description: "We witnessed the breathtaking beauty of the American Southwest, from a Grand Canyon sunrise and the sculpted slots of Antelope Canyon to the majestic curve of Horseshoe Bend. Our road trip wove these iconic sights together, with unforgettable drives connecting each stunning landscape and classic local meals fueling the adventure.",
      imageUrl: "https://images.unsplash.com/photo-1505521377774-103a8cc2f735?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2024-12-29_antelopecanyon/0.jpg',
        'assets/images/2024-12-29_antelopecanyon/1.JPG',
        'assets/images/2024-12-29_antelopecanyon/2.JPG',
        'assets/images/2024-12-29_antelopecanyon/3.jpg',
        'assets/images/2024-12-29_antelopecanyon/4.jpg',
        'assets/images/2024-12-29_antelopecanyon/5.jpg',
        'assets/images/2024-12-29_antelopecanyon/6.jpg',
        'assets/images/2024-12-29_antelopecanyon/7.JPG',
        'assets/images/2024-12-29_antelopecanyon/8.JPG',
      ],
      photos: 896,
      days: '1',
      memories: 'Magestic',
      highlights: [
        "Lower Antelope Canyon tour",
        "Sunrise in Grand Canyon at Mather Point in Grand Canyon",
        "Grand Canyon -> Page, Arizona",
        "Lower Antelope Canyon tour",
        "Big John's Texas BBQ",
        "Horseshoe Bend",
        "Goulding Arch",
        "Forrest Gump Point",
        "Instant Noodle party",
        "Goulding's Lodge"
      ]
    },
    {
      id: '2024-12-28_grandcanyon',
      title: 'Grand Canyon',
      location: 'Arizona',
      date: new Date(2024, 11, 28),
      description: "We embarked on a classic American road trip along historic Route 66, enjoying nostalgic diner stops and epic desert drives from Las Vegas to the Grand Canyon. Our journey culminated in the awe-inspiring vistas of the canyon, experienced from its most iconic viewpoints and a historic watchtower.",
      imageUrl: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2024-12-28_grandcanyon/0.jpg',
        'assets/images/2024-12-28_grandcanyon/1.JPG',
        'assets/images/2024-12-28_grandcanyon/2.JPG',
        'assets/images/2024-12-28_grandcanyon/3.JPG',
        'assets/images/2024-12-28_grandcanyon/4.JPG',
        'assets/images/2024-12-28_grandcanyon/5.JPG',
        'assets/images/2024-12-28_grandcanyon/6.jpg',
      ],
      photos: 1400,
      days: '1',
      memories: 'Iconic',
      highlights: [
        "Mr D'z Route 66 Diner",
        "Las Vegas -> Seligman",
        "Mr D'z Route 66 Diner",
        "Seligman->Grand Canyon",
        "Grand Canyon National Park Sign",
        "Desert View Watchtower",
        "Grandview Point",
        "Mather Point",
        "Hopi Point",
        "Yavapai Viewpoint",
        "Big E Steakhouse & Saloon"
      ]
    },
    {
      id: '2024-10-18_denver',
      title: 'Mile High City',
      location: 'Denver, CO',
      date: new Date(2024, 9, 18),
      description: "We explored the majestic heart of Colorado, hiking through Rocky Mountain National Park, driving its breathtaking alpine trails, and visiting the natural wonders of Pikes Peak and Garden of the Gods. The trip blended stunning outdoor adventures with warm visits to family and iconic local spots from Red Rocks to downtown Denver.",
      imageUrl: "https://images.unsplash.com/photo-1556047684-98ef5cc1e8cb?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        'assets/images/2024-10-18_denver/0.jpg',
        'assets/images/2024-10-18_denver/1.JPG',
        'assets/images/2024-10-18_denver/2.JPG',
        'assets/images/2024-10-18_denver/3.JPG',
        'assets/images/2024-10-18_denver/4.JPG',
        'assets/images/2024-10-18_denver/5.JPG',
        'assets/images/2024-10-18_denver/6.JPG',
        'assets/images/2024-10-18_denver/7.JPG',
        'assets/images/2024-10-18_denver/8.JPG',
        'assets/images/2024-10-18_denver/9.JPG',
      ],
      photos: 383,
      days: '4',
      memories: 'Heartfelt',
      highlights: [
        "Rocky Mountain National Park",
        "Hang out with Neyer's family and Rudy/Dave",
        "Rocky Mountain National Park",
        "Chasm Falls Trail",
        "Rainbow Curve",
        "Many Parks Curve",
        "Hidden Valley",
        "Red Rocks Amphitheatre",
        "Colorado Springs",
        "Pikes Peak",
        "Garden of the Gods",
        "Red Rock Canyon",
        "Downtown Denver",
        "Angelo's Taverna"
      ]
    }
  ];
  ngOnInit() {
    this.generateScrollerItems();
  }

  ngAfterViewInit() {
    // Get the timeline section element
    this.timelineSection = document.getElementById('timeline');
    this.checkTimelineVisibility();
  }

  ngOnDestroy() {
    // Clean up the timeout to prevent memory leaks
    if (this.scrollCheckTimeout) {
      clearTimeout(this.scrollCheckTimeout);
    }
  }

  // Method to check if timeline section is in viewport
  checkTimelineVisibility(): void {
    if (!this.timelineSection) return;

    const rect = this.timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Check if timeline section is at least partially visible
    const isVisible = (
      rect.top <= windowHeight * 0.8 && // 80% from top
      rect.bottom >= windowHeight * 0.2 && // 20% from bottom
      rect.left <= windowWidth &&
      rect.right >= 0
    );

    this.isTimelineInView = isVisible;
  }

  // Method to update scroller visibility based on timeline position
  updateScrollerVisibility(): void {
    if (!this.showItemList || this.scrollerItems.length === 0) return;

    this.checkTimelineVisibility();

    // If timeline is not in view, also check if we're near the top or bottom
    if (!this.isTimelineInView && this.timelineSection) {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const timelineTop = this.timelineSection.offsetTop;
      const timelineBottom = timelineTop + this.timelineSection.offsetHeight;
      const buffer = 100; // 100px buffer zone

      // Check if we're within buffer zone above or below timeline
      const isNearTimeline = scrollPosition >= timelineTop - buffer &&
                            scrollPosition <= timelineBottom + buffer;

      this.isTimelineInView = isNearTimeline;
    }
  }

  // FIXED: Update the scroll listener
  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.showItemList && this.scrollerItems.length > 0) {
      // Update active scroller item
      this.updateActiveScrollerItem();

      // Update scroller visibility with debouncing
      if (this.scrollCheckTimeout) {
        clearTimeout(this.scrollCheckTimeout);
      }

      this.scrollCheckTimeout = setTimeout(() => {
        this.updateScrollerVisibility();
      }, 100); // Debounce for performance
    }
  }

  // Update the toggleItemList method
  toggleItemList(): void {
    this.showItemList = !this.showItemList;

    if (this.showItemList) {
      // Generate scroller items when timeline is shown
      setTimeout(() => {
        this.generateScrollerItems();

        // Set initial active item based on scroll position
        this.updateActiveScrollerItem();

        // Check timeline visibility
        this.checkTimelineVisibility();

        // Force a visibility update
        this.updateScrollerVisibility();
      }, 100);
    } else {
      // Reset scroller visibility when timeline is hidden
      this.isTimelineInView = false;
    }
  }

  // FIXED: Method to update active scroller item based on scroll position
  updateActiveScrollerItem(): void {
    if (!this.showItemList || !this.isTimelineInView) return;

    const timelineItems = document.querySelectorAll('.timeline-item');
    const viewportMiddle = window.innerHeight / 2;

    let closestItemIndex: number | null = null;
    let closestDistance = Infinity;

    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestItemIndex = index;
      }
    });

    if (closestItemIndex !== null && closestItemIndex < this.timelineList.length) {
      const timelineItem = this.timelineList[closestItemIndex];
      if (timelineItem) {
        this.activeScrollerItem = `${timelineItem.date.getFullYear()}-${timelineItem.date.getMonth()}`;
      }
    }
  }

  // Method to scroll to a specific month/year
  scrollToMonth(monthYearId: string): void {
    // First, ensure we're in the timeline section
    if (this.timelineSection && !this.isTimelineInView) {
      // Scroll to the timeline section first
      this.timelineSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Wait a bit for the scroll to complete, then scroll to the month
      setTimeout(() => {
        this.scrollToSpecificMonth(monthYearId);
      }, 500);
    } else {
      this.scrollToSpecificMonth(monthYearId);
    }
  }

  private scrollToSpecificMonth(monthYearId: string): void {
    const element = document.querySelector(`[data-month-year="${monthYearId}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // Update active scroller item
      this.activeScrollerItem = monthYearId;

      // Ensure timeline is marked as in view
      this.isTimelineInView = true;

      // Also open the first item in that month if clicked
      const itemsInMonth = this.timelineList.filter(item =>
        `${item.date.getFullYear()}-${item.date.getMonth()}` === monthYearId
      );

      if (itemsInMonth.length > 0) {
        // Optionally open the first item
        // this.openTimelineItem(itemsInMonth[0].id);
      }
    }
  }

  // Rest of your existing methods remain the same...
  generateScrollerItems(): void {
    // Create a map of unique month/year combinations
    const monthMap = new Map<string, {id: string, label: string, date: Date}>();

    this.timelineList.forEach(item => {
      const year = item.date.getFullYear();
      const month = item.date.getMonth();
      const key = `${year}-${month}`;

      if (!monthMap.has(key)) {
        monthMap.set(key, {
          id: key,
          label: this.formatMonthYear(item.date),
          date: item.date
        });
      }
    });

    // Sort by date (newest first)
    this.scrollerItems = Array.from(monthMap.values())
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  formatMonthYear(date: Date): string {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  }

  // Your existing methods remain the same:
  openTimelineItem(itemId: string) {
    this.selectedTimelineItem = this.timelineList.find(item => item.id === itemId) || null;
    this.currentImageIndex = 0;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  nextImage(): void {
    if (this.selectedTimelineItem && this.selectedTimelineItem.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedTimelineItem.images.length;
    }
  }

  prevImage(): void {
    if (this.selectedTimelineItem && this.selectedTimelineItem.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedTimelineItem.images.length) % this.selectedTimelineItem.images.length;
    }
  }

  closeTimelineItem() {
    this.selectedTimelineItem = null;
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey() {
    if (this.isModalOpen) {
      this.closeTimelineItem();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isModalOpen && event.key === 'Escape') {
      this.closeTimelineItem();
    }
  }

}
