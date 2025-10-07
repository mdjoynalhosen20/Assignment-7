const NavBar = () => {
    return (<>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <span className="text-xl font-bold text-gray-800">CS — Ticket System</span>
                </div>
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Changelog</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Download</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                    <button className="px-3 py-1 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition duration-150 ease-in-out">
                        + New Ticket
                    </button>
                </nav>
            </div>
        </div>
    </>)
}; 

export default NavBar