# Build

## Kafka Image

### Build yourself
cd docker-kafka
docker build -t docker-kafka .

### Or just pull from dtr-prod

docker pull dtr-prod.nwie.net/disbrm1/docker-kafka

## Java

Maven project is configured to build a shaded uber-jar

cd java-kafka-consumer
mvn package
java -jar target\java-kafka-consumer-0.0.1-shaded.jar

# Run

## Kafka Image

docker run -it -v $LOCAL\_LOGS\_DIRECTORY:/tmp/kafka -p 9092:9092 docker-kafka


# Creating new topics

You will need to shell in to the running docker image

docker exec -it <image-hash> /bin/bash
cd /usr/local/kakfa
bin/kafka-topics.sh --create --zookeeper localhost:2181 --partitions 1 --replication-factor 1 --topic <my-topic-name>

# Creating Events

bin/kafka-console-producer.sh --broker-list localhost:9092 --topic <my-topic-name>
> Event 1 <Return>
> Event 2 <Return>


# Consuming Events

bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic <my-topic-name> --from-beginning
Event 1
Event 2
...





