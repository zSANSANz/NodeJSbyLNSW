const amqp = require('amqplib/callback_api');

const user = 'admin-dev';
const password = 'adminDev123';
const host = '10.239.9.60:5672/dev-gen2';


const url = `amqp://${user}:${password}@${host}`;

amqp.connect(url, (error0, connection) => {
    console.log('tes eeror 0', error0);
        
    connection.createChannel((error1, channel) => {
        console.log('tes eeror 1', error1, error0);
        const queue = 'task_queue'
        const message = process.argv.slice(1).join('') || 'Hello Rabbit!'
        channel.assertQueue(queue, {durable: false})
        channel.sendToQueue(queue, Buffer.from(message))
        console.log(new Date(), ' - Send Message: ', message);
    })

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 0)
})