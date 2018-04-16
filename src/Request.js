export default class Request {
  constructor(store, options = { method: 'GET' }) {
    this._promise = Promise.resolve();
    this._options = options;
    this._store = store;
  }

  _addPromise(callback) {
    this._promise = this._promise.then(callback);
  }

  get(url, onResolve, onReject) {
    this._addPromise(() => fetch(url, this._options)
      .then((response) => {
        this._store._add(url, response);
        onResolve();

        // возвращаем результат, на тот случай, если эти данные понадобятся в следующем "then"
        return response;
      })
      .catch(onReject));

    return this;
  }

  getResult(callback) {
    this._addPromise(callback);
    return this;
  }

  show() {
    this._addPromise(() => {
      console.log(this._store);
      return this._store;
    });

    return this;
  }
}
