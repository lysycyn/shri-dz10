export default class Store {
  constructor() {
    this._state = new Map(); // или = {}
  }

  _add(url, response) {
    this._state.set(url, response);
  }

  show() {
    console.log(this._state);
  }
}
