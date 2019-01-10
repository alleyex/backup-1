import { Component, OnInit, ComponentFactoryResolver, Input, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';

import { KanbanDirective } from './kanban.directive';
import { KanbanItem, BaseComponent } from '../announce.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-kanban',
    templateUrl: './kanban.component.html',
    styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {
    @Input() kanbans: KanbanItem[];
    @Output() changed = new EventEmitter<number>();
    @ViewChild(KanbanDirective) host: KanbanDirective;
    translate$: Subscription;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private translateService: TranslateService) { }
    ngOnInit() {
        this.loadComponent();
        this.automatic();
        this.translate$ = this.translateService.onLangChange.subscribe((event) => {

            setTimeout(() => {
                if (this.kanbans.length === 1) {
                this.index = 0;
                }                
                this.loadComponent();
            }, 200);
        });
    }

    index = 1;
    currentData: any;

    loadComponent() {

        let item = this.kanbans[this.index];
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
        let viewContainerRef = this.host.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        this.currentData = (<BaseComponent>componentRef.instance).data = item.data;
        this.changed.emit(this.index);
    }

    interval: any;

    automatic() {

        this.interval = setInterval(() => {

            this.index = (this.index + 1) % this.kanbans.length;
            this.loadComponent();
        }, 5000);
    }

    manually(index: number) {
        clearInterval(this.interval);
        this.index = index;
        this.loadComponent();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
        this.translate$.unsubscribe();
    }

}
