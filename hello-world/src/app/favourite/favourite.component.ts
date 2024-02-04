import { Component, OnInit, Input, Output,EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
    selector:'favourite',
    templateUrl: './favourite.component.html',
    styleUrls:['./favourite.component.css'],
    inputs:['isFavorite'],
    encapsulation: ViewEncapsulation.Emulated
})

export class FavouriteComponent implements OnInit {
   @Input('is-Favourite') isFavourite: boolean = true ;

   @Output('change') click = new EventEmitter();

   isFavorite:boolean=true;

    constructor(){}

    ngOnInit(): void {
        
    }

    onClick() {
        this.isFavourite =!this.isFavourite;
        this.click.emit({newValue: this.isFavourite});
    }
}

export interface FavouriteChangedEventArgs {
    newValue:boolean;
  }