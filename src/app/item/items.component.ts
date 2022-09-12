import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ObservableArray } from '@nativescript/core'
import { RadListView } from 'nativescript-ui-listview'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: ObservableArray<Item> = new ObservableArray<Item>();
  @ViewChild("recentList", { static: false }) list: ElementRef<RadListView>;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items.push(...this.itemService.getItems());
    this.items.forEach((value) => console.log("Value:", value.name, value.id));
   // setTimeout(()=>{this.list.nativeElement.refresh()}, 1000);
  }
}
