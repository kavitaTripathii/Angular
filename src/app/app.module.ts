import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TemplesComponent } from './temples/temples.component';
import { ExploreComponent } from './explore/explore.component';
import { FruitsComponent } from './fruits/fruits.component';
import { PulsesComponent } from './pulses/pulses.component';
import { DressComponent } from './dress/dress.component';
import { FoodComponent } from './food/food.component';
import { SweetsComponent } from './sweets/sweets.component';
import { ArtComponent } from './art/art.component';
import { LanguageComponent } from './language/language.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { BlogsComponent } from './blogs/blogs.component';
import { StoriesComponent } from './stories/stories.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TemplesComponent,
    ExploreComponent,
    FruitsComponent,
    PulsesComponent,
    DressComponent,
    FoodComponent,
    SweetsComponent,
    ArtComponent,
    LanguageComponent,
    ArchitectureComponent,
    FestivalsComponent,
    BlogsComponent,
    StoriesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
