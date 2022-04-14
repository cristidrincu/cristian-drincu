import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WebPortfolioComponent } from './portfolio/web/web-portfolio.component';
import { GraphicDesignPortfolioComponent } from './portfolio/graphic-design/graphic-design-portfolio.component';
import { PersonalPortfolioComponent } from './portfolio/personal/personal-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    WebPortfolioComponent,
    GraphicDesignPortfolioComponent,
    PersonalPortfolioComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
