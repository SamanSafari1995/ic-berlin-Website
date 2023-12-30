import { animate, group, query, state, style, transition, trigger } from '@angular/animations';


  export let collaps = trigger('collapsible',[
      state('*',style({
        height: '5rem',
      })),

      state('void',style({
        height:'*'
      })),

    transition('void => *',[
        group([
            query('.middle-txt',[style({display:'none'}),
              animate(500,style({transform:'translateY(100%)'}))]),
              animate(500),
            query('.header-bottom',[
                style({
                  opacity:0,
                }),
                animate(500)
            ])
        ])
    ]),
    transition('* => void',[
      group([
          query('.middle-txt',[style({
              transform:'translateY(40rem)'
            }),animate(500)]),
            animate(500),
          query('.header-bottom',[
              style({
                opacity:0,
              }),
              animate(500)
          ])
      ])
    ])
  ])


  export const fadeContent = trigger('fadeContent',[
    state('void',style({
      opacity: 0,
      transform: 'translateY(-300px)'
    })),
    transition('void <=>*',animate('200ms'))
  ])


export const remove = trigger('remove',[
  state('void',style({
    display:'none'
  })),
  transition('void <=> *',animate('200ms'))
])

export const moveForward = trigger('moveForward', [
  transition('*=>void', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms ease-out'),
  ]),
  transition('void=>*', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms ease-out'),
  ]),
])


export const moveBackward = trigger('moveBackward', [
  transition('*=>void', [
    style({ transform: 'translateX(100%)' }),
    animate('500ms ease-out'),
  ]),
  transition('void=>*', [
    style({ transform: 'translateX(100%)' }),
    animate('500ms ease-out'),
  ]),
])



