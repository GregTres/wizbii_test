import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() feed_item;
  industry: string;
  constructor() {}

  ngOnInit(): void {
    //Replace all _ by " "
    this.industry = this.feed_item.publication.company.industry.replace(
      /_/gi,
      ' '
    );
  }
}
