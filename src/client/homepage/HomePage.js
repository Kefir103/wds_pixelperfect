import React from 'react';
import { Banner } from './Banner';
import { NavBar } from './NavBar';

export const HomePage = () => {
    return (
        <div className={'homepage'}>
            <Banner />
            <NavBar />
        </div>
    );
};
