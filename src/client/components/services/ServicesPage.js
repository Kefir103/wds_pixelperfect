import React from 'react';

import BubbleSVG from '../../../../public/images/services_icons/bubble.svg';
import HeadphonesSVG from '../../../../public/images/services_icons/headphones.svg';
import MessageSVG from '../../../../public/images/services_icons/message.svg';
import MusicalNoteSVG from '../../../../public/images/services_icons/musical_note.svg';
import PadlockSVG from '../../../../public/images/services_icons/padlock.svg';
import PencilSVG from '../../../../public/images/services_icons/pencil.svg';
import SunnySVG from '../../../../public/images/services_icons/sunny.svg';
import UserSVG from '../../../../public/images/services_icons/user.svg';

export const ServicesPage = () => {
    return (
        <div className={'services'}>
            <div className={'services__container'}>
                <div className={'services__info'}>
                    <div className={'services__text-heading'}>Our services</div>
                    <hr />
                    <div className={'services__text-desc'}>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Maecenas euismod tellus nec tellus dictum malesuada. Cras
                        vel condirnenum justo. Nulla ullamcorper velit et ornare vehicula.
                    </div>
                </div>
                <div className={'services__grid'}>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={UserSVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element-info'}>
                            <p className={'services__title'}>Pellentesque felis nibh</p>
                            <p className={'services__description'}>
                                Phasellus sit amet neque molestie nunc tincidunt ultrices. Donec
                                laoreet mi sit amet gravida bibendum. Aliquam erat volutpat. Aliquam
                                arcu est, malesuada a nisi in.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={BubbleSVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element_info'}>
                            <p className={'services__title'}>Morbi faucibus mi vel dolor</p>
                            <p className={'services__description'}>
                                Mauris in varius tellus. Vivamus sit amet volutpat arcu. Nullam in
                                congue nunc, eu rutrum justo. Praesent id ultricies lacus. Phasellus
                                fermentum leo malesuada.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={HeadphonesSVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element-info'}>
                            <p className={'services__title'}>Sed faucibus enim fermentum</p>
                            <p className={'services__description'}>
                                Vestibulum vel lectus sapien. Fusce non fringilla lacus, ut congue
                                arcu. Pellentesque habitant morbi tristique senectus et netus et
                                malesuada fames ac turpis egestas.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={PencilSVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element-info'}>
                            <p className={'services__title'}>Nullam tristique, est sed suscipit</p>
                            <p className={'services__description'}>
                                Cras vel condimentum justo. Nulla ullamcorper velit et ornare
                                vehicula. Fusce egestas felis velit, non porttitor sapien hendrerit
                                quis. Proin tempor dui elit, nec faucibus arcu.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={MessageSVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element-info'}>
                            <p className={'services__title'}>Eget fermentum massa nibh</p>
                            <p className={'services__description'}>
                                In eget lacus non mauris rutrum posuere at non est. Duis luctus
                                sagittis ullamcorper. Quisque rhoncus pharetra lobortis. Proin
                                lacinia ligula a risus porttitor aliquam non sit amet risus.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={SunnySVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element-info'}>
                            <p className={'services__title'}>Nam imperdiet nisi mauris</p>
                            <p className={'services__description'}>
                                Maecenas condimentum lorem porttitor nisi suscipit tristique.
                                Vivamus cursus vestibulum mi. Phasellus posuere nulla quis nunc
                                aliquam varius. Integer dictum nisl id mauris.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={MusicalNoteSVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element-info'}>
                            <p className={'services__title'}>Vitae laoreet lorem auctor ac</p>
                            <p className={'services__description'}>
                                Suspendisse laoreet, eros in euismod euismod, nunc turpis lacinia
                                est, eget malesuada sem felis eu dolor. Phasellus imperdiet eros sed
                                fermentum euismod.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                    <div className={'services__element'}>
                        <div className={'services__element-image'}>
                            <img src={PadlockSVG} alt={'Service Icon'} />
                        </div>
                        <div className={'services__element-info'}>
                            <p className={'services__title'}>Proin iaculis, magna in rutrum</p>
                            <p className={'services__description'}>
                                Vivamus non erat eu leo semper vulputate quis vel nibh. Aenean
                                sodales ullamcorper lorem, sed posuere nibh pulvinar id. Phasellus
                                eu velit id odio laoreet adipiscing eu vitae odio.
                            </p>
                            <p className={'services__learn-more'}>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
