import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {title : 'hello-world',
  isFavourite : true}

  courses=[1,2];

  viewMode='map';

  tweet = {isLiked:false,likesCount:0};

  canSave=true;

  onFavouriteChanged(eventArgs:FavouriteChangedEventArgs) {
    console.log("Favourite Changed:",eventArgs);
  }

  changeViewModel(newvalue){
     this.viewMode=newvalue;
  }

  onAdd(){
    this.courses.push(3);
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  onChange(course){
    let index = this.courses.indexOf(course);
    this.courses[index] = 0;
  }
}
