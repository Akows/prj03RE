import '../ResetStyle.css';
import './GameInfo.css';

import { useEffect } from 'react';

const GameInfo = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '게임정보';
    }, []);

    return (
        <>
            <div className='gameinfo'>
                gameinfo
            </div>
        </>
    )
}

export default GameInfo;