const amqp = require('amqplib');

const amqpConfig = 'amqp://localhost';
const queueName = 'blog-posts-get';

const getBlogPost = (id) => ([
    {
        id: 1,
        title: "Membuat Sesuatu Menggunakan Node.js",
        thumb: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        title: "Membuat Sesuatu Menggunakan Node.js",
        thumb: "https://via.placeholder.com/150",
    }
].find((value => value.id === id)));

(async () => {
    const connection = await amqp.connect(amqpConfig);
    const channel = await connection.createChannel();

    channel.assertQueue(queueName, { durable: false });
    channel.prefetch(1);
    console.log(' [x] Awaiting RPC requests');
    channel.consume(queueName, (msg) => {
        const id = parseInt(msg.content.toString());
        console.log(` [.] getBlogPost(${id})`);
        const result = getBlogPost(id);

        channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(result)),
            { correlationId: msg.properties.correlationId }
        );
        channel.ack(msg);
    });
})();