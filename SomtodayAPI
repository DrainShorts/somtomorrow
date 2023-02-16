const axios = require('axios');

const school_uuid = 'bcc3aafa-8b57-45cf-b308-f91528591f76';
const username = 'ber115998';
const password = '[Password]';

axios.post('https://somtoday.nl/oauth2/token', {
  grant_type: 'password',
  username: `${school_uuid}\\${username}`,
  password: password,
  scope: 'openid',
  client_id: 'D50E0C06-32D1-4B41-A137-A9A850C892C2'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
