import '../ResetStyle.css';
import './Home.css';

import video from '../styles/background.mp4';

const Home = () => {
    return (
        <>
            <div className='home'>

                <div className='background'>
                    <video muted autoPlay loop>
                        <source src={video} type='video/mp4'/>
                    </video>
                </div>

                <div className='text'>
                    <p>home</p>
                </div>
                
            </div>
        </>
    )
}

export default Home;