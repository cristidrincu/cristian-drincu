import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WebPortfolioComponent } from './portfolio/web/web-portfolio.component';
import { GraphicDesignPortfolioComponent } from './portfolio/graphic-design/graphic-design-portfolio.component';
import { PersonalPortfolioComponent } from './portfolio/personal/personal-portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: 'web', component: WebPortfolioComponent },
      { path: 'graphic-design', component: GraphicDesignPortfolioComponent },
      { path: 'personal', component: PersonalPortfolioComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
