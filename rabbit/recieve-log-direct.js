const amqp = require('amqplib/callback_api');
const { parseArgs } = require('util');

const user = 'admin-dev';
const password = 'adminDev123';
const host = '10.239.9.60:5672/dev-gen2';

const url = `amqp://${user}:${password}@${host}`;

const args = process.argv.slice(2)

if (args.length == 0) {
    console.log("Usage: receive_log_direct.js [info] [warning] [error]")
    process.exit(1);
}

amqp.connect(url, (error0, connection) => {
    if (error0) throw error0;
    console.log('tes eeror 0', error0);
    connection.createChannel((error1, channel) => {
        console.log('tes eeror 1', error1, error0);
        if (error1) throw error1;
        const exchange = 'direct_logs';
        console.log('test 13')
        channel.assertExchange(exchange, 'direct', {durable: false})
        channel.prefetch(1)
        channel.assertQueue('', {exclusive: true}, (error2, q) => {
            if (error2) throw error2;
            console.log('Waiting for message from queue: ', q.queue);
            args.forEach((severity) => {
                channel.bindQueue(q.queue, exchange, severity);
            });
            channel.consume(q.queue, (message)=> {
                console.log(new Date(), ' - Receive Message: ', message.content.toString());
            }, {noAck: true});
        })
    })
})
        
