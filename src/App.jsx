import { Dashboard } from "./pages/Dashboard"
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
