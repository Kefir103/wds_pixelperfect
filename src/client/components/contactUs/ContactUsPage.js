import React from 'react';

import MapImage from '../../../../public/images/contacts/Map.png';

export const ContactUsPage = () => {
    return (
        <div className={'contacts'}>
            <div className={'contacts__container'}>
                <div className={'contacts__info'}>
                    <div className={'contacts__text-heading'}>Contact us</div>
                    <hr />
                    <div className={'contacts__text-desc'}>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas. Maecenas euismod tellus nec tellus dictum malesuada. Cras
                        vel condimentum justo. Nulla ullamcorper velit et ornare vehicula.
                    </div>
                </div>
                <div className={'contacts__grid'}>
                    <div className={'contacts__element'}>
                        <div className={'element__text-heading'}>Feel free to drop us a line</div>
                        <div className={'element__text-desc'}>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas.
                        </div>
                        <form className={'element__search-form'} action={'#'} method={'POST'}>
                            <input
                                className={'search-form__name'}
                                type={'text'}
                                placeholder={'Full name'}
                            />
                            <input
                                className={'search-form__email'}
                                type={'text'}
                                placeholder={'E-mail address'}
                            />
                            <textarea
                                className={'search-form__message'}
                                type={'text'}
                                placeholder={'Message'}
                            />
                            <button className={'search-form__btn-submit'} type={'submit'}>
                                SUBMIT
                            </button>
                        </form>
                    </div>
                    <div className={'contacts__element'}>
                        <div className={'element__text-heading'}>Address</div>
                        <div className={'element__text-desc'}>
                            Sed facilisis non ipsum et interdum. Suspendisse pretium magna sed
                            auctor dictum. Quisque non dignissim metus, non eleifend mi.
                        </div>
                        <div className={'element__address'}>
                            <div className={'address__text'}>An address here, 100/2</div>
                            <div className={'address__text'}>Cityname, 20123</div>
                            <div className={'address__text'}>Country</div>
                            <div className={'address__text'}>P: (0) 123 456 789</div>
                            <div className={'address__text'}>E: info@wdsinc.com</div>
                            <img className={'address__map'} src={MapImage} alt={'Map'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
