FROM ubuntu:latest

RUN apt update
RUN apt -y install default-jdk
RUN apt -y install vim
RUN apt -y install curl

COPY apache-cert.cer /usr/local/share/ca-certificates/apache-cert.crt
COPY apache-second-cert.cer /usr/local/share/ca-certificates/apache-second-cert.crt
COPY apache-root-cert.cer /usr/local/share/ca-certificates/apache-root-cert.crt
RUN update-ca-certificates

RUN curl --tlsv1 -s "https://apache.org/dist/kafka/2.1.1/kafka_2.11-2.1.1.tgz" -o kafka_2.11-2.1.1.tgz
RUN tar -xvzf kafka_2.11-2.1.1.tgz
RUN mkdir /usr/local/kafka
RUN mv kafka_2.11-2.1.1/* /usr/local/kafka

COPY start-kafka.sh /usr/local/kafka/bin/

EXPOSE 9092/tcp

RUN chmod 755 /usr/local/kafka/bin/start-kafka.sh

CMD "/usr/local/kafka/bin/start-kafka.sh"
