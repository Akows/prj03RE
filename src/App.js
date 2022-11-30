import './App.css';
import './ResetStyle.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Appbar from './components/Appbar';
import Home from './pages/Home';
import Forum from './pages/Forum';
import GameInfo from './pages/GameInfo';
import WorldInfo from './pages/WorldInfo';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='appbarcomponents'>
          <Appbar/>
        </div>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/gameinfo' element={<GameInfo />} />
            <Route path='/worldinfo' element={<WorldInfo />} />
          </Routes>   
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
