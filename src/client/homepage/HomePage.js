import React from 'react';
import { Banner } from './Banner';
import { NavBar } from './NavBar';
import { Content_InfoBox } from './Content_InfoBox';
import {Content_Clients} from "./Content_Clients";
import {Footer} from "./Footer";

export const HomePage = () => {
    return (
        <div className={'homepage'}>
            <Banner />
            <NavBar />
            <Content_InfoBox />
            <Content_Clients />
            <Footer/>
        </div>
    );
};
