import '../ResetStyle.css';
import './Home.css';

import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '원신프로젝트';
    }, []);

    return (
        <>
            <div className='home'>

            </div>

            <div className='text'>
                <p>메인화면 텍스트</p>
                <p>메인화면 텍스트</p>
                <p>메인화면 텍스트</p>
                <p>메인화면 텍스트</p>
                <p>메인화면 텍스트</p>
            </div>
        </>
    )
}

export default Home;