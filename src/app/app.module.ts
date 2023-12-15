import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { IntigrationComponent } from './intigration/intigration.component';
import { MyintigratigrationComponent } from './myintigratigration/myintigratigration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import FormsModule
import { MatLegacyDialog as MatDialog, MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { Overlay } from '@angular/cdk/overlay';
import { TestingComponent } from './testing/testing.component';
import { PerformanceComponent } from './performance/performance.component';
import { ReportingComponent } from './reporting/reporting.component';
import { UiComponent } from './ui/ui.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechsupportComponent } from './techsupport/techsupport.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhystellerComponent } from './whysteller/whysteller.component';
import { WheelComponent } from './wheel/wheel.component';
import { HowItWorksCardComponent } from './how-it-works-card/how-it-works-card.component';
import { FadeinDirective } from './directives/fadein.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    HeaderMenuComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    IntigrationComponent,
    MyintigratigrationComponent,
    TestingComponent,
    PerformanceComponent,
    ReportingComponent,
    UiComponent,
    TestimonialsComponent,
    CardComponent,
    ContactComponent,
    TechsupportComponent,
    AboutusComponent,
    WhystellerComponent,
    WheelComponent,
    HowItWorksCardComponent,
    FadeinDirective,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [
    LoginComponent,
    SignupComponent,
    MyintigratigrationComponent,
    MatDialog,
    Overlay,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
