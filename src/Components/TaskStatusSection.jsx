const TaskStatusSection = ({ setInProgressCard, inProgressCard, setResolved }) => {

    const handleCompleteButton = id => {
        const remaining = inProgressCard.filter(cd => cd?.id !== id); 
        setInProgressCard(remaining); 
        setResolved(prev => prev + 1)
    }
   
    return (<>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Status</h2>
         <div className="bg-white p-4 rounded-lg ticket-card">
            <p className="text-sm text-gray-600 mb-3">Select a ticket to add to Task Status</p>
            <h3 className="font-semibold text-gray-900 mb-2">Resolved Task</h3>
            {inProgressCard.length > 0 ? inProgressCard?.map((card, i) => {
                const  {id, title} = card; 
                return (
                    <div key={i} className="p-3 md:p-4 lg:p-5 mb-2 md:mb-3 lg:mb-4 flex gap-2 md:gap-3 items-center border-primary border shadow shadow-primary rounded-sm md:rounded-md lg:rounded-lg">
                        <h1 className="text-lg md:text-xl text-black">{title}</h1>
                        <button  onClick={() => handleCompleteButton(id)} className="btn btn-sm btn-primary rounded-full hover:btn-secondary duration-300 cursor-pointer border border-secondary hover:border-primary ">Complete</button>
                    </div>
            )
            }) :
            <p className="text-sm text-gray-500">No resolved tasks yet.</p>
             }
        </div>
        {/* {
            
        } */}
    </>)
};

export default TaskStatusSection