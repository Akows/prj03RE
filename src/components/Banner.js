import '../ResetStyle.css';
import './Banner.css';

const mondInfo = {
    title: '티바트 대륙 북동쪽에 위치한 바람과 자유의 도시.',
    text: '「음유시인과 예술가들 사이에서 자유의 도시, 목가의 성, 북쪽의 명관이라고 불리는 몬드의 중심지.'
};

const liyueInfo = {
    title: '티바트 대륙 동쪽에 위치한 풍요로운 항구 도시.',
    text: '3700년 역사의, 티바트에서 가장 오래된 도시이자 상업적 번영을 이룬 도시.'
};

const inazumaInfo = {
    title: '티바트 대륙 극동에 위치한 봉쇄된 제도.',
    text: '이나즈마의 지배자, 번개의 신 라이덴 쇼군이 거처하는 천수각.'
};
const Banner = ({ type, name }) => {

    const bannerType = ['mond', 'liyue', 'inazuma'].includes(type) ? type : '';

    var active1 = false;
    var active2 = false;
    var active3 = false;

    if (bannerType === 'mond') {
        active1 = true;
    }
    if (bannerType === 'liyue') {
        active2 = true;
    }
    if (bannerType === 'inazuma') {
        active3 = true;
    }

    return (
        <>
            <div className={['banner', `banner_${bannerType}`].join(' ')}>
                <div className='bannertext'> 
                    <div>
                        {name}
                    </div>
                </div>

                <div className='bannertext2'>

                    <div className={['bannerlogo', `bannerlogo_${bannerType}`].join(' ')}/>

                    <div className={['cityinfo', `cityinfo_${active1}`].join(' ')}>
                        <div>
                            {mondInfo.title}
                        </div>
                        <br/><br/><br/>
                        <div>
                            {mondInfo.text}
                        </div>
                    </div>

                    <div className={['cityinfo', `cityinfo_${active2}`].join(' ')}>
                        <div>
                            {liyueInfo.title}
                        </div>
                        <br/><br/><br/>
                        <div>
                            {liyueInfo.text}
                        </div>
                    </div>

                    <div className={['cityinfo', `cityinfo_${active3}`].join(' ')}>
                        <div>
                            {inazumaInfo.title}
                        </div>
                        <br/><br/><br/>
                        <div>
                            {inazumaInfo.text}
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Banner;