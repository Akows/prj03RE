import '../ResetStyle.css';
import './GameInfo.css';

import { useEffect, useRef, useState } from 'react';

const GameInfo = () => {

    const [remoteOn, setRemoteOn] = useState(false);

    const ref = useRef();

    const handleScrollCharacter = (event) => {
        if (event.target.documentElement.scrollTop >= 1100) {
            setRemoteOn(true);
        }
        else {
            setRemoteOn(false);
        }
    };

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '게임정보';

        window.addEventListener('scroll', handleScrollCharacter); // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='gameinfo'>

                <div className={['gameinforemote', `remoteOn_${remoteOn}`].join(' ')}>
                    <div>
                        d
                    </div>
                    <div>
                        d
                    </div>
                    <div>
                        d
                    </div>
                    <div>
                        d
                    </div>
                </div>

                <div className='gamelogo'/>

                <div className='trailerlogo'/>

                <div className='gametrailer'>
                
                    <iframe src="https://www.youtube.com/embed/yytFBFzJLmU" title="원신 | 미호요 《원신》 트레일러 영상 첫 공개" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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