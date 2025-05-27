import React, { useState} from 'react';

function ITRequest() {
    // State variables for form inputs 
    const [requestType, setRequestType] = useState('');
    const [description, setDescription] = useState('');

    // handles the change of input fields and updates the state
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'requestType') {
            setRequestType(value);
        } else if (name === 'description') {
            setDescription(value);
        }
    }

    //Form submission ticket
    const handleSubmit = (event) => {
        
        // stop refresh
        event.preventDefault();
        
        // Construct ticket and store into variable
        const ticket = {
            requestType: requestType,
            description: description,
            date: new Date().toLocaleDateString(),
            status: 'Open',
        }

        setTimeout(() => {

        // Store ticket into local storage
        const existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        existingTickets.push(ticket);
        localStorage.setItem('tickets', JSON.stringify(existingTickets));

        // Reset form fields
        setRequestType('');
        setDescription('');
        // Alert user of successful submission
        alert('Ticket submitted successfully!');

    }, 1000);

    }

  return (
    <div className='itRequest'>
        <h1>IT Request page</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <p>Select a type</p>
                <select onChange={handleInputChange} name="requestType">
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                    <option value="network">Network</option>
                </select>      
                     
                <textarea placeholder="more detail of issue" value={description} onChange={handleInputChange} name="description"></textarea>
            <button type="submit">Submit Request</button>
            </div>
        </form>
    </div>
  );
}

export default ITRequest;