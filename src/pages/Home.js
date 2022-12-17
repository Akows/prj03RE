import '../ResetStyle.css';
import './Home.css';

import { useEffect, useRef } from 'react';

const Home = () => {

    const topPoint = useRef();

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '원신프로젝트';

        topPoint.current.scrollIntoView({behavior: 'smooth'});
    }, []);

    const moveSony = () => {
        window.open('https://www.playstation.com/ko-kr/games/genshin-impact/');
    }
    const moveAppS = () => {
        window.open('https://apps.apple.com/app/id1517783697');
    }
    const moveGooS = () => {
        window.open('https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact');
    }
    const moveWinS = () => {
        window.open('https://genshin.hoyoverse.com/ko/news/detail/5752');
    }

    return (
        <>
            <div className='home' ref={topPoint}/>

            <div className='homecontents'>

                <div className='homelogo'/>

                <div className='maintext'>
                    <p>《원신》은 게임 개발사 미호요가 개발한 오픈 월드 어드벤처 게임입니다.</p>
                    <p>이 원소의 힘으로 가득 찬 판타지 대륙 「티바트」에는 </p>
                    <p>어떤 이야기들이 모험가들을 기다리고 있을까요? </p>
                    <p>귀여운 페이몬과 함께 이 광활한 대지로 모험을 떠나보세요!</p>
                </div>

                <div className='paimon'/>
                
                <div className='mainfooter'>
                    <span className='footerbtn1' onClick={moveWinS}/>
                    <span className='footerbtn2' onClick={moveGooS}/>
                    <span className='footerbtn3' onClick={moveAppS}/>
                    <span className='footerbtn4' onClick={moveSony}/>
                </div>
            </div>
        </>
    )
}

export default Home;