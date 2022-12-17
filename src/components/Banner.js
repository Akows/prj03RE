import '../ResetStyle.css';
import './Banner.css';


const Banner = ({ type, name }) => {

    const bannerType = ['mond', 'liyue', 'inazuma'].includes(type) ? type : '';

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

                    <div className='cityinfo'>
                        {name}
                    </div>
                </div>



            </div>


        </>
    )
}

export default Banner;