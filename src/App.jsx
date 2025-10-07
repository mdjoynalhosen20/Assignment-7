import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

function App() {

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
            
            <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Tickets</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Login Issues - Can't Access Account</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1001</span>
                                <span className="ml-2 font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded-full">HIGH PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>John Smith</p>
                                <p>1/10/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Payment Failed - Card Declined</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer attempted to pay using VISA ending 1234 but the payment keeps failing despite sufficient balance.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1002</span>
                                <span className="ml-2 font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded-full">HIGH PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>Sarah Johnson</p>
                                <p>1/16/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Unable to Download Invoice</h3>
                            <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">In- Progress</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer cannot download their January invoice from the billing section. The download button is...</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1003</span>
                                <span className="ml-2 font-medium text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">MEDIUM PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>Michael Brown</p>
                                <p>1/17/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Incorrect Billing Address</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer's billing address shows a different city. They updated it but it still displays the old one.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1004</span>
                                <span className="ml-2 font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">LOW PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>Emily Davis</p>
                                <p>1/18/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">App Crash on Launch</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer reports that the mobile app crashes immediately upon opening on Android 13.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1005</span>
                                <span className="ml-2 font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded-full">HIGH PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>David Wilson</p>
                                <p>1/19/2024</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Refund Not Processed</h3>
                            <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">In- Progress</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer was approved for a refund two weeks ago but has not received the amount yet.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1006</span>
                                <span className="ml-2 font-medium text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">MEDIUM PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>Sophia Taylor</p>
                                <p>1/20/2024</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Two-Factor Authentication Issue</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer is not receiving 2FA codes on their registered phone number.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1007</span>
                                <span className="ml-2 font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded-full">HIGH PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>James Anderson</p>
                                <p>1/21/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Unable to Update Profile Picture</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer tries to upload a new profile picture but gets 'Upload Failed' error.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1008</span>
                                <span className="ml-2 font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">LOW PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>Olivia Martinez</p>
                                <p>1/22/2024</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Subscription Auto-Renewal</h3>
                            <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">In- Progress</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer wants to enable auto-renewal for their subscription but the toggle is disabled.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1009</span>
                                <span className="ml-2 font-medium text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">MEDIUM PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>Liam Thomas</p>
                                <p>1/17/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">Missing Order Confirmation Email</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Customer placed an order but didn't receive a confirmation email even though payment succeeded.</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1010</span>
                                <span className="ml-2 font-medium text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">MEDIUM PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>Isabella Garcia</p>
                                <p>1/24/2024</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
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
