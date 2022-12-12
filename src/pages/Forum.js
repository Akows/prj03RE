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

    const dataId = 0;

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
                            <div className='listitem' key={item.dataId} onClick={() => navigate(`/forumitem/${item.dataId}`)}>
                                <div className='listitemdiv1'>
                                    {item.dataId}
                                </div>
                                <div className='listitemdiv2'>
                                    <div className='listitemdiv3'>
                                        {item.titleData}
                                    </div>
                                    <div className='listitemdiv4'>
                                        <div>{item.itemType}</div>
                                        <div>{item.authorName}</div>
                                        <div>{item.createDate}</div>
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
                            <Buttons text={'글쓰기'} type={'write'} onClick={() => navigate(`/forumedit/${dataId}`)}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forum;