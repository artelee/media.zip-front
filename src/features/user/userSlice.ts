import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserInfo {
    isLoading: boolean,
    error: any,
    user: User[]
}

export interface User {
    id: number;
    name: string;
    nickname: string;
    isLogin: boolean;
}


const initialState = {
    isLoading: false,
    error: null,
    user: [
        {id: 1, name: 'User1', nickname: '닉네임1', isLogin: true, isLoading: false},
        {id: 2, name: 'User2', nickname: '닉네임2', isLogin: true, isLoading: false},
    ]
};

let tempId = 3;

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const userSlice = createSlice({
    name: 'USERS',
    initialState: initialState as UserInfo, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            action.payload.id = tempId++;
            // 업데이트 되는 State 를 return 해준다.
            return {
                ...state,
                user: [...state.user, action.payload]
            };

        },
        login(state) {
            return {
                ...state,
                isLoading: true
            }
        },
        loginSuccess(state, action: PayloadAction<User>) {
            action.payload.isLogin = true;
            return {
                ...state,
                user: [...state.user, action.payload]
            };
        },
        loginFail(state, action) {
            return {
                ...state,
                error: action.payload
            };
        }
    }
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const USERS = userSlice.name;
export const userActions = userSlice.actions;
export default userSlice.reducer;