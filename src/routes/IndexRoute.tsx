import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {LoginPage} from "features/user/LoginPage";

export function IndexRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage}/>
                {/*<Route path="/memo" component={Memo} />*/}
                {/*<Route path="/trash" component={Trash} />*/}
                {/* Not Found */}
                <Route component={() => <Redirect to="/"/>}/>
            </Switch>
        </BrowserRouter>
    )
}
