class Action {
  constructor({ screen, type, data }) {
    this.type = type;
    this.date = Date.now();
    this.screen = screen;
    this.data = data;
  }
}

export default Action;
