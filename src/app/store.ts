import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import createSagaMiddleware  from 'redux-saga';
import reducer from "../rootReducer";
import {watchLogin} from "../features/user/userSaga";
import { all } from 'redux-saga/effects';
import {DEBUG} from "../Constants";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
    yield all([
        watchLogin(),
    ])

}

const createStore  = ()=> {
    const store = configureStore({
        reducer: reducer,
        middleware: [sagaMiddleware],
        devTools: DEBUG,
    });
    sagaMiddleware.run(rootSaga);

    return store;
};
export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;


