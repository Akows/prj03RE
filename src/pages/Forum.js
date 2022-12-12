import '../ResetStyle.css';
import './Forum.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumDataContext } from '../App';

import Buttons from '../components/Buttons';
import Pagination from '../components/pagination';

const Forum = () => {

    const navigate = useNavigate();

    const forumList = useContext(ForumDataContext);

    const id = 0;

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    const indexLastItem = currentPage * itemPerPage;
    const indexFirstItem = indexLastItem - itemPerPage;
    const currentItems = forumList.slice(indexFirstItem, indexLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '자유게시판';
    }, []);

    return (
        <>
            <div className='forum'>
                <div className='forumform'>
                    <div className='forumlist'>
                        {currentItems.map((item) => (
                            <div className='listitem' key={item.id} onClick={() => navigate(`/forumitem/${item.id}`)}>
                                <div className='listitemdiv1'>
                                    {item.id}
                                </div>
                                <div className='listitemdiv2'>
                                    <div className='listitemdiv3'>
                                        {item.titleData}
                                    </div>
                                    <div className='listitemdiv4'>
                                        <div>익명사용자</div>
                                        <div>{item.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='forumbutton'>
                        <div className='pagenation'>
                            <Pagination
                                postsPerPage={itemPerPage}
                                totalPosts={forumList.length}
                                paginate={paginate}
                                />
                        </div>
                        <div className='utilbutton'>
                            <Buttons text={'글쓰기'} type={'write'} onClick={() => navigate(`/forumedit/${id}`)}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forum;