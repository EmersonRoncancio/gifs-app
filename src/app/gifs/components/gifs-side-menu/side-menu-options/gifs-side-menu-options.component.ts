import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifsServices.service';

interface RouterOutlet {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {

  gifService = inject(GifService);
  routerOutlets: RouterOutlet[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Treanding',
      route: '/dashboard/treanding',
      subLabel: 'Find the most popular gifs'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      subLabel: 'Search for gifs'
    }
  ]

}
