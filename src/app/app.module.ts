import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { WorkComponent } from './work/work.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { StrategyComponent } from './strategy/strategy.component';
import { FooterComponent } from './footer/footer.component';
import { BrandIdentifyComponent } from './brand-identify/brand-identify.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    WorkComponent,
    MissionComponent,
    ContactComponent,
    ServicesComponent,
    HeaderComponent,
    ClientsComponent,
    TeamComponent,
    StrategyComponent,
    FooterComponent,
    BrandIdentifyComponent,
    WebDevelopmentComponent,
    MobileAppComponent,
    SocialMediaMarketingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
