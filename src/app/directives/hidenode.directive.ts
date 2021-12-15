import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHidenode]',
})
export class HidenodeDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.display = 'none';
    console.log(this.el);
  }
}
