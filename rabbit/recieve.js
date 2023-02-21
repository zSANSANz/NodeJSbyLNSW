const amqp = require('amqplib/callback_api');

const user = 'admin-dev';
const password = 'adminDev123';
const host = '10.239.9.60:5672/dev-gen2';

const url = `amqp://${user}:${password}@${host}`;
console.log(url)
amqp.connect(url, (error0, connection) => {
    if (error0) throw error0;
    console.log('tes eeror 0', error0);
    connection.createChannel((error1, channel) => {
        console.log('tes eeror 1', error1, error0);
        if (error1) throw error1;
        const queue = 'hello';
        channel.assertQueue(queue, { durable: true });
        channel.consume(queue, (message)=> {
            console.log(new Date(), 'Receive Message: ', message.content.toString());
        }, {noAck: true});
    })
})
        
