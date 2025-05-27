import React from "react";
import resolvedTasks from "../hooks/resolvedTasks";
import inProgressTasks from "../hooks/inProgressTasks";
import useTickets from "../hooks/useTickets";
import useTasks from "../hooks/useTasks";

function TicketSummary() {
    const tickets = useTickets();

    return (
        <div className="tickets-summary">
        <div style={{backgroundColor:"var(--text3)"}}className="tickets-component">
            <p style={{fontSize:"70px", color:"var(--border)"}}>-</p>
            <h1 style={{color:"var(--border)"}}>{tickets.length}</h1>
            
            <div className="f-column">
              <p style={{color:"var(--border)"}}>all open tickets</p>
              <p style={{color:"var(--primary-color)"}}>{inProgressTasks().length} in progress</p>
            </div>
        </div>
        <div  className="tickets-component">
            <p style={{fontSize:"70px"}}>-</p>
            <h1 style={{color:"var(--primary-color)"}}>{resolvedTasks()}</h1>
            
            <div className="f-column">
              <p>completed tickets</p>
              <p style={{color:"var(--text)"}}>{inProgressTasks().length} in progress</p>
            </div>
        </div>
      </div>
    )
}

export default TicketSummary;