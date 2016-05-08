class ActionList {
  constructor(items = []) {
    this.items = items;
  }

  screen(screen) {
    return new ActionList(this.items.filter(action => action.screen === screen));
  }

  type(type) {
    return new ActionList(this.items.filter(action => action.type === type));
  }

  add(item) {
    this.items.push(item);
  }

  sortByDate() {
    return this.items.sort(item => {
      if (item.date > item.date) {
        return 1;
      }

      if (item.date < item.date) {
        return -1;
      }

      return 0;
    });
  }

  latest() {
    const sorted = this.sortByDate();

    return sorted[sorted.length - 1];
  }

  last() {
    return this.items[this.items.length - 1];
  }

  first() {
    return this.items[0];
  }

  toArray() {
    return this.items;
  }
}

export default ActionList;
