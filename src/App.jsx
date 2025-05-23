import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SigninPage from './SigninPage.jsx'
import Dashboard from "./pages/Dashboard";
import SignupPage from "./SignupPage.jsx"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  exact path="/" element={<LandingPage/>} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;