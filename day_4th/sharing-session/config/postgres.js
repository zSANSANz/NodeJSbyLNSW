const { client } = require('pg')

const db = new client({
    user: 'postgres',
    host: 'localhost',
    password: 'sandi1988',
    database: 'postgres',
    port: 5432

})

db.connect((error) => {
    if(error) {
        throw error
    } else {
        console.log('you are now connected to database')
    }
})