import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail/Detail';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import OTP from './pages/Register/OTP';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/detail' element={< Detail/>} />
          <Route path='/login' element={< Login/>} />
          <Route path='/register' element={< Register/>} />
          <Route path='/otp' element={< OTP/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;