import  './app.css'
import { useRoutes } from "react-router-dom"
import routes from "./routes"

import SideBar from './components/Module/SideBar/SideBar'
import Navbar from './components/Module/Navbar/Navbar'

function App() {
  const router = useRoutes(routes)

  return (
    <div className="app">
      <div className="app-sidebar">
          <SideBar/>
      </div>
      <div className="app-routes">
        <Navbar/>
        {router}
      </div>
    </div>
  )
}

export default App