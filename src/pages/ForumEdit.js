import '../ResetStyle.css';
import './ForumEdit.css';

import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ForumDataContext, ForumFunctionContext } from '../App';

import Buttons from '../components/Buttons';

const ForumEdit = () => {

    const { onCreate, onUpdate } = useContext(ForumFunctionContext);
    const forumdata = useContext(ForumDataContext);

    const navigate = useNavigate();
    const contentRef = useRef();

    const { dataId } = useParams();

    const [isEdit, setIsEdit] = useState(false);

    const [itemType, setItemType] = useState('잡담');
    const [titleData, setTitleData] = useState('');
    const [textData, setTextData] = useState('');

    const submitEvent = () => {
      if (titleData.length < 1 || textData.length < 1 ) {
        contentRef.current.focus();
        return;
      }
  
      if (
        window.confirm(
          isEdit ? '글을 수정할까요?' : '글을 작성할까요?'
        )
      ) {
        if (!isEdit) {
          onCreate(itemType, titleData, textData);
          alert('작성되었습니다.');
        }
        else {
          onUpdate(dataId, itemType, titleData, textData);
          alert('수정되었습니다.');
        } 
      }
      navigate('/forum', { replace: true });
    };


    useEffect(() => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = '글 작성/수정';
    }, []);

    useEffect(() => {
      if (dataId > 0) {
        setIsEdit(true);

        const targetData  = forumdata.find(
          (it) => parseInt(it.dataId) === parseInt(dataId)
        );

        if (targetData) {
          setTitleData(targetData.titleData);
          setTextData(targetData.textData);
        } 
        else {
            alert('존재하지 않는 글입니다.');
            navigate('/forum', { replace: true });
        }
      } // eslint-disable-next-line
    }, [dataId, forumdata]);

    return (
        <>
            <div className='edit'>

                <div className='editform'>
                    <div className='editlist'>

                        <select className='edittype' onChange={(e) => setItemType(e.target.value)}>
                          <option value='잡담'>잡담</option>
                          <option value='질문'>질문</option>
                          <option value='정보'>정보</option>
                        </select>

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
                                value={textData}
                                onChange={(e) => setTextData(e.target.value)}
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