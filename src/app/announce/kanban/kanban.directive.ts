import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-host]',
})
export class KanbanDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
