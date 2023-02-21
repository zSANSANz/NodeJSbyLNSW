const amqp = require('amqplib/callback_api');

const user = 'admin-dev';
const password = 'adminDev123';
const host = '10.239.9.60:5672/dev-gen2';

const url = `amqp://${user}:${password}@${host}`;

amqp.connect(url, (error0, connection) => {
    // console.log('tes eeror 0', error0);
    if (error0) {
        throw(error0)
    }
        
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw(error1)
        }
        // console.log('tes eeror 1', error1, error0);
        const queue = 'hello'
        const message = 'Hello Rabbit!'
        channel.assertQueue(queue, {durable: false})
        channel.sendToQueue(queue, Buffer.from(message))
        // console.log('tes eeror 1', error1, error0);
        console.log(new Date(), ' - Send Message: ', message);
    })

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 1000)
})