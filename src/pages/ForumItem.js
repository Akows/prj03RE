import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ForumDataContext, ForumFunctionContext } from '../App';
import Buttons from '../components/Buttons';
import '../ResetStyle.css';
import './ForumItem.css';

const ForumItem = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState([]);

    const { onRemove } = useContext(ForumFunctionContext);
    const forumdata = useContext(ForumDataContext);

    const handleRemove = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          onRemove(id);
          navigate("/", { replace: true });
        }
      };

    useEffect(() => {
        const titleElement = document.getElementsByTagName("title")[0]; 
        titleElement.innerHTML = `${id}번 글`; // eslint-disable-next-line
      }, []);

    useEffect(() => {
        if (forumdata.length >= 1) {
            const targetData  = forumdata.find(
                (it) => parseInt(it.id) === parseInt(id)
            );

            if (targetData) {
                setData(targetData);
            } 
            else {
                alert('존재하지 않는 글입니다.');
                navigate('/forum', { replace: true });
            }
        } // eslint-disable-next-line
    }, [id, forumdata]);

    return (
        <>
            <div className='item'>

                <div className='itemform'>
                    <div className='itemlist'>

                        <div className='itemtitle'>
                            <div>
                                {data.titleData}
                            </div>
                        </div>


                        <div className='itemtext'>
                            <div>
                                {data.maintextData}
                            </div>
                        </div>

                    </div>

                    <div className='itembutton'>

                        <div className='itembtu'>
                            <Buttons text={'수정하기'} type={'update'} onClick={() => navigate(`/forumedit/${id}`)}/>

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