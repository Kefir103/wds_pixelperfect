import React from 'react';
import { Content_InfoBox } from './Content_InfoBox';
import { Content_Clients } from './Content_Clients';
import { Footer } from '../Footer';

export const HomePage = () => {
    return (
        <div className={'homepage'}>
            <Content_InfoBox />
            <Content_Clients />
            <Footer />
        </div>
    );
};
