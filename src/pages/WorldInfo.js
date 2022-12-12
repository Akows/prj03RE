import '../ResetStyle.css';
import './WorldInfo.css';

import { useEffect } from 'react';

const WorldInfo = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '티바트';
    }, []);

    return (
        <>
            <div className='worldinfo'>
                WorldInfo
            </div>
        </>
    )
}

export default WorldInfo;