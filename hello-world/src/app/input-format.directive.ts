import { Directive, HostListener, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el:ElementRef) { }
@Input('appInputFormat') format;

  @HostListener('focus') onFocus(){
    console.log("on focus");
  }
  
  @HostListener('blur') onBlur(){
    let value: String = this.el.nativeElement.value;

    if(this.format =='lowercase')
      this.el.nativeElement.value =value.toLowerCase();
    else
      this.el.nativeElement.value =value.toUpperCase();

    console.log("on blur");
  }
}


 
