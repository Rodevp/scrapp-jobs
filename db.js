const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'linkedin'
})

client.connect((err) => {
    if (err) {
        console.error('error', err)
    }else {
        console.log('conectado')
    }
})

module.exports = {
    client
}