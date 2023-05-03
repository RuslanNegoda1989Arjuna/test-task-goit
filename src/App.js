import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './shared/styles/styles.scss'
import HomePage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='tweets' element={<TweetsPage/>}/>
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
