import { Suspense, use } from 'react'
import './App.css'
import Banner from './Components/Banner'
import CoustomerTicket from './Components/CoustomerTicket'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

function App() {

  const CustomerTicketPromise = fetch("data.json").then(res => res.json());
  return (
    <>
      <header className='bg-white shadow-md'>
        <NavBar />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <Banner />
        </div>
      </header>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coustomerr Tickets Section */}
          <div className='lg:col-span-2'>
            <Suspense fallback="Loading...">
              <CoustomerTicket CustomerTicketPromise={CustomerTicketPromise} />
            </Suspense>
          </div>

          {/* Task Status section */}

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Status</h2>
            <div className="bg-white p-4 rounded-lg ticket-card">
              <p className="text-sm text-gray-600 mb-3">Select a ticket to add to Task Status</p>
              <h3 className="font-semibold text-gray-900 mb-2">Resolved Task</h3>
              <p className="text-sm text-gray-500">No resolved tasks yet.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-gray-800 text-white'>
        <Footer />
      </footer>
    </>
  )
}

export default App
