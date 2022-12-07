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
      break;
    }
    case 'UPDATE': {
      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it);
      break;
    }
    case 'DELETE': {

      console.log(state);

      console.log(state[0].id);
      console.log(action.id);

      newState = state.filter((item) => item.id !== action.id);

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
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );

      if (forumList.length >= 1) {
        forumId.current = parseInt(forumList[forumList.length - 1].id) + 1;
        dispatch({ type: 'INIT', data: forumList });
      }
    }
  }, []);

  const forumId = useRef(1);

  const onCreate = (titleData, maintextData) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: forumId.current,
        date: new Date().toLocaleString('ko-kr'),
        titleData,
        maintextData,
      },
    });
    forumId.current += 1;
  };

  const onUpdate = (targetId, titleData, maintextData) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
        date: new Date().toLocaleString('ko-kr'),
        titleData,
        maintextData,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({ 
      type: 'DELETE', 
      id: targetId 
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
              <Route path='/forumitem/:id' element={<ForumItem />} />
              <Route path='/forumedit/:id' element={<ForumEdit />} />
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
