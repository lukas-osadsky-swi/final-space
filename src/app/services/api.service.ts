import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private readonly baseRoute: string = 'https://finalspaceapi.com/api/v0/';

	constructor(
		private http: HttpClient,
	) { }

	public getCharacters(): Observable<Character[]> {
		return this.get('character');
	}

	public getCharacter(characterId: number): Observable<Character> {
		return this.get('character/' + characterId);
	}

	public getEpisodes() {
		return this.get('episode/');
	}

	public getEpisode(episodeId: number) {
		return this.get('episode/' + episodeId);
	}

	public getLocations() {
		return this.get('location/');
	}

	public getLocation(locationId: number) {
		return this.get('location/' + locationId);
	}

	public get(route: string, data?: any): Observable<any> {
		let params = new HttpParams();
		if (data !== undefined) {
			Object.getOwnPropertyNames(data).forEach(key => {
				params = params.set(key, data[key]);
			});
		}

		return this.http.get(this.baseRoute + route, {
			responseType: 'json',
			headers: undefined,
			params
		});
	}

}
