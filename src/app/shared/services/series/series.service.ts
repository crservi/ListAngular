import { Injectable } from '@angular/core';
import { seriesData } from 'src/data/series.data';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  getSeries(){
    return seriesData;
  }
}
