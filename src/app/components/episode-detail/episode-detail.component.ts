import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { Episode } from 'src/app/models/episode';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css', './../../app.component.css']
})
export class EpisodeDetailComponent implements OnInit {
	public episode: Episode;
  public characters: Character[] = [];

	constructor(
		private readonly dataService: ApiService,
		private readonly route: ActivatedRoute,
    private readonly router: Router
    ) { }

  ngOnInit() {
		let episodeId = this.route.snapshot.params["id"];
		this.dataService.getEpisode(episodeId).subscribe(episode => {
			this.episode = episode;

      this.episode.characters.forEach(characterApi => {
        let characterId = Number(characterApi.substring(characterApi.lastIndexOf('/') + 1));

        this.dataService.getCharacter(characterId).subscribe(character => {
          this.characters.push(character);
        })
      });
		});
  }

  public toCharacter(characterId: string):void {
    this.router.navigate(["/character/" + characterId]);
	}
}