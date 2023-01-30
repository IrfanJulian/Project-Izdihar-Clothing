import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail/Detail';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/detail' element={< Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;