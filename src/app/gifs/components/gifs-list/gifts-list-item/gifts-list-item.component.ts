import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifType } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'app-gifts-list-item',
  imports: [],
  templateUrl: './gifts-list-item.component.html',
})
export class GiftsListItemComponent {

  giftItem = input<string>('')

 }
