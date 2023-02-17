import { Injectable } from '@angular/core';
import { songsData } from 'src/data/songs.data';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor() { }

  getSongs(){
    return songsData;
  }
}
