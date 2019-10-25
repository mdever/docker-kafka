FROM ubuntu:latest

RUN apt update
RUN apt -y install default-jdk
RUN apt -y install vim
RUN apt -y install curl

RUN curl -s "https://www.apache.org/dist/kafka/2.1.1/kafka_2.11-2.1.1.tgz" -o kafka_2.11-2.1.1.tgz
RUN tar -xvzf kafka_2.11-2.1.1.tgz
RUN mkdir /usr/local/kafka
RUN mv kafka_2.11-2.1.1/* /usr/local/kafka

COPY start-kafka.sh /usr/local/kafka/bin/
RUN chmod 755 /usr/local/kafka/bin/start-kafka.sh

CMD "/usr/local/kafka/bin/start-kafka.sh"
