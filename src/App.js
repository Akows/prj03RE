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

export const ForumStateContext = React.createContext();
export const ForumFunctionContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    default:
      return state;
  }
};

function App() {

  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem('forumdata');

    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: 'INIT', data: diaryList });
      }
    }
  }, []);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };


  return (
    <ForumStateContext.Provider value={data}>
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
    </ForumStateContext.Provider>
  );
}

export default App;
