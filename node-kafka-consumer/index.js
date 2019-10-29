let kafka = require('kafka-node');

try {
    let client = new kafka.KafkaClient({
        kafkaHost: 'localhost:92'
                     });

    let consumer = new kafka.Consumer(client,
                                  [{topic: 'TestTopic', partition: 0}]);

    console.log('Attempting to listen to topic `TestTopic`');

    consumer.on('error', (err) => {
        console.log('There was an error:');
        console.log(err);
    });

    consumer.on('message', (message) => {
        console.log('New message incoming...');
        console.log(message);
    });
} catch (e) {
    console.log('Error...');
    console.log(e);
}
