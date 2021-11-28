import './App.css';
import './stylesheets/second-page.css';
import './stylesheets/first-page.css';
import './stylesheets/sidebar.css';
import React from 'react';
import FirstPage from './firstPage/firstPageContainer';
import SecondPage from './secondPage/secondPageContainer';
import Sidebar from './sidebar/sidebar';
import {Routes, Route} from 'react-router-dom';


const App = () => (
    <div className="App">
          <Sidebar/>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/second-page" element={<SecondPage/>}/>
        </Routes>
    </div>
);

export default App;

