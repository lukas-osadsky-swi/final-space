import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

enum ListDataType {
	Character = "character",
	Episode = "episode",
	Location = "location"
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
	public locations: Location[];
	public dataType = ListDataType.Location;

	constructor(private readonly apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getLocations().subscribe(location => {
			this.locations = location;
		})
	}
}
