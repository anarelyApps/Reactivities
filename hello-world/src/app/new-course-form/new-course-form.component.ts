import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
 /*form = new FormGroup({
  name:new FormControl(),
  contact : new FormGroup({
    email:new FormControl(),
    phone:new FormControl()
  }),
   topics : new FormArray([])
 })*/

 form;
 constructor(fb: FormBuilder) {
this.form = fb.group({
  name: ['',Validators.required],
  contact: fb.group({
    email:[],
    phone:[]
  }),
  topics: fb.array([])
})
 }


 addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value='';
 }
 
 //(click)="removeTopic(topic)"
 removeTopic(topic:FormControl) {
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
