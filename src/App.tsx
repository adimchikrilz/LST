// src/App.tsx
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <HomePage />
      <Footer />
    </Router>
  )
}

export default App