import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }


  @HostListener('click')
  prevFunc(){
    let element = this.el.nativeElement.parentElement.parentElement.children[0].children[0];
    let item = element.getElementsByClassName("product");
    element.append(item[0]);
  }

}
