import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { GifType } from '../interfaces/gif.interface';
import { GifsMapper } from '../mappers/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private readonly http = inject(HttpClient);
  public gifData = signal<GifType[]>([]);
  public loading = signal<boolean>(true);

  constructor() {
    this.loadGifs()
  }

  loadGifs() {
    this.http.get<GiphyResponse>(`https://api.giphy.com/v1/gifs/trending`,
      {
        params: {
          api_key: environment.apyKayGifs,
          limit: '30',
          offset: '0',
          rating: 'g',
        }
      }
    ).subscribe((data) =>{
      const gifs = GifsMapper.mapGifs(data.data);
      console.log(gifs);
      this.gifData.set(gifs);
      this.loading.set(false);
    });

    console.log('Gifs loaded');
    // console.log(data);
  }

}
