import { Component, input, signal } from '@angular/core';
import { GiftsListItemComponent } from "./gifts-list-item/gifts-list-item.component";


@Component({
  selector: 'app-gifs-list',
  imports: [GiftsListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {

  gifts = input.required<string[]>();

}
