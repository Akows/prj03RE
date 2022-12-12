import '../ResetStyle.css';
import './Search.css';

const Search = ({ setSearchType, setSearchInput, handleSearch, contentRef }) => {
    return (
        <>
            <select className='searchtype'onChange={(e) => setSearchType(e.target.value)}>
                <option value='type'>종류</option>
                <option value='title'>제목</option>
            </select>
            <input className='searchinput' onChange={(e) => setSearchInput(e.target.value)} ref={contentRef}/>
            <button className='searchbutton' onClick={handleSearch}>
                검색
            </button>
        </>
    );
};

export default Search;
