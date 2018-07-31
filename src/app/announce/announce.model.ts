import { Type } from "@angular/core";

export class KanbanItem {
    constructor(public component: Type<any>, public data: any) { }
}

export interface Item {
    selector: string;
    name: string;
}

export interface BaseComponent {
    data: any;
}