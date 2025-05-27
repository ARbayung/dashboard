import React from "react";
import TicketRow from "../components/TicketRow";
import useTickets from "../hooks/useTickets";

function Tickets() {
   const tickets = useTickets();


    return (
        <div className="tickets">
            <div>
                <h1>Total tasks: {tickets.length}</h1>
            </div>
            <div>
              <h1>My Submitted Tickets</h1>
              {tickets.length === 0 ? (
                <p>No tickets submitted yet.</p>
              ) : (
                <ul>
                  {tickets.map((ticket, index) => (
                    <TicketRow key={index} ticket={ticket} />
                  ))}
                </ul>
              )}
            </div>
        </div>
    );
}

export default Tickets;