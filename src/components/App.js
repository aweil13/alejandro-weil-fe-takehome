import './App.css';
import React from 'react';
import FirstPage from './firstPage/firstPage';
import {Routes, Route} from 'react-router-dom';


const App = () => (
    <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          {/* <Route path="/next" element={<SecondPage/>}/> */}
        </Routes>
    </div>
);

export default App;

