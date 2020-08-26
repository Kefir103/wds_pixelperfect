import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { HomePage } from './components/homepage/HomePage';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';

export const App = () => {
    const history = useHistory();
    return (
        <>
            {history.location.pathname === '/' ? <Banner /> : ''}
            <NavBar colorScheme={history.location.pathname === '/' ? 'light' : 'dark'} />
            <Switch>
                <Route exact path={'/'} component={HomePage} />
            </Switch>
        </>
    );
};
