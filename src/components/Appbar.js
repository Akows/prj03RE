import '../ResetStyle.css';
import './Appbar.css';

const Appbar = () => {
    return (
        <>
            <header className='appbar'>

                <div className='appbarlogo'>
                    <button>logo</button>
                </div>

                <div className='appbarmenu'>
                    <button>menu1</button>
                    <button>menu2</button>
                    <button>menu3</button>
                </div>

                <div className='appbarmenusmall'>
                    <button>menu</button>
                </div>
                
            </header>
        </>
    );
};

export default Appbar;