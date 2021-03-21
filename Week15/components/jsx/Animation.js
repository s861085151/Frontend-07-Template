const TICK = Symbol('tick');
const TICK_HANDLER = Symbol('tick-handler');

export class Timeline {
  constructor() {
    this.state = "inited";
    this[TICK] = () => {
      console.log('tick')
      requestAnimationFrame(this[TICK])
    }
  }

  start() {
    this[TICK]()
  }

  // set rate() {}
  // get rate() {}

  pause() {

  }

  resume() {

  }

  reset() {

  }

}

export class Animation {
  constructor() {

  }
}