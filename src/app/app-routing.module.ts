import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyintigratigrationComponent } from './myintigratigration/myintigratigration.component';
import { IntigrationComponent } from './intigration/intigration.component';
import { TestingComponent } from './testing/testing.component';
import { PerformanceComponent } from './performance/performance.component';
import { ReportingComponent } from './reporting/reporting.component';
import { UiComponent } from './ui/ui.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { TechsupportComponent } from './techsupport/techsupport.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhystellerComponent } from './whysteller/whysteller.component';
import { WheelComponent } from './wheel/wheel.component';

const routes: Routes = [
  // empty path
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'integrations', component: IntigrationComponent },
  { path: 'api-testing', component: TestingComponent },

  { path: 'performance-testing', component: PerformanceComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'ui-testing', component: UiComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'technical-support', component: TechsupportComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'whyus', component: WhystellerComponent },
  { path: 'wheel', component: WheelComponent },
];
// {scrollPositionRestoration: 'enabled'}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
