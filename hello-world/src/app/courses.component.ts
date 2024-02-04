import {coursesService} from './courses.service'
import {Component} from '@angular/core';

@Component({
    selector:'courses',
    template: `<h2>{{title }}</h2>
               <input [value]="email1" (keyup.enter)="email1 = $any($event.target).value; onkeyup1();"  />
               <input [(ngModel)]="email1" (keyup.enter)="onkeyup1();"  />
               <input #email (keyup.enter)="onkeyup(email.value)"  /> 
               <button (click)="onSave($event)" [attr.value]="value" [style.backgroundColor]="isActive ? 'blue':'yellow'" class= "btn btn-primary" [class.active]="isActive">Save</button>
               <ul> 
                <li *ngFor="let course of courses">{{course}}</li>
               </ul>
               {{ course.title | uppercase }}
               {{ course.rating | number:'1.2-2'}}
               {{ course.price | currency:'AUD':true:'3.2-2'}}
               {{ course.releaseDate | date:'shortDate'}}
               
               {{text | summary:10 }}` /*true:currency symbol*/
})
export class CoursesComponent {
title = "List of courses";
courses;
value = "test";
isActive = true;
email1 = "me@example.com";
text="sfsdfsdfsfsfsfsf s d sdfs f sdf s f sdf sd fs f sf sd f sf s fsdfsdfsfsdfsd fsdfsdfsdfsdfsdfsdfsdfdsf";

course = {title:"The course 1", 
rating:4.3, price:190.95,
releaseDate:new Date(2016,3,1)}

constructor(service: coursesService) {

this.courses = service.getCourses();

}

onSave($event) {
    console.log('Save',$event);
}

onkeyup(email){
console.log(email);
}

onkeyup1(){
    console.log(this.email1);
    }
    

}