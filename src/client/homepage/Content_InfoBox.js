import React from 'react';

export const Content_InfoBox = () => {
    return (
        <div className={'content info-box'}>
            <div className={'content__text-wrapper'}>
                <p className={'content__text-heading'}>Phasellus sit amet justo egestas</p>
                <hr/>
                <p className={'content__text-desc'}>
                    Nunc ac lorem vel arcu ultricies volutpat at nec arcu. Ut tempus dignissim est,
                    at iaculis massa blandit commodo. In vitae nunc eget arcu aliquam hendrerit a
                    vel dui. Aliquam a sagittis neque, nec congue eros.
                </p>
            </div>
            <div className={'info-box__icons-wrapper'}>
                <a href={'#'} className={'info-box__icon-href'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'>
                        <path
                            d='M341,1011h1v31h31v1H341v-32Zm4,19.99h2V1041h-2v-10.01Zm6-2.99h2v13h-2v-13Zm6-4h2v17h-2v-17Zm6-6h2v23.06h-2V1018Zm6,11h2v12h-2v-12Z'
                            transform='translate(-341 -1011)'
                        />
                    </svg>
                    Ullamcorper
                </a>
                <a href={'#'} className={'info-box__icon-href'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='23.938'
                        height='32'
                        viewBox='0 0 23.938 32'>
                        <path
                            d='M494,1043s-11.969-6.97-11.969-19c0-4.97,1.842-13,11.969-13,10.1,0,11.969,7,11.969,13C505.969,1036.09,494,1043,494,1043Zm0-23.97a3.985,3.985,0,1,1-4,3.99A4,4,0,0,1,494,1019.03Zm0,1.97a2,2,0,1,1-2,2A2,2,0,0,1,494,1021Zm0,19.76s-10.292-6.06-10.292-16.53c0-4.32,1.584-11.3,10.292-11.3,8.683,0,10.291,6.09,10.291,11.3C504.291,1034.75,494,1040.76,494,1040.76Zm0-21.73a3.985,3.985,0,1,1-4,3.99A4,4,0,0,1,494,1019.03Zm0,1.97a2,2,0,1,1-2,2A2,2,0,0,1,494,1021Z'
                            transform='translate(-482.031 -1011)'
                        />
                    </svg>
                    Elementum
                </a>
                <a href={'#'} className={'info-box__icon-href'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 48 48'>
                        <path
                            d='M625,1003l14.982,6v42L625,1046.5V1003Zm0,3,12,4.5v36.9l-12-3.9V1006Zm-18,3.86,18.017-6.86v42.51L607,1051v-41.14Zm2.989,2.14,12.021-4.5v36l-12.021,3.9V1012ZM640,1009l15-6v42l-15,6v-42Zm0,3,12-4.5v36l-12,4.5v-36Z'
                            transform='translate(-607 -1003)'
                        />
                    </svg>
                    Vitae nunc
                </a>
                <a href={'#'} className={'info-box__icon-href'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'>
                        <path
                            d='M755,1023.01a4,4,0,1,1-4,4A4,4,0,0,1,755,1023.01Zm0,1.61a2.39,2.39,0,1,1-2.389,2.39A2.389,2.389,0,0,1,755,1024.62Zm8,1.44V1028h20v-1.94H763Zm0-12V1016h20v-1.94H763Zm-0.063,24V1040H783v-1.94H762.937ZM755,1035.01a4,4,0,1,1-4,4A4,4,0,0,1,755,1035.01Zm0,1.61a2.39,2.39,0,1,1-2.389,2.39A2.389,2.389,0,0,1,755,1036.62Zm0-25.61a4,4,0,1,1-4,4A4,4,0,0,1,755,1011.01Zm0,1.61a2.39,2.39,0,1,1-2.389,2.39A2.389,2.389,0,0,1,755,1012.62Z'
                            transform='translate(-751 -1011)'
                        />
                    </svg>
                    Sollicitudin
                </a>
                <a href={'#'} className={'info-box__icon-href'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32.094'
                        height='32'
                        viewBox='0 0 32.094 32'
                        version='1.1'>
                        <path
                            d='M920,1043H888s0-8.03,6-8.03,7-1.31,7-1.72v-3.22h6v3.22c0,0.33.937,1.72,6.969,1.72C920.093,1034.97,920,1043,920,1043Zm-3-1.97H891s0-4,4-4c5.256,0,8-1.51,8-2.82V1032h2v2.21c0,1.48,2.717,2.82,8,2.82C917,1037.03,917,1041.03,917,1041.03ZM904,1011c4.418,0,8,4.7,8,10.5s-3.582,10.5-8,10.5-8-4.7-8-10.5S899.582,1011,904,1011Zm-0.016,2.03c3.3,0,5.985,3.81,5.985,8.5s-2.68,8.5-5.985,8.5-5.984-3.8-5.984-8.5S900.679,1013.03,903.984,1013.03Z'
                            transform='translate(-888 -1011)'
                        />
                    </svg>
                    Vestibulum non
                </a>
            </div>
        </div>
    );
};
