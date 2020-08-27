import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = (props) => {
    return (
        <nav className={`homepage-nav_${props.colorScheme}`} id={'navbar'}>
            <div className={`homepage-nav__container`}>
                <div className={'homepage-nav__links'}>
                    <NavLink
                        exact
                        to={'/'}
                        className={'homepage-nav__href'}
                        activeStyle={{
                            color: '#2980b9',
                        }}>
                        HOME
                    </NavLink>
                    <NavLink
                        to={'/services'}
                        className={'homepage-nav__href'}
                        activeStyle={{
                            color: '#2980b9',
                        }}>
                        SERVICES
                    </NavLink>
                    <NavLink
                        to={'/portfolio'}
                        className={'homepage-nav__href'}
                        activeStyle={{
                            color: '#2980b9',
                        }}>
                        PORTFOLIO
                    </NavLink>
                </div>
                <b className={`homepage-nav__wds-logo_${props.colorScheme}Scheme`}>WDS</b>
                <div className={'homepage-nav__links'}>
                    <NavLink
                        to={'/team'}
                        className={'homepage-nav__href'}
                        activeStyle={{
                            color: '#2980b9',
                        }}>
                        OUR TEAM
                    </NavLink>
                    <NavLink
                        to={'/blog'}
                        className={'homepage-nav__href'}
                        activeStyle={{
                            color: '#2980b9',
                        }}>
                        OUR BLOG
                    </NavLink>
                    <NavLink
                        to={'/contacts'}
                        className={'homepage-nav__href'}
                        activeStyle={{
                            color: '#2980b9',
                        }}>
                        CONTACT US
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
