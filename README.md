# My Garage

## Contents

- [General Info](#general-info)
  - [Live Demo](#live-demo)
    - Client side
    - Server side
  - [Features](#features)
    - Users can...
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
  - Languages
  - Frameworks
  - Technologies
  - Database
  - Deployment
  - Testing
- [How To Set Up](#how-to-set-up)
  - [Client Setup](#client-set-up)
  - [Server Setup](#server-set-up)

## General Info

MyGarage is a web application built with React/Django/Postgresql/AWS-S3, deployed with AWS-EC2/Docker+Nginx.

With MyGarage, we can manage our vehicles easily. They can see all the information of our vehicles, such as previous services, measurements, a vehicle note, and an upcoming appointment.

### Live Demo

#### Client side deployed on: http://ec2-34-217-115-89.us-west-2.compute.amazonaws.com/

#### Server side deployed on: http://ec2-54-212-73-178.us-west-2.compute.amazonaws.com/

### Features

Users can:

- Register/Update a vehicle along with a picture
- Add/Update a service with a note
- Filter out services by year
- Add/Update mesurements with next appointment
- View a summary of registered vehicles

## Screenshots

![sample1](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample1.png?raw=true)
![sample2](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample2.png?raw=true)
![sample3](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample3.png?raw=true)
![sample4](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample4.png?raw=true)
![sample5](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample5.png?raw=true)
![sample6](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample6.png?raw=true)

## Tech Stack

### Languages: JavaScript, Python

### Frameworks: React.js, Django

### Technologies: AWS, Redux-thunk, Django-rest-framework, Django-test, Tailwind

### Database: Postgresql, AWS-S3

### Deployment: Docker, AWS-EC2,

### Testing: Django TestCase

## How To Set Up

### Client Setup

#### Install client dependencies

```bash
# in /client dir

$ cd client
$ npm install
```

#### Run react development server on http://localhost:3000

```bash
# still in /client dir

$ npm start
```

### Server Setup

#### Create and activate virtual environment

```bash
# in root dir

$ python3 -m venv env # create virtual env
$ source env/bin/activate # activate virutal env
```

#### Install server dependencies

```bash
# in /server dir with venv activated

$ pip3 install -r requiremets.txt
```

#### Create .env and assign env variables

```bash
# in /server dir

$ cp .env.sample .env # copy contents of .env.sample into .env
$ nano .env # complete env variables or skip this if text editor is used.
```

#### Create a new Postgresql database

```bash
$ psql postgres # connect to postgres
$ CREATE DATABASE <YOUR_DATABASE_NAME>; # ensure to include semi-colon
$ \l # confirm the created database
$ \q # disconnect from postgres
```

#### Migrate database

```bash
# in /server dir

$ python3 manage.py makemigrations # create migration
$ python3 manage.py migrate # migrate database
```

#### Run django server on http://localhost:8000

```bash
# in /server dir

$ python3 manage.py runserver 0.0.0.0:8000
```

#### Create superuser (optional)

```bash
# in /server dir

$ python3 manage.py createsuperuser
```

#### Test models with django testcase (optional)

```bash
# in /server dir

$ python3 manage.py test
```
