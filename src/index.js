import Store from './Store';
import Request from './Request';

const store = new Store();
const request = new Request(store);

const randUrl1 = 'https://dog.ceo/api/breeds/list/all';
const randUrl2 = 'https://dog.ceo/api/breed/hound/list';
const randUrl3 = 'https://dog.ceo/api/breed/hound/afghan/images/random';
const randUrl4 = 'https://dog.ceo/api/breed/hound/basset/images/random';
const randUrl5 = 'https://dog.ceo/api/breed/hound/blood/images/random';
const randUrl6 = 'https://dog.ceo/api/breed/hound/english/images/random';

const onResolve = () => console.log('Запрос выполнен успешно');
const onReject = () => console.log('Запрос выполнен с ошибкой');

request.get(randUrl1, onResolve, onReject)
  .get(randUrl2, onResolve, onReject)
  .get(randUrl3, onResolve, onReject)
  .get(randUrl4, onResolve, onReject)
  .getResult((result) => { // result - результат из предыдущего запроса
    console.log(result);
  })
  .get(randUrl5, onResolve, onReject)
  .get(randUrl6, onResolve, onReject)
  .show();
