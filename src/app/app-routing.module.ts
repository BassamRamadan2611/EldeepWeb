import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandIdentifyComponent } from './brand-identify/brand-identify.component';
import { HomeComponent } from './home/home.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';

const routes: Routes = [


  

{path:'home' ,component:HomeComponent},
  {path:'brand_identfy',component:BrandIdentifyComponent},
  {path:'mobile',component:MobileAppComponent},
  {path:'web',component:WebDevelopmentComponent},
  {path:'media',component:SocialMediaMarketingComponent},
  {path:'',redirectTo:'home' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
