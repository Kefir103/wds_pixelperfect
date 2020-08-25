import React from 'react';
import { Route, Router } from 'react-router';
import { HomePage } from './homepage/HomePage';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Route exact path={'/'} component={HomePage} />
        </BrowserRouter>
    );
};
