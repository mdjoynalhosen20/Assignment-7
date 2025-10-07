const CustomerTicketCard = ({ticket}) => {
    const {id, title, description, customer, priority, status, createdAt} = ticket; 
    return (<>
        <div key={id} className="bg-white p-4 rounded-lg ticket-card">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{title}</h3>
                            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{status}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div>
                                <span className="font-semibold text-gray-700">#1001</span>
                                <span className="ml-2 font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded-full">{priority} PRIORITY</span>
                            </div>
                            <div className="text-right">
                                <p>{customer}</p>
                                <p>{createdAt}</p>
                            </div>
                        </div>
                    </div>
    </>)
}; 

export default CustomerTicketCard;