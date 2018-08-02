import { trigger, state, style, transition, animate } from '@angular/animations';

export const ExpandModel = [
    trigger('place', [
        state('false', style({
           
            overflow:'scroll',
            height: '0px',
            transform: 'scale(0)'
        })),
        state('true', style({
            
            overflow:'scroll',
            height: '*',
            transform: 'scale(1)'
        })),
        transition('false =>true', animate('500ms ease-out')),
        transition('true =>false', animate('500ms  ease-in'))
    ])
  ]