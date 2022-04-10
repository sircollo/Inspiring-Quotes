import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
  
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.textColor='Red';
   }

}
