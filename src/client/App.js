import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { HomePage } from './components/homepage/HomePage';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { ServicesPage } from './components/services/ServicesPage';
import { Footer } from './components/Footer';

export const App = () => {
    const [colorScheme, setColorScheme] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setColorScheme('light');
        } else {
            setColorScheme('dark');
        }
    }, [location.pathname]);

    return (
        <>
            {colorScheme === 'light' ? <Banner /> : ''}
            <NavBar colorScheme={colorScheme} />
            <Switch>
                <Route exact path={'/'} component={HomePage} />
                <Route exact path={'/services'} component={ServicesPage} />
            </Switch>
            <Footer />
        </>
    );
};
