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
                        <Buttons text={'자유게시판'} type={'upper'}/>
                    </Link> 

                    <Link to='/gameinfo'>
                        <Buttons text={'원신'} type={'upper'}/>
                    </Link> 

                    <Link to='/worldinfo'>
                        <Buttons text={'티바트'} type={'upper'}/>
                    </Link> 
                </div>

                <div className='appbarmenusmall'>
                    <ul className='slidemenu'>
                        <li>
                            <p className='slidemenuicon'>&#9776;</p>
                            <ul className='submenu'>
                                <Link to='/forum'>
                                    <li>
                                        자유게시판
                                    </li>
                                </Link> 
                                <Link to='/gameinfo'>
                                    <li>
                                        원신
                                    </li>
                                </Link> 
                                <Link to='/worldinfo'>
                                    <li>
                                        티바트
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