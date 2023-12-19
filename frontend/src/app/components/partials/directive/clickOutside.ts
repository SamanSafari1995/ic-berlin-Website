import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, Inject, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription, filter, fromEvent } from "rxjs";

@Directive({
  selector: '[clickOutside]'
})

export class ClickOutsideDirective implements AfterViewInit, OnDestroy {

  constructor(private el:ElementRef,
    @Inject(DOCUMENT) private document:Document) { }
    documentClickSubscription: Subscription |undefined;
    @Output()  clickOutside = new EventEmitter<void>();


  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click').pipe(
      filter((event)=>{
        return !this.isInside(event.target as HTMLElement);
      })
    ).subscribe(() =>{
      this.clickOutside.emit()
    })
  }

  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }

  isInside(elementToCheck:HTMLElement):boolean{
    return elementToCheck === this.el.nativeElement ||
    this.el.nativeElement.contains(elementToCheck)
  };

}
