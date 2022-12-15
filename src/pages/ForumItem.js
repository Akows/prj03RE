import '../ResetStyle.css';
import './ForumItem.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ForumDataContext, ForumFunctionContext } from '../App';

import Buttons from '../components/Buttons';

const ForumItem = () => {

    const navigate = useNavigate();
    const { dataId } = useParams();

    const [data, setData] = useState([]);

    const forumdata = useContext(ForumDataContext);
    const { onDelete } = useContext(ForumFunctionContext);

    const handleRemove = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            onDelete(dataId);
            alert('삭제되었습니다.');
            navigate('/forum', { replace: true });
        }
    };

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0]; 
        titleElement.innerHTML = `${dataId}번 글`; // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (forumdata.length >= 1) {
            const targetData  = forumdata.find(
                (item) => parseInt(item.dataId) === parseInt(dataId)
            );

            if (targetData) {
                setData(targetData);
            } 
            else {
                alert('존재하지 않는 글입니다.');
                navigate('/forum', { replace: true });
            }
        } // eslint-disable-next-line
    }, [dataId, forumdata]);

    return (
        <>
            <div className='item'>

                <div className='itemform'>
                    <div className='itemlist'>

                        <div className='itemtype'>
                            &nbsp;&nbsp;&nbsp;&nbsp;{data.itemType}
                            <button onClick={() => navigate(-1)} className='backbutton'>뒤로가기</button>
                        </div>

                        <div className='itemtitle'>
                            <div>
                                {data.titleData}
                            </div>
                        </div>

                        <div className='itemtext'>
                            <div>
                                {data.textData}
                            </div>
                        </div>

                    </div>

                    <div className='itembutton'>

                        <div className='itembtu'>
                            <Buttons text={'수정하기'} type={'update'} onClick={() => navigate(`/forumedit/${dataId}`)}/>

                            <Buttons text={'삭제하기'} type={'delete'} onClick={handleRemove}/>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

ForumItem.defaultProps = {
    data: [],
};

export default ForumItem;