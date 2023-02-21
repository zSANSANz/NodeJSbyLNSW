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
        const queue = 'logs';
        console.log('test 13')
        channel.assertExchange(assertExchange, 'fanout', {duable: false})
        channel.prefetch(1) 
        channel.assertQueue('', {exclusive: true}, (error2, q) => {
            if (error2) throw error2;
            console.log('Waiting for message from queue: ', q.queue);
            channel.bindQueue(q.queue, exchange, '') 
            channel.consume(queue, (message)=> {
                console.log(new Date(), 'Receive Message: ', message.content.toString());
            }, {noAck: true});
        })
    })
})
        
