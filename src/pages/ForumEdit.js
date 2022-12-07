import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ForumDataContext, ForumFunctionContext } from '../App';

import Buttons from '../components/Buttons';
import '../ResetStyle.css';
import './ForumEdit.css';

const ForumEdit = () => {

    const navigate = useNavigate();
    const contentRef = useRef();

    const { id } = useParams();

    const [isEdit, setIsEdit] = useState(false);
    const [titleData, setTitleData] = useState('');
    const [maintextData, setMaintextData] = useState('');

    const { onCreate, onEdit } = useContext(ForumFunctionContext);
    const forumdata = useContext(ForumDataContext);

    const submitEvent = () => {
      if (titleData.length < 1 || maintextData.length < 1 ) {
        contentRef.current.focus();
        return;
      }
  
      if (
        window.confirm(
          isEdit ? '글을 수정할까요?' : '글을 작성할까요?'
        )
      ) {
        if (!isEdit) {
          onCreate(titleData, maintextData);
          alert('작성되었습니다.');
        }
        else {
          onEdit(titleData, maintextData);
        } 
      }
      navigate('/forum', { replace: true });
    };


    useEffect(() => {
      const titleElement = document.getElementsByTagName("title")[0];
      titleElement.innerHTML = '글 작성/수정';
    }, []);

    useEffect(() => {
      if (id > 0) {
        setIsEdit(true);

        const targetData  = forumdata.find(
          (it) => parseInt(it.id) === parseInt(id)
        );

        if (targetData) {
          setTitleData(targetData.titleData);
          setMaintextData(targetData.maintextData);
        } 
        else {
            alert('존재하지 않는 글입니다.');
            navigate('/forum', { replace: true });
        }
      } // eslint-disable-next-line
    }, [id, forumdata]);

    return (
        <>
            <div className='edit'>

                <div className='editform'>
                    <div className='editlist'>

                        <div className='edittitle'>
                            <textarea
                                placeholder='제목을 입력해주세요'
                                ref={contentRef}
                                value={titleData}
                                onChange={(e) => setTitleData(e.target.value)}
                                />
                        </div>


                        <div className='edittext'>
                            <textarea
                                placeholder='내용을 입력해주세요'
                                ref={contentRef}
                                value={maintextData}
                                onChange={(e) => setMaintextData(e.target.value)}
                                />

                        </div>

                    </div>

                    <div className='editbutton'>

                        <div className='submitbutton'>
                            <Buttons text={'완료'} type={'write'} onClick={submitEvent}/>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default ForumEdit;