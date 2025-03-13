import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { GifType } from '../interfaces/gif.interface';
import { GifsMapper } from '../mappers/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private readonly http = inject(HttpClient);
  public gifData = signal<GifType[]>([]);
  public loading = signal<boolean>(true);
  envs = environment;
  searchHistory = signal<Record<string, GifType[]>>({});
  searchHistoryKeys = computed<string[]>(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadGifs()
  }

  loadGifs() {
    this.http.get<GiphyResponse>(`${this.envs.apiGifs}/trending`,
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
  }

  getGifsName(search: string){
    return this.http.get<GiphyResponse>(`${this.envs.apiGifs}/search`,{
      params:{
        api_key: environment.apyKayGifs,
        limit: '30',
        offset: '0',
        rating: 'g',
        q: search.replace(' ', '')
      }
    }).pipe(
      map((data) => GifsMapper.mapGifs(data.data)),
      tap((data) => {
        this.searchHistory.update(history => {
          return {
            ...history,
            [search.replace(' ', '')]: data
          }
        })
      })
    )
  }

}
