const express = require('express');
const amqp = require('amqplib');

const amqpConfig = 'amqp://localhost';
const targetQueueName = 'blog-posts-get';

const app = express();
const port = 3000;

let connection, channel, callbackQueue;
(async () => {
    connection = await amqp.connect(amqpConfig);
    channel = await connection.createChannel();
})();

const generateUuid = () => (Math.random().toString() +
    Math.random().toString() +
    Math.random().toString());

app.get('/blog/:id', async (req, res) => {
    callbackQueue = await channel.assertQueue('', { exclusive: true });

    const correlationId = generateUuid();
    const { id } = req.params;

    console.log(` [x] Requesting ${targetQueueName}: ${id}`);

    const callbackQueueName = callbackQueue.queue;
    const consume = await channel.consume(callbackQueueName, (msg) => {
        
        if (msg.properties.correlationId === correlationId) {
            console.log(' [.] Got %s', msg.content.toString());
            
            res.json(JSON.parse(msg.content.toString()));
            
            channel.cancel(consume.consumerTag);
            channel.deleteQueue(callbackQueueName);
        }
    }, { noAck: true });

    channel.sendToQueue(targetQueueName, Buffer.from(`${id}`),
        {
            correlationId: correlationId,
            replyTo: callbackQueueName
        }
    );

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});