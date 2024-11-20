import LandingPage from './pages/LandingPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
