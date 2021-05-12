import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomeComponent } from './components/home/home.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'character', component: CharactersComponent },
	{ path: 'character/:id', component: CharacterDetailComponent },
	{ path: 'episode', component: EpisodesComponent },
	{ path: 'episode/:id', component: EpisodeDetailComponent },
	{ path: 'location', component: LocationsComponent },
	{ path: 'location/:id', component: LocationDetailComponent },

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
