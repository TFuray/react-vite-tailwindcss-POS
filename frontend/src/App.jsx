import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'


function App () {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      {/* <ToastContainer /> */}
    </>
  )
}

export default App
