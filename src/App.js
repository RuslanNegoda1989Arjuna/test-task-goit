import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './shared/styles/styles.scss'
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="*" element={<HomePage/> } />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
