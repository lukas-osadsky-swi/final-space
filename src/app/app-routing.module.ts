import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'characters', component: CharactersComponent },
	{ path: 'character/:id', component: CharacterDetailComponent },
	{ path: 'episodes', component: EpisodesComponent },
	{ path: 'episode/:id', component: EpisodesComponent },
	{ path: 'locations', component: EpisodesComponent },
	{ path: 'location/:id', component: CharactersComponent },

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
