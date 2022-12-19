import '../ResetStyle.css';
import './GameInfo.css';

import { useEffect, useRef, useState } from 'react';

import Sildeshow from '../components/Sildeshow';

const GameInfo = () => {

    const [remoteOn, setRemoteOn] = useState(false);

    const point1 = useRef();
    const point2 = useRef();
    const point3 = useRef();
    const point4 = useRef();

    const moveTo1 = () => {
        point1.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTo2 = () => {
        point2.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTo3 = () => {
        point3.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTo4 = () => {
        point4.current.scrollIntoView({behavior: 'smooth'});
    };

    const handleScrollCharacter = (event) => {
        if (event.target.documentElement.scrollTop >= 800) {
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
                    <div className='remotebtu1' onClick={moveTo1}/>
                    <div onClick={moveTo2}>
                        트레일러
                    </div>
                    <div onClick={moveTo3}>
                        게임특징
                    </div>
                    <div onClick={moveTo4}>
                        원신
                    </div>
                </div>

                <div className='gamelogo' ref={point1}/>

                <div className='trailerlogo'/>

                <div className='gametrailer' ref={point2}>
                
                    <iframe src="https://www.youtube.com/embed/yytFBFzJLmU" title="원신 | 미호요 《원신》 트레일러 영상 첫 공개" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>

                <div className='slideslogo' ref={point3}/>

                <div className='gameslides'>
                    <div className='slideshow'>
                        <Sildeshow/>
                    </div>
                    <div className='gameslidesimg img1'/>
                    <div className='gameslidesimg img2'/>
                    <div className='gameslidesimg img3'/>
                    <div className='gameslidesimg img4'/>
                    <div className='gameslidesimg img5'/>
                </div>

                <div className='gameintroduce'  ref={point4}>
                    <div className='gameinfo1'/>
                    <div className='gameinfo2'/>
                    <div className='gameinfo3'/>
                    <div className='gameinfo4'/>
                </div>

            </div>
        </>
    )
}

export default GameInfo;