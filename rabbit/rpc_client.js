const amqp = require('amqplib/callback_api');
const { channel } = require('diagnostics_channel');
const { connect } = require('http2');

const user = 'admin-dev';
const password = 'adminDev123';
const host = '10.239.9.60:5672/dev-gen2';

const url = `amqp://${user}:${password}@${host}`;

generateRandom = () => {
    return (Math.floor(Math.random * 100) + 1).toString() + '-'
        (Math.floor(Math.random * 100) + 1).toString() + '-'
        (Math.floor(Math.random * 100) + 1).toString();
}

const clientMessage = proccess.argv.slice(2);

amqp.connect(url, (error0, connection) => {
    if (error0) throw error0;
    connection.createChannel((error1, channel) => {
        if (error1) throw error1;
        channel.assertQueue('', {exclusive: true}, (error2, q) => {
            if (error2) throw error2;
            const correlationId = generateRandom();
            channel.consume(q.queue, (serverMessage) => {
                if (serverMessage.properties.correlationId == correlationId) {
                    console.log(new Date(), '[RPC Client] recieve response from',
                        serverMessage.content.toString())
                }
                setTimeout(() => {
                    connection.close();
                    process.exit(0);
                }, 500);
            })
            channel.sendToQueue('rpc_queue', clientMessage,
                {correlationId: correlationId, replyTo: q.queue});
        })
    })
})