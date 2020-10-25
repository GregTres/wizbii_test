import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedItemsService {
  constructor(private http: HttpClient) {}
  feed_items = {};

  handleError(error: String) {
    console.error(error);
  }

  //A CORS error occurs, I don't use it
  fetchFeedItems() {
    this.http
      .post<any>(
        'https://api.wizbii.com/v2/dashboard/?direction=newest',
        {},
        {
          headers: new HttpHeaders({
            Authorization:
              'Bearer 4fce1edf2c6e50605b307ebcad5f86f917d2ff2bceccdbbba28b4ecef64ba087'
          })
        }
      )
      .subscribe(
        data => {
          this.feed_items = data;
          console.log('data', data);
        },
        error => console.error('An error occured fetching data : ', error)
      );
  }
}
