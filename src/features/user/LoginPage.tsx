import React, {FormEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReducerType} from 'rootReducer'
import {User, userActions, UserInfo} from 'features/user/userSlice'


export function LoginPage() {
    const users = useSelector((state: ReducerType) => state.userSlice.user);
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const handleChangeName = (e: any) => {
        setName(e.target.value);
    };

    const handleAddUser = (e: FormEvent) => {
        e.preventDefault();
        dispatch(userActions.login());
        setName('');
    };

    return (
        <div>

            <form onSubmit={handleAddUser}>
                <input type='text' value={name} onChange={handleChangeName}/>
                <button type='submit'>Add User</button>
            </form>

            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}

        </div>
    )
}