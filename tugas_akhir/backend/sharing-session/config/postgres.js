const { Client } = require('pg')

const db = new Client({
    user: 'userku',
    host: '10.239.8.20',
    password: 'P@ssw0rd',
    database: 'trainingku',
    port: 5432
})

// const db = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     password: 'sandi1988',
//     database: 'postgres',
//     port: 5432
// })

db.connect((error) => {
    if(error) {
        throw error
    } else {
        console.log('you are now connected to database')
    }
})

module.exports = db