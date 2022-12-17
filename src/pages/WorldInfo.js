import '../ResetStyle.css';
import './WorldInfo.css';

import { useEffect } from 'react';

import Banner from '../components/Banner';

const WorldInfo = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '티바트';
    }, []);

    return (
        <>
            <div className='worldinfo'>
                <Banner type={'mond'} name={'몬드성'}/>
                <Banner type={'liyue'} name={'리월항'}/>
                <Banner type={'inazuma'} name={'이나즈마섬'}/>
            </div>
        </>
    )
}

export default WorldInfo;