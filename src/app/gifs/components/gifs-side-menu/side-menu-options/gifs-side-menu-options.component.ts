import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
