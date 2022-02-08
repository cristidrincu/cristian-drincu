import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LinkNames } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cristiandrincu';
  currentURL = '';
  subscription$ = new Subscription();

  constructor(@Inject(Router) private router: Router) {}

  ngOnInit(): void {
    this.subscription$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentURL = event.urlAfterRedirects.split('/').join('');
      }
    });
  }

  get linkNames(): typeof LinkNames {
    return LinkNames;
  }

  linkDescriptionCSSClass(url: LinkNames): string {
    return url === this.currentURL
      ? 'cd-menu-section-description-active'
      : 'cd-menu-section-description';
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
