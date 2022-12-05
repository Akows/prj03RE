import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumFunctionContext } from '../App';

import Buttons from '../components/Buttons';
import '../ResetStyle.css';
import './ForumEdit.css';

const ForumEdit = () => {

    const isEdit = false;

    const [titleData, setTitleData] = useState('');
    const [maintextData, setMaintextData] = useState('');

    const navigate = useNavigate();
    const contentRef = useRef();
    const { onCreate } = useContext(ForumFunctionContext);

    const submitEvent = () => {
        if (titleData.length < 1 || maintextData.length < 1 ) {
          contentRef.current.focus();
          return;
        }
    
        if (
          window.confirm(
            isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
          )
        ) {
          if (!isEdit) {
            onCreate(titleData, maintextData);
          } 
        }
    
        navigate("/", { replace: true });
      };

    return (
        <>
            <div className='edit'>

                <div className='editform'>
                    <div className='editlist'>

                        <div className='listtitle'>
                            <span>제목</span>
                            <textarea
                                placeholder='제목을 입력해주세요'
                                ref={contentRef}
                                value={titleData}
                                onChange={(e) => setTitleData(e.target.value)}
                                />
                        </div>


                        <div className='listitem'>
                            <span>내용</span>
                            <textarea
                                placeholder='내용을 입력해주세요'
                                ref={contentRef}
                                value={maintextData}
                                onChange={(e) => setMaintextData(e.target.value)}
                                />

                        </div>

                    </div>

                    <div className='editbutton'>

                        <div className='pagenation'>

                        </div>
                        <div className='utilbutton'>
                            <Buttons text={'완료'} type={'write'} onClick={submitEvent}/>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default ForumEdit;