import { Component, inject, signal } from '@angular/core';
import { GifType } from '../interfaces/gif.interface';
import { GifService } from '../services/gifsServices.service';
import { GifsListComponent } from "../components/gifs-list/gifs-list.component";
import { GifsMapper } from '../mappers/gif.mapper';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {

  searchGifs = signal<GifType[]>([]);
  gifsService = inject(GifService);

  onChangeValue(event: string) {
    this.gifsService.getGifsName(event)
      .subscribe((data)=>{
        this.searchGifs.set(data);
      })
  }
}
