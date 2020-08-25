import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className={'homepage-nav'}>
            <div className={'homepage-nav-wrapper'}>
                <NavLink
                    to={'/'}
                    className={'homepage-nav-href'}
                    activeStyle={{
                        color: '#2980b9',
                    }}>
                    HOME
                </NavLink>
                <NavLink
                    to={'/services'}
                    className={'homepage-nav-href'}
                    activeStyle={{
                        color: '#2980b9',
                    }}>
                    SERVICES
                </NavLink>
                <NavLink
                    to={'/portfolio'}
                    className={'homepage-nav-href'}
                    activeStyle={{
                        color: '#2980b9',
                    }}>
                    PORTFOLIO
                </NavLink>
            </div>
            <b className={'wds-logo'}>WDS</b>
            <div className={'homepage-nav-wrapper'}>
                <NavLink
                    to={'/team'}
                    className={'homepage-nav-href'}
                    activeStyle={{
                        color: '#2980b9',
                    }}>
                    OUR TEAM
                </NavLink>
                <NavLink
                    to={'/blog'}
                    className={'homepage-nav-href'}
                    activeStyle={{
                        color: '#2980b9',
                    }}>
                    OUR BLOG
                </NavLink>
                <NavLink
                    to={'/contacts'}
                    className={'homepage-nav-href'}
                    activeStyle={{
                        color: '#2980b9',
                    }}>
                    CONTACT US
                </NavLink>
            </div>
        </nav>
    );
};
