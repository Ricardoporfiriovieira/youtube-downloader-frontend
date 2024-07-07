import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SelectMultipleComponent } from '../select-multiple/select-multiple.component';
import { SharedService } from '../../../service/shared.service';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from '../../../service/youtube.service';

@Component({
  selector: 'app-card-video',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    SelectMultipleComponent
  ],
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardVideoComponent {
  @Input() youtubeData: any;

  @ViewChild(SelectMultipleComponent)
  selectMultipleComponent!: SelectMultipleComponent;

  constructor(private youtubeService: YoutubeService) { }

  downloadVideo() {
    const selectedData = this.selectMultipleComponent.getSelectedData();
    this.youtubeService.downloadYoutubeVideo(this.youtubeData.url, selectedData).subscribe((data) => {
      console.log("rodou");
    });
  }
}
