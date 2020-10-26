import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() feed_item;
  industry: string;
  liked: boolean = false;
  constructor() {}

  ngOnInit(): void {
    //Replace all _ by " "
    this.industry = this.feed_item.publication.company.industry.replace(
      /_/gi,
      ' '
    );
  }

  onThanx(): void {
    //in real app: POST data, here only ui is modified
    this.liked = !this.liked;
    this.liked
      ? this.feed_item.publication.likes.push({
          name: 'Grégory TRESTOUR'
        })
      : this.feed_item.publication.likes.pop({
          name: 'Grégory TRESTOUR'
        });
  }
}
