import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-character-detail',
	templateUrl: './character-detail.component.html',
	styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
	character: Character;

	constructor(
		private readonly dataService: ApiService,
		private readonly route: ActivatedRoute) { }

	ngOnInit() {
		let characterId = this.route.snapshot.params["id"];
		this.dataService.getCharacter(characterId).subscribe(data => {
			this.character = data;
			console.log(this.character);
		});
	}

}
