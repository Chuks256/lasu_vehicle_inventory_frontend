import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SigninPage from './SigninPage.jsx'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  exact path="/" element={<LandingPage/>} />
        <Route path="/sign-in" element={<SigninPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App;