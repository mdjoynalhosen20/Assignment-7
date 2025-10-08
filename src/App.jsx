import { Suspense, use, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import CoustomerTicket from './Components/CoustomerTicket'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import TaskStatusSection from './Components/TaskStatusSection'

function App() {
  const [ inProgressCard, setInProgressCard ] = useState([]); 
  const [resolved, setResolved] = useState(0); 

  const CustomerTicketPromise = fetch("data.json").then(res => res.json());
  return (
    <>
      <header className='bg-white shadow-md'>
        <NavBar />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <Banner resolved={resolved} inProgressCard={inProgressCard} />
        </div>
      </header>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coustomerr Tickets Section */}
          <div className='lg:col-span-2'>
            <Suspense fallback="Loading...">
              <CoustomerTicket
                CustomerTicketPromise={CustomerTicketPromise}
                inProgressCard={inProgressCard}
                setInProgressCard={setInProgressCard}
              />
            </Suspense>
          </div>

          {/* Task Status section */}

          <div>
           <TaskStatusSection 
           setResolved={setResolved}
           inProgressCard={inProgressCard}
           setInProgressCard={setInProgressCard}
           /> 
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
