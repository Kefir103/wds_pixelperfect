import React from 'react';

import FacebookLogo from '../../../public/images/contacts_logos/Facebook_Gray.png';
import GooglePlusLogo from '../../../public/images/contacts_logos/Google+_Gray.png';
import PinterestLogo from '../../../public/images/contacts_logos/Pinterest_Gray.png';
import RSSLogo from '../../../public/images/contacts_logos/RSS_Gray.png';
import TwitterLogo from '../../../public/images/contacts_logos/Twitter_Gray.png';

export const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer__contacts'}>
                <a href={'#'}>
                    <img src={TwitterLogo} />
                </a>
                <a href={'#'}>
                    <img src={FacebookLogo} />
                </a>
                <a href={'#'}>
                    <img src={GooglePlusLogo} />
                </a>
                <a href={'#'}>
                    <img src={PinterestLogo} />
                </a>
                <a href={'#'}>
                    <img src={RSSLogo} />
                </a>
            </div>
            <div className={'footer__credits'}>
                © 2014 WebDesign Studio. All rights reserved.
                <br />
                Designed and developed by pcklab.com
            </div>
        </footer>
    );
};
