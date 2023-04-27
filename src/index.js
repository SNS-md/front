import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Main from './page/Main';
import Write from './page/Write';
import Detail from './page/Detail';
import NotFound from './page/NotFound';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </main>
  </BrowserRouter>
);