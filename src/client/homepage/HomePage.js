import React from 'react';
import { Banner } from './Banner';
import { NavBar } from './NavBar';
import { Content_InfoBox } from './Content_InfoBox';

export const HomePage = () => {
    return (
        <div className={'homepage'}>
            <Banner />
            <NavBar />
            <Content_InfoBox />
        </div>
    );
};
