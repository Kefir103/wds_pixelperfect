import React from 'react';
import BlankImage from '../../../../public/images/Image_Holder.png';

export const PortfolioPage = () => {
    return (
        <div className={'portfolio'}>
            <div className={'portfolio__container'}>
                <div className={'portfolio__info'}>
                    <div className={'content__text-heading'}>Our portfolio</div>
                    <hr />
                    <div className={'content__text-desc'}>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Maecenas euismod tellus nec tellus dictum malesuada. Cras
                        vel condirnenum justo. Nulla ullamcorper velit et ornare vehicula.
                    </div>
                </div>
                <div className={'portfolio__grid'}>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>
                            Pellentesque felis nibh lacinia
                        </div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>Feugiat vestibulum metus</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>
                            Vivamus placerat volutpat magna ut ornare
                        </div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>Phasellus sit amet</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>Donec laoreet mi sit</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>Phasellus suscipit</div>
                    </div>
                    <div className={'portfolio__element'}>
                        <div className={'portfolio__element-image'}>
                            <img src={BlankImage} alt={'Service Icon'} />
                        </div>
                        <div className={'portfolio__element-info'}>Nullam tristique</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
