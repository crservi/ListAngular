import { Component } from '@angular/core';
import { SongsService } from 'src/app/shared/services/songs/songs.service';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent {
  constructor(private songsService: SongsService) {

  }

  songs = this.songsService.getSongs();

}
