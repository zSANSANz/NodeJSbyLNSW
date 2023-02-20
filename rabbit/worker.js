const amqp = require('amqplib/callback_api');

const user = 'guest';
const password = 'guest';
const host = 'localhost:5672';

const url = `amqp://${user}:${password}@${host}`;

amqp.connect(url, (error0, connection) => {
    if (error0) throw error0;
    console.log('tes eeror 0', error0);
    connection.createChannel((error1, channel) => {
        console.log('tes eeror 1', error1, error0);
        if (error1) throw error1;
        const queue = 'hello';
        channel.assertQueue(queue, { durable: true });
        channel.consume(queue, (message)=> {
            const second = message.content.toString().split('.').length - 1;
            console.log(new Date(), 'Receive Message: ', message.content.toString());
            setTimeout(() => {
                console.log(new Date(), 'Done Processing Message: ', message.content.toString());
            }, second * 1000);
        }, {noAck: true});
    })
})
        
