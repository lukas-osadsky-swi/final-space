import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { Location } from 'src/app/models/location';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css','./../../app.component.css']
})
export class LocationDetailComponent implements OnInit {
	public location: Location;
  public residents: Character[] = [];

	constructor(
		private readonly dataService: ApiService,
		private readonly route: ActivatedRoute
  ) { }

	ngOnInit() {
		let characterId = this.route.snapshot.params["id"];
		this.dataService.getLocation(characterId).subscribe(location => {
			this.location = location;      
      
      this.location.notable_residents.forEach(characterApi => {
        let characterId = Number(characterApi.substring(characterApi.lastIndexOf('/') + 1));

        this.dataService.getCharacter(characterId).subscribe(character => {
          this.residents.push(character);
        })
      });
		});
	}
}
