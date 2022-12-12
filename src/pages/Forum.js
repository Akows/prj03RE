import '../ResetStyle.css';
import './Forum.css';

import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumDataContext } from '../App';

import Buttons from '../components/Buttons';
import Pagination from '../components/pagination';
import Search from '../components/Search';

const Forum = () => {

    const navigate = useNavigate();
    const contentRef = useRef();

    const forumList = useContext(ForumDataContext);

    const dataId = 0;

    const [forumData, setforumData] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);

    const [searchType, setSearchType] = useState('종류');
    const [searchInput, setSearchInput] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    const indexLastItem = currentPage * itemPerPage;
    const indexFirstItem = indexLastItem - itemPerPage;
    
    const firstList = forumList.slice(indexFirstItem, indexLastItem)
    const [refresh, setRefresh] = useState(true);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '자유게시판';

        const setList = () => {
            setforumData(forumList);
            setCurrentItems(forumList.slice(indexFirstItem, indexLastItem));
        } 

        setRefresh(false);
        setList(); // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setRefresh(false);
        setCurrentItems(forumData.slice(indexFirstItem, indexLastItem));
    }, [indexFirstItem, indexLastItem, forumData]);

    const handleSearch = () => {
        if (searchInput.length < 1 ) {
            contentRef.current.focus();
            return;
        }

        let newList = [];

        if (searchType === '종류') {
            newList = forumList.filter((item) => item.itemType === searchInput);
        }
        else {
            newList = forumList.filter((item) => item.titleData === searchInput);
        }

        setCurrentItems(newList)
    };

    return (
        <>
            <div className='forum'>
                <div className='forumform'>
                    <div className='forumlist'>
                        {refresh ? 
                            <>
                                {firstList.map((item) => (
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
                            </>
                            : 
                            <>
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
                            </>
                        }
                    </div>

                    <div className='forumbutton'>
                        <div className='pagenation'>
                            <Pagination
                                postsPerPage={itemPerPage}
                                totalPosts={forumList.length}
                                paginate={paginate}
                            />

                        <div className='forumsearch'>
                            <Search
                                setSearchType={setSearchType}
                                setSearchInput={setSearchInput}
                                handleSearch={handleSearch}
                                contentRef={contentRef}
                            />
                        </div>
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