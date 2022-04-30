FROM python:3.9-alpine3.13
LABEL maintainer="jeff kim"

ENV PYTHONUNBUFFERED 1

COPY ./server/requirements.txt /requirements.txt
COPY ../server /server

WORKDIR /server
EXPOSE 8000

RUN python -m venv /env && \
    /env/bin/pip install --upgrade pip && \  
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps build-base musl-dev postgresql-dev && \
    /env/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps && \
    adduser --disabled-password --no-create-home server

ENV PATH="/env/bin:$PATH"

USER server

