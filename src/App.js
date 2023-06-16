import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Error from './Pages/Error';
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  return (
    <div data-theme="halloween" className="App h-screen ">
     <BrowserRouter>
     <Routes>
                 <Route exact path='/' element={< Home />}></Route>
               
                 <Route exact path='/*' element={< Error />}></Route>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
