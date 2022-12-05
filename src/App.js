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

export const ForumDataContext = React.createContext();
export const ForumFunctionContext = React.createContext();

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case "CREATE": {
      newState = [...state, action.data];
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

  const forumId = useRef(0);

  const onCreate = (titleData, maintextData) => {
    dispatch({
      type: "CREATE",
      data: {
        id: forumId.current,
        date: new Date().toLocaleString('ko-kr'),
        titleData,
        maintextData,
      },
    });
    forumId.current += 1;
  };


  return (
    <ForumDataContext.Provider value={data}>
      <ForumFunctionContext.Provider value={{ onCreate }}>

        <BrowserRouter>
        <div className='App'>
          <div className='appbarcomponents'>
            <Appbar/>
          </div>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/forum' element={<Forum />} />
              <Route path='/forumedit' element={<ForumEdit />} />
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
