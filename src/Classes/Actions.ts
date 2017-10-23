import { Action } from '../';

export class Actions {
    actions: Array<Action>;

    constructor(actions: string) {
      if(!actions || actions.length <= 0) throw new Error(`Unable to create Actions: invalid empty parameter`);
      this.actions = actions.split('').map((char, index) => {
          switch(char.toLowerCase()) {
              case 'm': return Action.Move;
              case 'r': return Action.Rotate;
              default: throw new Error(`Unable to create Actions: invalid action code "${char}" at location ${index}`);
          }
      })
    }
  }
  