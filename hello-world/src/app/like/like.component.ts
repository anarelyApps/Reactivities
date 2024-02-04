import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  template: `<span class="glyphicon glyphicon-heart"
             [class.liked-color]="isLiked" [class.unliked-color]="!isLiked" (click)="onClick()">{{likesCount}}</span>`,
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
 @Input('likesCount') likesCount:number=1;
 @Input('isLiked') isLiked:boolean=true;

onClick() {
  this.isLiked = !this.isLiked;
  this.likesCount = this.isLiked ? 1 : 0;
}

} 
