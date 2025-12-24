import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes/routes'
import { Toaster } from 'react-hot-toast'
import SideBar from './components/sidebar'

function App() {
  

  return (
    <BrowserRouter>
        <SideBar className="fixed left-0 top-0 h-screen w-64"/>
        <div className=" ml-64 bg-background text-text min-h-screen p-4">
          <Rotas/>
          <Toaster/>
        </div>
    </BrowserRouter>
  )
}

export default App
