const amqp = require('amqplib/callback_api');
const { channel } = require('diagnostics_channel');
const { connect } = require('http2');

const user = 'admin-dev';
const password = 'adminDev123';
const host = '10.239.9.60:5672/dev-gen2';

const url = `amqp://${user}:${password}@${host}`;

amqp.connect(url, (error0, connection) => {
    if (error0) throw error1;
        const queue = 'rpc_queue';
        channel.assertQueue(queue, {durable: false});
        channel.prefetch(1);
        console.log('[RPC Server] Awaiting  RPC Request');
        channel.consume(queue, (message) => {
            const correlationId = message.propertie.correlationId;
            const clientMessage = message.content.toString();
            const callbackQueue = message.properties.replyTo;
            console.log(new Date(), '[RPC Server] Receive message with id',
                correlationId, " message ", clientMessage);
            const response = `this is response from message: ${clientMessage}`
            channel.sendToQueue(callbackQueue, Buffer.from(response),
                {correlationId: correlationId});
            console.log(new Date(), '[RPC Server] Sent Response with id',
                correlationId);
            channel.ack(message);
        })
    })
})