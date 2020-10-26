import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() feed_item;
  value: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    //in real app: POST data, here only ui is modified
    event.preventDefault();
    console.log(this.value);
    this.feed_item.publication.comments.push({
      name: 'Grégory TRESTOUR',
      content: this.value,
      date: Date.now()
    });
    this.value = '';
  }
}
