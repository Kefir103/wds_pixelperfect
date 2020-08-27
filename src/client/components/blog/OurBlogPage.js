import React from 'react';

import BlankImage from '../../../../public/images/blog/Blog_Image_Holder.png';

export const OurBlogPage = () => {
    return (
        <div className={'our-blog'}>
            <div className={'our-blog__container'}>
                <div className={'our-blog__info'}>
                    <div className={'our-blog__text-heading'}>Our Blog</div>
                    <hr />
                    <div className={'our-blog__text-desc'}>
                        Sed tempor ligula et metus dapibus molestie. Pellentesque molestie nec lorem
                        sit amet gravida. Mauris augue enim, tristique sit amet vestibulum non,
                        dictum eget erat. Integer consectetur a tellus at tincidunt.
                    </div>
                </div>
                <div className={'our-blog__grid'}>
                    <div className={'our-blog__element'}>
                        <div className={'our-blog__image'}>
                            <img src={BlankImage} alt={'Blog Image'} />
                        </div>
                        <div className={'our-blog__blog-title'}>Pellentesque felis nibh</div>
                        <div className={'our-blog__blog-desc'}>
                            Phasellus sit amet neque molestie nunc tincidunt ultrices. Donec laoreet
                            mi sit amet gravida bibendum. Aliquam erat volutpat. Aliquam arcu est,
                            malesuada a nisi in.
                        </div>
                        <a href={'/blog/post'} className={'our-blog__blog-href'}>
                            Read more
                        </a>
                    </div>
                    <div className={'our-blog__element'}>
                        <div className={'our-blog__image'}>
                            <img src={BlankImage} alt={'Blog Image'} />
                        </div>
                        <div className={'our-blog__blog-title'}>
                            Mauris nisi magna, congue quis faucibus ac
                        </div>
                        <div className={'our-blog__blog-desc'}>
                            Nulla in tincidunt neque, a luctus mi. Donec sollicitudin est vehicula
                            mauris condimentum mattis. Suspendisse in augue ut lorem viverra
                            dignissim. Fusce ultrices, mauris vitae fringilla.
                        </div>
                        <a href={'/blog/post'} className={'our-blog__blog-href'}>
                            Read more
                        </a>
                    </div>
                    <div className={'our-blog__element'}>
                        <div className={'our-blog__image'}>
                            <img src={BlankImage} alt={'Blog Image'} />
                        </div>
                        <div className={'our-blog__blog-title'}>Adipiscing auctor turpis</div>
                        <div className={'our-blog__blog-desc'}>
                            Aenean auctor leo et libero convallis, eget tempor urna rutrum. Aliquam
                            erat volutpat. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.
                        </div>
                        <a href={'/blog/post'} className={'our-blog__blog-href'}>
                            Read more
                        </a>
                    </div>
                    <div className={'our-blog__element'}>
                        <div className={'our-blog__image'}>
                            <img src={BlankImage} alt={'Blog Image'} />
                        </div>
                        <div className={'our-blog__blog-title'}>
                            Duis sed lectus placerat, facilisis lacus id
                        </div>
                        <div className={'our-blog__blog-desc'}>
                            Pellentesque aliquam eros non augue cursus, ut porta leo ornare.
                            Suspendisse odio lectus, commodo ac mauris in, bibendum pretium nisi.
                        </div>
                        <a href={'/blog/post'} className={'our-blog__blog-href'}>
                            Read more
                        </a>
                    </div>
                    <div className={'our-blog__element'}>
                        <div className={'our-blog__image'}>
                            <img src={BlankImage} alt={'Blog Image'} />
                        </div>
                        <div className={'our-blog__blog-title'}>
                            Fermentum pellentesque dolor at
                        </div>
                        <div className={'our-blog__blog-desc'}>
                            Duis eros nisl, tincidunt sed elit ut, feugiat elementum justo. Vivamus
                            ornare id eros vel imperdiet. Sed venenatis dapibus consequat. Curabitur
                            viverra erat id vehicula consectetur.
                        </div>
                        <a href={'/blog/post'} className={'our-blog__blog-href'}>
                            Read more
                        </a>
                    </div>
                    <div className={'our-blog__element'}>
                        <div className={'our-blog__image'}>
                            <img src={BlankImage} alt={'Blog Image'} />
                        </div>
                        <div className={'our-blog__blog-title'}>
                            Nunc sodales nec ante eget sollicitudin
                        </div>
                        <div className={'our-blog__blog-desc'}>
                            Pellentesque imperdiet sem nec pellentesque luctus. Sed nisl elit,
                            tempus sed ultricies vel, laoreet ut magna. In a condimentum nulla.
                            Maecenas sem tellus, blandit a felis at, luctus lobortis erat.
                        </div>
                        <a href={'/blog/post'} className={'our-blog__blog-href'}>
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
