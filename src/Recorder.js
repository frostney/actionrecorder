import Action from './Action';
import ActionList from './ActionList';

class Recorder {
  constructor() {
    this.actions = new ActionList();
  }

  clear() {
    this.actions = new ActionList();
  }

  screen(screen) {
    return this.actions.screen(screen);
  }

  type(type) {
    return this.actions.type(type);
  }

  add(type, screen, data) {
    this.actions.add(new Action({ type, screen, data }));
  }

  first() {
    return this.actions.first();
  }

  last() {
    return this.actions.last();
  }

  latest() {
    return this.actions.latest();
  }

  sortByDate() {
    return this.actions.sortByDate();
  }

  toArray() {
    return this.actions;
  }

  serialize() {
    return JSON.stringify(this.toArray());
  }

  static loadFromJSON(json) {
    const recorder = new Recorder();
    recorder.actions = JSON.parse(json);

    return recorder;
  }
}

export default Recorder;
