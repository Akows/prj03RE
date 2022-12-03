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
                    <ul class="slidemenu">
                        <li>
                            메뉴 이름
                            <ul class="submenu">
                                <Link to='/forum'>
                                    <li>
                                    Forum
                                    </li>
                                </Link> 
                                <Link to='/gameinfo'>
                                    <li>
                                    gameinfo
                                    </li>
                                </Link> 
                                <Link to='/worldinfo'>
                                    <li>
                                    worldinfo
                                    </li>
                                </Link> 
                            </ul>   
                        </li>
                    </ul>
                </div>
                
            </header>
        </>
    );
};

export default Appbar;