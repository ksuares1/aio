// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Questions from './Pages/Questions';
import QuestionTwo from './components/QuestionTwo';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/login" element={<Login/>} />
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/questiontwo" element={<QuestionTwo/>} />
    </Routes>
  </Router>
 
  );
}

export default App;
