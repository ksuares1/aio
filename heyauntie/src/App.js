// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import Questions from './Pages/Questions';
import QuestionTwo from './components/QuestionTwo';
import Questionthree from './components/Questionthree';
import Questionfour from './components/Questionfour'
import DiscussionBoard from './Pages/Dashboard';
import MainProfile from './components/Profilemain';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/login" element={<LoginPage/>} />
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/questiontwo" element={<QuestionTwo/>} />
      <Route path="/questionthree" element={<Questionthree/>} />
      <Route path="/questionfour" element={<Questionfour/>} />
      <Route path="/questionfour" element={<Questionfour/>} />
      <Route path="/dashboard" element={<DiscussionBoard/>} />
      <Route path="/profilemain" element={<MainProfile/>} />
    </Routes>
  </Router>
 
  );
}

export default App;
