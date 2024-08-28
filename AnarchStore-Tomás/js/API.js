const express = require('express');
const app = express();

// Define the API endpoints

app.get('/concerts', (req, res) => {
  // Retrieve a list of available concerts
  const concerts = [
    { id: 1, name: 'Concert 1', date: '2024-08-28', venue: 'Venue 1', tickets_available: 100 },
    { id: 2, name: 'Concert 2', date: '2024-08-29', venue: 'Venue 2', tickets_available: 50 },
    { id: 3, name: 'Concert 3', date: '2024-08-30', venue: 'Venue 3', tickets_available: 200 },
  ];
  res.json(concerts);
});

app.get('/concerts/:id', (req, res) => {
  // Retrieve details about a specific concert
  const concertId = req.params.id;
  const concert = concerts.find((concert) => concert.id === concertId);
  if (!concert) {
    res.status(404).json({ error: 'Concert not found' });
  } else {
    res.json(concert);
  }
});

app.post('/concerts/:id/tickets', (req, res) => {
  // Purchase tickets for a concert
  const concertId = req.params.id;
  const ticketQuantity = req.body.ticket_quantity;
  // Simulate a ticket purchasing API call
  const ticket = {
    id: Math.floor(Math.random() * 1000),
    concert_id: concertId,
    purchased_at: new Date(),
  };
  res.json(ticket);
});

app.delete('/concerts/:id/tickets/:ticket_id', (req, res) => {
  // Cancel a ticket purchase
  const concertId = req.params.id;
  const ticketId = req.params.ticket_id;
  // Simulate a ticket cancellation API call
  res.json({ message: 'Ticket cancelled successfully' });
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});