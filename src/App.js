import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.js';
import Home from './Layout/Home.js';
import Jukebox from './Layout/Jukebox.js';
import Game from './Layout/Game.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/jukebox' element={<Jukebox />} />
        <Route path='/game' element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
