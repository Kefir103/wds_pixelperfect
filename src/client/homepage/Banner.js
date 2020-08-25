import React from 'react';

export const Banner = () => {
    return (
        <div className={'banner'}>
            <div className={'banner-text'}>
                <p className={'banner-text-dots'}>lorem ipsum</p>
                <h1>CREATIVE INTERIOR DESIGN STUDIO</h1>
                <p className={'banner-text-lines'}>
                    <svg className={'svg-lines'}>
                        <line y1={0} y2={0} x1={0} x2={100} strokeWidth={'1px'} stroke={'white'}/>
                        <line y1={4} y2={4} x1={0} x2={100} strokeWidth={'1px'} stroke={'white'}/>
                    </svg>
                    libero leo, interdum sed vehicula id
                    <svg className={'svg-lines'}>
                        <line y1={0} y2={0} x1={0} x2={100} strokeWidth={'1px'} stroke={'white'}/>
                        <line y1={4} y2={4} x1={0} x2={100} strokeWidth={'1px'} stroke={'white'}/>
                    </svg>
                </p>
            </div>
            <div className={'banner-href-wrapper'}>
                <a href={'#'}>
                    <button className={'btn-checkout-work'}>CHECK OUT OUR WORK</button>
                </a>
            </div>
        </div>
    );
};
