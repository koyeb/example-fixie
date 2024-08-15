import express from 'express';
import fetch from 'node-fetch';

const SERVER_PORT = process.env.PORT || 3000;
const TUNNEL_PORT = 8080;

async function getCurrentTimeViaFixieSocks() {
  try {
    const response = await fetch(`http://localhost:${TUNNEL_PORT}/api/json/utc/now`, {
      headers: {
        host: 'worldclockapi.com'
      }
    });
    const data = await response.json();
    return `The current UTC time is ${data.currentDateTime}. Request to worldclockapi.com made through Fixie Socks using a local tunnel on port ${TUNNEL_PORT}.`;
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return 'Received an ECONNREFUSED error. This suggests the Fixie Socks tunnel is not running or is misconfigured.';
    }
    return `Error: ${error.message}`;
  }
}

express()
  .get('/', (req, res) => {
    getCurrentTimeViaFixieSocks().then((response) => {
      res.send(response);
    });
  })
  .listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
