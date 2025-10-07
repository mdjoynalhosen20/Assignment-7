import { use } from "react";
import CustomerTicketCard from "./CustomerTicketCard";

const CoustomerTicket = ({CustomerTicketPromise}) => {
    const data = use(CustomerTicketPromise)
    return (<>
        <div>
            <div className="">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Tickets</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {
                        data?.map((d, i) => <CustomerTicketCard ticket={d} key={i} />)
                    }
                </div>
            </div>
        </div>
    </>)
}; 


export default CoustomerTicket