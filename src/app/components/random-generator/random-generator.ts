import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-random-generator',
  imports: [CommonModule],
  templateUrl: './random-generator.html',
  styleUrl: './random-generator.css',
})
export class RandomGenerator implements OnInit {
  @Input() title: string = 'Item';
  description: string = 'Click the button below to get a random selection from our list.';
  @Input() itemLabel: string = "";
  itemList: string[] = [];
  @Input() itemTypeName: string = 'item';

  // Customizable icons
  icon: string = '🎲';
  buttonIcon: string = '🎲';

  selectedItem: string | null = null;
  animate: boolean = false;
  showItemList: boolean = false;

  ngOnInit() {
    this.assignItemList();
  }

  assignItemList() {
    switch(this.itemLabel) {
      case "restaurants":
        const restaurants: string[] = data.restaurants;
        const desserts: string[]  = data.desserts;
        this.itemList = [...restaurants, ...desserts];
        break;
      case "hikes":
        this.itemList = data.hikes;
        break;
      default:
        this.itemList = [];
        break;
    }
  }

  pickRandomItem(): void {
    if (this.itemList.length === 0) return;

    // Pick a random item that's not the current one
    let newItem: string;
    const availableItems = this.itemList.filter(item => item !== this.selectedItem);

    if (availableItems.length === 0) {
      // If all items are the same (or only one item), just pick any
      const randomIndex = Math.floor(Math.random() * this.itemList.length);
      newItem = this.itemList[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      newItem = availableItems[randomIndex];
    }

    this.selectedItem = newItem;
    this.triggerAnimation();
  }

  private triggerAnimation(): void {
    this.animate = false;
    // Small delay to ensure the class removal is registered
    setTimeout(() => {
      this.animate = true;
    }, 10);
  }

  toggleItemList(): void {
    this.showItemList = !this.showItemList;
  }
}
