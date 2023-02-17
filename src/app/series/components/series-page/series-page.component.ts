import { Component } from '@angular/core';
import { SeriesService } from 'src/app/shared/services/series/series.service';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent {
  constructor(private seriesService: SeriesService) {

  }

  series = this.seriesService.getSeries();

}
