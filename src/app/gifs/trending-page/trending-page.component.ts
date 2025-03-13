import { Component, computed, inject, signal } from '@angular/core';
import { GifsListComponent } from "../components/gifs-list/gifs-list.component";
import { GifService } from '../services/gifsServices.service';
import { GiphyItem, GiphyResponse } from '../interfaces/giphy.interface';
import { GifType } from '../interfaces/gif.interface';

@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
})
export class TrendingPageComponent {

  gifsService = inject(GifService);
  gifs = computed<GifType[]>(() => this.gifsService.gifData());

}
