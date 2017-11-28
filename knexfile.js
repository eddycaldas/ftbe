require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/ftbe',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

};

// https://ftbe.herokuapp.com/parent
// https://ftbe.herokuapp.com/kid
