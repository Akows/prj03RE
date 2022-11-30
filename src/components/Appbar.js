import '../ResetStyle.css';
import './Appbar.css';

import { Link } from 'react-router-dom';

const Appbar = () => {
    return (
        <>
            <header className='appbar'>

            <Link to='/'>
                <div className='appbarlogo'/>
            </Link>

                <div className='appbarmenu'>

                    <Link to='/forum'>
                        <button>
                        Forum
                        </button>
                    </Link> 

                    <Link to='/gameinfo'>
                        <button>
                        gameinfo
                        </button>
                    </Link> 

                    <Link to='/worldinfo'>
                        <button>
                        worldinfo
                        </button>
                    </Link> 
                </div>

                <div className='appbarmenusmall'>

                </div>
                
            </header>
        </>
    );
};

export default Appbar;