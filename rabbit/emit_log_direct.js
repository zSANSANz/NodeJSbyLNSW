const amqp = require('amqplib/callback_api');

const user = 'admin-dev';
const password = 'adminDev123';
const host = '10.239.9.60:5672/dev-gen2';

const url = `amqp://${user}:${password}@${host}`;

amqp.connect(url, (error0, connection) => {
    if (error0) throw error0;
    console.log('tes eeror 0', error0);
    connection.createChannel((error1, channel) => {
        console.log('tes eeror 1');
        console.log('tes eeror 2');
        if (error1) throw error1;
        const exchange = 'direct_logs';
        const args = process.argv.slice(2);
        const message = args.slice(1).join(' ') || 'Hello Rabbit!';
        const severity = args.length > 0 ? args[0] : 'info';
        console.log('tes eeror 2', error1, error0);
        channel.assertExchange(exchange, 'direct', {durable: false})
        channel.publish(exchange, severity, Buffer.from(message))
        console.log(new Date(), ' - Send Message: ', message);
    })
    
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 100)
})
        
