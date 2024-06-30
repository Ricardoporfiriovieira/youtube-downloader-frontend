import { Component } from '@angular/core';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { CardVideoComponent } from '../shared/components/card-video/card-video.component';
import { YoutubeService } from '../service/youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBarComponent,
    HttpClientModule,
    CardVideoComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  youtubeData: any;

  constructor(private youtubeService: YoutubeService) {  }

  onSubmit(query: string) {
    this.youtubeService.getYoutubeVideoInfo(query).subscribe((data) => {
      this.youtubeData = data;
    })
  }

}
