import { useNavigate } from 'react-router-dom';

import Buttons from '../components/Buttons';
import '../ResetStyle.css';
import './Forum.css';

const Forum = () => {

    const navigate = useNavigate();

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


                        <div className='listitem'>
                            <span>포럼번호</span>
                            <span>제목</span>
                            <span>작성자</span>
                            <span>작성시간</span>
                        </div>

                        <div className='listitem'>
                            <span>포럼번호</span>
                            <span>제목</span>
                            <span>작성자</span>
                            <span>작성시간</span>
                        </div>

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