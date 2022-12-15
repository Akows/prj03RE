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

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = '자유게시판';

        const localData = localStorage.getItem('forumdata');
        const forums = JSON.parse(localData);

        if(forums) {
            const setList = () => {
                setforumData(forums);
                setCurrentItems(forums.slice(indexFirstItem, indexLastItem));
            } 
    
            setList();
        } // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (forumData.length !== 0) {
            setCurrentItems(forumData.slice(indexFirstItem, indexLastItem));
        }
    }, [indexFirstItem, indexLastItem, forumData]);

    const handleSearch = () => {
        let newList = [];

        if (searchInput.length < 1 ) {
            contentRef.current.focus();
            setCurrentItems(forumData.slice(indexFirstItem, indexLastItem));
        }
        else {
            if (searchType === '종류') {
                newList = forumList.filter((item) => item.itemType === searchInput);
            }
            else {
                newList = forumList.filter((item) => item.titleData === searchInput);
            }

            setCurrentItems(newList);
        } 
    };

    return (
        <>
            <div className='forum'>
                <div className='forumform'>
                    <div className='forumlist'>
                        {forumData.length !== 0 ?
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
                            :
                            <div className='listempty'>
                                게시판에 글이 없습니다.
                            </div>               
                        }
                    </div>

                    <div className='forumbutton'>
                        <div className='pagenation'>
                            {forumData.length !== 0  ? 
                                <>
                                    <Pagination
                                        postsPerPage={itemPerPage}
                                        totalPosts={forumList.length}
                                        paginate={paginate}
                                    />
                                </>
                                :
                                <div className='listempty2'>
                                    게시판에 글이 없습니다.
                                </div> 
                            }
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