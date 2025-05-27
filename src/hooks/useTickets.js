import { useState, useEffect } from 'react';

function useTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(storedTickets);
  }, []);

  return tickets;
}

export default useTickets;