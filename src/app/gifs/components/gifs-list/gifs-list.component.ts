import { Component, input, signal } from '@angular/core';
import { GiftsListItemComponent } from "./gifts-list-item/gifts-list-item.component";
import { GifType } from '../../interfaces/gif.interface';


@Component({
  selector: 'app-gifs-list',
  imports: [GiftsListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {

  gifts = input.required<GifType[]>();
  loading = input.required<boolean>();
}
