import './App.css';
import './second-page.css';
import './first-page.css';
import React from 'react';
import FirstPage from './firstPage/firstPageContainer';
import SecondPage from './secondPage/secondPageContainer';
import {Routes, Route} from 'react-router-dom';


const App = () => (
    <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/second-page" element={<SecondPage/>}/>
        </Routes>
    </div>
);

export default App;

