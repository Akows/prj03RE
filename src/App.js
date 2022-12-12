import './ResetStyle.css';
import './App.css';

import React, { useEffect, useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Appbar from './components/Appbar';
import Home from './pages/Home';
import Forum from './pages/Forum';
import ForumEdit from './pages/ForumEdit';
import GameInfo from './pages/GameInfo';
import WorldInfo from './pages/WorldInfo';
import ForumItem from './pages/ForumItem';
import { timeData } from './functions/Dates';

export const ForumDataContext = React.createContext();
export const ForumFunctionContext = React.createContext();

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [...state, action.data];
      console.log(newState);
      break;
    }
    case 'UPDATE': {
      newState = state.map((item) =>  parseInt(item.dataId) === parseInt(action.data.dataId) ? { ...action.data } : item);
      console.log(newState);
      break;
    }
    case 'DELETE': {
      newState = state.filter((item) => parseInt(item.dataId) !== parseInt(action.dataId));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('forumdata', JSON.stringify(newState));
  return newState;
};

function App() {

  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem('forumdata');

    if (localData) {
      const forumList = JSON.parse(localData).sort(
        (a, b) => parseInt(a.dataId) - parseInt(b.dataId)
      );

      if (forumList.length >= 1) {
        forumId.current = parseInt(forumList[forumList.length - 1].dataId) + 1;
        dispatch({ type: 'INIT', data: forumList });
      }
    }
  }, []);

  const forumId = useRef(1);

  const onCreate = (itemType, titleData, textData) => {
    dispatch({
      type: 'CREATE',
      data: {
        dataId: forumId.current,
        createDate: timeData(),
        itemType: itemType,
        authorName: '익명사용자',
        titleData: titleData,
        textData: textData,
      },
    });
    forumId.current += 1;
  };

  const onUpdate = (targetId, itemType, titleData, textData) => {
    dispatch({
      type: 'UPDATE',
      data: {
        dataId: targetId,
        createDate: timeData(),
        itemType: itemType,
        authorName: '익명사용자',
        titleData: titleData,
        textData: textData,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({ 
      type: 'DELETE', 
      dataId: targetId 
    });
  };

  return (
    <ForumDataContext.Provider value={data}>
      <ForumFunctionContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <BrowserRouter>
          <div className='App'>
            <div className='appbarcomponents'>
              <Appbar/>
            </div>
            <div className='pages'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/forum' element={<Forum />} />
                <Route path='/forumitem/:dataId' element={<ForumItem />} />
                <Route path='/forumedit/:dataId' element={<ForumEdit />} />
                <Route path='/gameinfo' element={<GameInfo />} />
                <Route path='/worldinfo' element={<WorldInfo />} />
              </Routes>   
            </div>
          </div>
        </BrowserRouter>
      </ForumFunctionContext.Provider>
    </ForumDataContext.Provider>
  );
}

export default App;
