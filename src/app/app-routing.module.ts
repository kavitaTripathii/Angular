import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplesComponent } from './temples/temples.component';
import { ExploreComponent } from './explore/explore.component';
import { FruitsComponent } from './fruits/fruits.component';
import { DressComponent } from './dress/dress.component';
import { FoodComponent } from './food/food.component';
import { LanguageComponent } from './language/language.component';
import { PulsesComponent } from './pulses/pulses.component';
import { SweetsComponent } from './sweets/sweets.component';
import { ArtComponent } from './art/art.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { StoriesComponent } from './stories/stories.component';
import { BlogsComponent } from './blogs/blogs.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'temples', component: TemplesComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'festivals', component: FestivalsComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'dress', component: DressComponent },
  { path: 'art', component: ArtComponent },
  { path: 'pulses', component: PulsesComponent },
  { path: 'sweets', component: SweetsComponent },
  { path: 'architecture', component: ArchitectureComponent},
  { path: 'stories', component: StoriesComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
