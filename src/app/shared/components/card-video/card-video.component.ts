import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SelectMultipleComponent } from '../select-multiple/select-multiple.component';


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
  styleUrl: './card-video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardVideoComponent {
  @Input() youtubeData: any;
}
