const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

const { scrapeEvents } = require('./src/scraper');
const { getRoute } = require('./src/maps');
const { autoRegister } = require('./src/register');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/find-events', async (req, res) => {
  try {
    const { category, city, date, budget } = req.body;
    const events = await scrapeEvents({ category, city, date, budget });
    res.json({ success: true, events });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

app.post('/get-route', async (req, res) => {
  try {
    const { userLat, userLng, eventAddress } = req.body;
    const route = await getRoute(userLat, userLng, eventAddress);
    res.json({ success: true, route });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { registrationUrl, userDetails } = req.body;
    const result = await autoRegister(registrationUrl, userDetails);
    res.json({ success: true, result });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`EventBot running on http://localhost:${PORT}`);
});