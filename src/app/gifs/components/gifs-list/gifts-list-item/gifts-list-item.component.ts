import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-gifts-list-item',
  imports: [],
  templateUrl: './gifts-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftsListItemComponent {

  giftItem = input<string>('')

 }
