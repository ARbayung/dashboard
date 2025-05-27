import React from "react";

function TicketRow({ ticket }) {
  return (
    <li className="ticket-row">
              <p><strong>Issue Type:</strong> {ticket.requestType}</p>
              <p><strong>Description:</strong> {ticket.description}</p>
              <p><strong>Date Submitted:</strong> {ticket.date}</p>
              <p><strong>Status:</strong> {ticket.status}</p>
            </li>
  );
}

export default TicketRow;