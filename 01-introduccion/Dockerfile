FROM ubuntu:20.04

COPY ./command.sh /usr/local/bin/command.sh
COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/command.sh

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["command.sh"]