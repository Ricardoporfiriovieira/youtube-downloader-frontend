import { Component } from '@angular/core';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { CardVideoComponent } from '../shared/components/card-video/card-video.component';
import { YoutubeService } from '../service/youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedService } from '../service/shared.service';

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
  sharedService: SharedService = new SharedService;

  constructor(private youtubeService: YoutubeService) {  }

  onSubmit(query: string) {
    if (!query){
      this.youtubeData = '';
      return;
    }
    this.youtubeService.getYoutubeVideoInfo(query).subscribe((data) => {
      this.sharedService.setUrl(query);
      this.youtubeData = data;
    })
  }

}
