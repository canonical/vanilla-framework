FROM ubuntu:bionic

# Set up environment
ENV LANG C.UTF-8
WORKDIR /srv

# System dependencies
RUN apt-get update && apt-get install --yes nginx net-tools

# Set git commit ID
ARG REVISION_ID
RUN test -n "${REVISION_ID}"

# Copy over files
ADD _site/ ./
ADD nginx.conf /etc/nginx/sites-enabled/default
ADD redirects.map /etc/nginx/redirects.map
RUN sed -i "s/~REVISION_ID~/${REVISION_ID}/" /etc/nginx/sites-enabled/default

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]

