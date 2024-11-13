import { Outlet } from 'react-router-dom'
import Header from './pages/core/components/Header'
import SideBar from './pages/core/components/SideBar'

function App() {

  return (
    <div className='flex w-full h-full'>
      <SideBar />
      <div className='flex-grow bg-gray-100'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
