FROM node:11.0.0-alpine

ARG project_dir=/app/
COPY . ${project_dir}ZZZ
WORKDIR ${project_dir}

RUN set -x && \
    apk upgrade --no-cache && \
    npm i

CMD ["npm", "run", "start"]
