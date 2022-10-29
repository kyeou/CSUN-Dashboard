import React from 'react';
import HomePage from './pages/HomePage'
import PlannerPage from './pages/PlannerPage';
import RatingsPage from './pages/RatingsPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/planner' element={<PlannerPage/>}/>
            <Route path='/ratings' element={<RatingsPage/>}/>
            <Route path='/cs' element={<CS/>}/>
            <Route path='/signIn' element={<SignInPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
