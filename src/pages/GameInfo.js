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
                
                <div className='gametrailer'>
                    <iframe src="https://www.youtube.com/embed/yytFBFzJLmU" title="원신 | 미호요 《원신》 트레일러 영상 첫 공개" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className='gameslides'>
                    
                </div>

                <div className='gameintroduce'>

                </div>

            </div>
        </>
    )
}

export default GameInfo;