import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumDataContext } from '../App';

import Buttons from '../components/Buttons';
import '../ResetStyle.css';
import './Forum.css';

const Forum = () => {

    const navigate = useNavigate();

    const forumList = useContext(ForumDataContext);

    useEffect(() => {
        const titleElement = document.getElementsByTagName("title")[0];
        titleElement.innerHTML = '자유게시판';
      }, []);

    return (
        <>
            <div className='forum'>

                <div className='forumform'>
                    <div className='forumlist'>

                        <div className='listtitle'>
                            <span>포럼번호</span>
                            <span>제목</span>
                            <span>작성자</span>
                            <span>작성시간</span>
                        </div>

                        {forumList.map((item) => (
                            <div className='listitem' key={item.id}>
                                <span>{item.id}</span>
                                <span>{item.titleData}</span>
                                <span>익명사용자</span>
                                <span>{item.date}</span>
                            </div>
                        ))}

                    </div>

                    <div className='forumbutton'>

                        <div className='pagenation'>

                        </div>
                        <div className='utilbutton'>
                            <Buttons text={'글쓰기'} type={'write'} onClick={() => navigate('/forumedit')}/>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default Forum;