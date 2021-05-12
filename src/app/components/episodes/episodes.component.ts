import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';
import { ListDataType } from 'src/app/models/list-data-type';
import { ApiService } from 'src/app/services/api.service';

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
    this.apiService.getEpisodes().subscribe(episode => {
			this.episodes = episode;
    });
  }
}
