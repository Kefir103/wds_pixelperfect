import React from 'react';

import BlankImage from '../../../../public/images/blog/BlogPost_Image_holder.png';
import SocialMediaShareImage from '../../../../public/images/blog/Social_Media_share.png';

export const BlogPost = () => {
    return (
        <div className={'blog-post'}>
            <div className={'blog-post__container'}>
                <div className={'blog-post__title'}>
                    Pellentesque imperdiet sem nec pellentesque luctus
                </div>
                <hr />
                <p className={'blog-post__text'}>
                    Sed tempor ligula et metus dapibus molestie. Pellentesque molestie nec lorem sit
                    amet gravida. Mauris augue enim, tristique sit amet vestibulum non, dictum eget
                    erat. Integer consectetur a tellus at tincidunt.
                </p>
                <p className={'blog-post__text'}>
                    Donec ultricies sit amet tortor vel commodo. Mauris nisi magna, congue quis
                    faucibus ac, adipiscing auctor turpis. Duis sed lectus placerat, facilisis lacus
                    id, porta lorem. Praesent non consequat urna, id rhoncus est. Nunc urna libero,
                    sagittis at eros eget, tempus vehicula ante. Fusce nunc risus, fermentum
                    pellentesque dolor at, cursus blandit justo. Nunc sodales nec ante eget
                    sollicitudin. Vivamus fringilla malesuada ipsum, in dapibus augue ornare eget.
                </p>
                <div className={'blog-post__subtitle'}>Fermentum pellentesque dolor at</div>
                <img src={BlankImage} alt={'Image'} className={'blog-post__content-image'}/>
                <p className={'blog-post__text'}>
                    Sed tempor ligula et metus dapibus molestie. Pellentesque molestie nec lorem sit
                    amet gravida. Mauris augue enim, tristique sit amet vestibulum non, dictum eget
                    erat. Integer consectetur a tellus at tincidunt.
                </p>
                <p className={'blog-post__text'}>
                    Donec ultricies sit amet tortor vel commodo. Mauris nisi magna, congue quis
                    faucibus ac, adipiscing auctor turpis. Duis sed lectus placerat, facilisis lacus
                    id, porta lorem. Praesent non consequat urna, id rhoncus est. Nunc urna libero,
                    sagittis at eros eget, tempus vehicula ante. Fusce nunc risus, fermentum
                    pellentesque dolor at, cursus blandit justo. Nunc sodales nec ante eget
                    sollicitudin. Vivamus fringilla malesuada ipsum, in dapibus augue ornare eget.
                </p>
                <hr />
                <img src={SocialMediaShareImage} alt={'Social Media Share'} className={'blog-post__social-media'}/>
            </div>
        </div>
    );
};
