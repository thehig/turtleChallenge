import { GameState, Action, TurtleState, Actions } from "../";

export class TurtleChallenge {
  state: GameState;

  isHalted: Boolean;
  appliedActions: number;

  constructor(initialState: GameState) {
    this.state = initialState;
    this.isHalted = this.state.turtle.state !== TurtleState.InDanger;
    this.appliedActions = 0;
  }

  tick(action: Action): GameState {
    if (this.state.turtle.state !== TurtleState.InDanger) return this.state;

    this.appliedActions++;
    const nextState = this.state.applyAction(action);
    this.state = nextState;

    this.isHalted = this.state.turtle.state !== TurtleState.InDanger;
    return nextState;
  }

  run(actions: Actions) {
    for (var i = 0; i < actions.actions.length; i++) {
      if (this.state.turtle.state !== TurtleState.InDanger) break;
      this.tick(actions.actions[i]);
    }

    this.isHalted = this.state.turtle.state !== TurtleState.InDanger;
    return `Finished in state ${this.state.turtle.state} after ${this
      .appliedActions} actions`;
  }
}
