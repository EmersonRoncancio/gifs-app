import { GifType } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interface";

export class GifsMapper {

  static mapGif( gifItem: GiphyItem): GifType {
    return {
      id: gifItem.id,
      title: gifItem.title,
      url: gifItem.images.original.url
    }
  }

  static mapGifs( gifItems: GiphyItem[]): GifType[] {
    const data = gifItems.map(gifItem => this.mapGif(gifItem));
    return data;
  }
}
