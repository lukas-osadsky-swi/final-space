import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		ListComponent,
		CharactersComponent,
		EpisodesComponent,
		HomeComponent,
		PageNotFoundComponent,
		CharacterDetailComponent,
		EpisodeDetailComponent,
		LocationsComponent,
		LocationDetailComponent,
		NavigationBarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
