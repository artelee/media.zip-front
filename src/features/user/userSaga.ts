import { call, put, takeLatest } from 'redux-saga/effects';
import {userActions} from 'features/user/userSlice';
import {loginUser} from 'features/user/userAPI';

function* handleUserLogin(){
    const {loginSuccess, loginFail} =userActions;
    try {
        const user = yield call(loginUser);
        yield put(loginSuccess(user));
    }catch (e) {
        console.log('e : ', e);
        yield put(loginFail(e))
    }
}

export function* watchLogin() {
    const {login} = userActions;
    yield takeLatest(login, handleUserLogin);
}