import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {  }

  getYoutubeVideoInfo(urlVideo: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/info?url=' + urlVideo);
  }
}
