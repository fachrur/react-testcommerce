import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from '../redux/shop/shop.sagas';
import { userSaga } from '../redux/user/user.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSaga)
  ]);
}