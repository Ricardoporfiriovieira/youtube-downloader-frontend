import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private url: ReplaySubject<string> = new ReplaySubject<string>(1);
  private format: ReplaySubject<string> = new ReplaySubject<string>(1);

  setUrl(data: any): void {
    this.url.next(data);
    console.log(this.url);
  }

  setFormat(data: any): void {
    this.format.next(data);
  }

  getUrl$(): Observable<string> {
    return this.url.asObservable();
  }

  getFormat$(): Observable<string> {
    return this.format.asObservable();
  }
}
