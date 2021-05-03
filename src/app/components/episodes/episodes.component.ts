import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';
import { ApiService } from 'src/app/services/api.service';

enum ListDataType {
	Character = "character",
	Episode = "episode",
	Location = "location"
}

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  public episodes: Episode[];
	public dataType = ListDataType.Episode;

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getEpisodes().subscribe(data => {
			console.log(data);
			this.episodes = data;
    });
  }
}
