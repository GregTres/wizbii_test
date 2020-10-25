import { FeedItemsService } from './services/feed-items.service';
import { Component } from '@angular/core';
import feed_items from './feed_items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private feedItemsService: FeedItemsService) {}
  title = 'wizbii';
  //retrieve items and filter them by publication
  feed_items = feed_items.filter(feed_item => feed_item.type === 'publication');
  ngOnInit(): void {
    //fetch feed items (doesn't work)
    //this.feedItemsService.fetchFeedItems();
  }
}
