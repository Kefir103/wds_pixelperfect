import React from 'react';
import BlankImage from '../../../../public/images/portfolio_images/Image_Holder.png';

export const PortfolioPage = () => {
    return (
        <div className={'portfolio'}>
            <div className={'portfolio__container'}>
                <div className={'portfolio__info'}>
                    <div className={'portfolio__text-heading'}>Our portfolio</div>
                    <hr />
                    <div className={'portfolio__text-desc'}>
                        Nunc ac lorem vel arcu ultricies volutpat at nec arcu. Ut tempus dignissim
                        est, at iaculis massa blandit commodo. In vitae nunc eget arcu aliquam
                        hendrerit a vel dui. Aliquam a sagittis neque, nec congue eros.
                    </div>
                </div>
                <div className={'portfolio__grid'}>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>
                            Pellentesque felis nibh lacinia
                        </div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>Feugiat vestibulum metus</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>
                            Vivamus placerat volutpat magna ut ornare
                        </div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>Phasellus sit amet</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>Donec laoreet mi sit</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>Phasellus suscipit</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Portfolio Image'} />
                        </div>
                        <div className={'portfolio__element-info'}>Nullam tristique</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
