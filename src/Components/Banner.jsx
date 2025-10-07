const Banner = () => {
    return <>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg text-white bg-gradient-to-r from-purple-600 to-[#D148C7] shadow-lg">
                <h2 className="text-lg font-semibold mb-2">In-Progress</h2>
                <p className="text-5xl font-bold">0</p>
            </div>
            
            <div className="p-6 rounded-lg text-white bg-gradient-to-r from-green-600 to-[#3CCF4E] shadow-lg">
                <h2 className="text-lg font-semibold mb-2">Resolved</h2>
                <p className="text-5xl font-bold">0</p>
            </div>
        </div>
    </>
}; 

export default Banner; 