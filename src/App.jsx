import { Route, Routes } from "react-router-dom"
import Dashboard from "./page/Dashboard"

function App() {

  return (
    <Routes>
      <Route  path="/colombia_dash" element={<Dashboard/>}>

      </Route>
    </Routes>
  )
}

export default App
