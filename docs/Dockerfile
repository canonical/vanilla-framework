FROM ubuntu:bionic

# Set up environment
ENV LANG C.UTF-8
WORKDIR /srv

# System dependencies
RUN apt-get update && apt-get install --yes nginx net-tools

# Set git commit ID
ARG COMMIT_ID
RUN test -n "${COMMIT_ID}"

# Copy over files
ADD build .
ADD nginx.conf /etc/nginx/sites-enabled/default
ADD redirects.map /etc/nginx/redirects.map
RUN sed -i "s/~COMMIT_ID~/${COMMIT_ID}/" /etc/nginx/sites-enabled/default
RUN sed -i "s/8104/80/" /etc/nginx/sites-enabled/default

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]

