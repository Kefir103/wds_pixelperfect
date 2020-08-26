import React from 'react';
import LogoBeautifulSpiral from '../../../../public/images/logos/Logo_BeautifulSpiral.png';
import LogoBowTie from '../../../../public/images/logos/Logo_BowTie.png';
import LogoCircleMe from '../../../../public/images/logos/Logo_CircleMe.png';
import LogoCrossingLines from '../../../../public/images/logos/Logo_CrossingLines.png';
import LogoMountainsSolution from '../../../../public/images/logos/Logo_MountainsSolution.png';

export const Content_Clients = () => {
    return (
        <div className={'content__clients'}>
            <div className={'content__text-wrapper_marginTop70'}>
                <div className={'content__text-heading'}>Our clients love us</div>
                <hr />
                <div className={'content__text-desc'}>
                    Duis posuere sollicitudin felis, sit amet tempus orci laculis eu. Donec quis
                    laoreet dolor. Nam sed mi nisl. Duis ultricles lacus nec auctor rhoncus.
                    Praesent quis tincidunt orci.
                </div>
            </div>
            <div className={'clients__logos-wrapper'}>
                <button className={'clients__arrow'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='22.94'
                        viewBox='0 0 14 22.94'>
                        <path
                            d='M161.394,1494.95L150,1483.47l11.4-11.47,2.607,2.59-8.825,8.88,8.825,8.89Z'
                            transform='translate(-150 -1472)'
                        />
                    </svg>
                </button>
                <a href={'#'}>
                    <img src={LogoMountainsSolution} alt={'Mountains Solution Logo'} />
                </a>
                <a href={'#'}>
                    <img src={LogoBowTie} alt={'Bow Tie Logo'} />
                </a>
                <a href={'#'}>
                    <img src={LogoBeautifulSpiral} alt={'Beautiful Spiral Logo'} />
                </a>
                <a href={'#'}>
                    <img src={LogoCircleMe} alt={'Circle Me Logo'} />
                </a>
                <a href={'#'}>
                    <img src={LogoCrossingLines} alt={'Crossing Lines Logo'} />
                </a>
                <button className={'clients__arrow'}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='22.94'
                        viewBox='0 0 14 22.94'>
                        <path
                            d='M1097.61,1494.95l11.39-11.48L1097.61,1472l-2.61,2.59,8.82,8.88-8.82,8.89Z'
                            transform='translate(-1095 -1472)'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
