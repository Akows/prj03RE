import '../ResetStyle.css';
import './Appbar.css';

import { Link } from 'react-router-dom';

import Buttons from './Buttons';
import React from 'react';

const Appbar = () => {
    return (
        <>
            <header className='appbar'>

            <Link to='/'>
                <div className='appbarlogo'/>
            </Link>

                <div className='appbarmenu'>
                    <Link to='/forum'>
                        <Buttons text={'자유게시판'}/>
                    </Link> 

                    <Link to='/gameinfo'>
                        <Buttons text={'원신'}/>
                    </Link> 

                    <Link to='/worldinfo'>
                        <Buttons text={'티바트'}/>
                    </Link> 
                </div>

                <div className='appbarmenusmall'>
                    <ul className='slidemenu'>
                        <li>
                            <p className='slidemenuicon'>&#9776;</p>
                            <ul className='submenu'>
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