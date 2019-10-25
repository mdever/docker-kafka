let kafka = require('kafka-node');
let client = new kafka.KafkaClient({
                    kafkaHost: 'localhost:9092'
                 });


let consumer = new kafka.Consumer(client,
                                  [{topic: 'testTopic'}]);

console.log('Beginning to listen to topic `testTopic`');

consumer.on('error', (err) => {
    console.log('There was an error:');
    console.log(err);
});

consumer.on('message', (message) => {
    console.log('New message incoming...');
    console.log(message);
});