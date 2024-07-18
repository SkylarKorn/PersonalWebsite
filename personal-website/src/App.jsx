import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './pages/NavigationBar.jsx'
import Projects from './pages/Projects.jsx'

const App = () => {
  return (
    <>
      <div>
        <Router>
          <div> 
            <NavigationBar />
          </div>

          <Routes>
            <Route 
              path='/projects'
              element={<Projects />}
            />
          </Routes>
        </Router>
      </div>
    </> 
  )
}

export default App;