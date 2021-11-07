import React from 'react';
import './App.css';
import {BoardInput, FindPassword, Boardlist} from 'features/view/index'

function App() {
  return (
    <div className="App">
    <BoardInput/>
    {/* <FindPassword/> */}
    <Boardlist/>
  </div>
  );
}

export default App;
