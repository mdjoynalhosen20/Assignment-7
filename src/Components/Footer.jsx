export default function Footer() {
    return (<>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-8">
                
                <div className="col-span-2">
                    <h4 className="text-xl font-bold mb-3">CS — Ticket System</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Our Mission</a></li>
                        <li><a href="#" className="hover:text-white">Contact Sales</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-200">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white">Products & Services</a></li>
                        <li><a href="#" className="hover:text-white">Customer Stories</a></li>
                        <li><a href="#" className="hover:text-white">Download Apps</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-200">Information</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-white">Join Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">&copy; 2025 CS — Ticket System. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                        <span className="font-semibold">Social Links</span>
                    </a>
                </div>
            </div>

            <div className="text-right mt-4 space-y-2">
                <h4 className="font-semibold text-gray-200 mb-2">Social Links</h4>
                <div className="flex justify-end space-x-4">
                    <p className="text-sm text-gray-400">@CS — Ticket System</p>
                    <p className="text-sm text-gray-400">@CS — Ticket System</p>
                </div>
                <p className="text-sm text-gray-400">support@cst.com</p>
            </div>
            
        </div>
    </>)
}