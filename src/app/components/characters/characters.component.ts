import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ListDataType } from 'src/app/models/list-data-type';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
	public characters: Character[];
	public dataType = ListDataType.Character;

	constructor(private readonly apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getCharacters().subscribe(characters => {
			this.characters = characters;
		})
	}
}