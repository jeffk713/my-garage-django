# My Garage

## Contents

---

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
- [How to set up](#how-to-set-up)

---

## General Info

---

MyGarage is a web application built with React/Django/Postgresql/AWS-S3, deployed with AWS-EC2/Docker+Nginx.

With MyGarage, we can manage our vehicles easily. They can see all the information of our vehicles, such as previous services, measurements, a vehicle note, and an upcoming appointment.

---

### Live Demo

---

#### Client side deployed at: http://ec2-34-217-115-89.us-west-2.compute.amazonaws.com/

#### Server side deployed at: http://ec2-54-212-73-178.us-west-2.compute.amazonaws.com/

---

### Features

---

Users can:

- Register/Update a vehicle along with a picture
- Add/Update a service with a note
- Filter out services by year
- Add/Update mesurements with next appointment
- View a summary of registered vehicles

---

## Screenshots

---

![sample1](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample1.png?raw=true)
![sample2](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample2.png?raw=true)
![sample3](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample3.png?raw=true)
![sample4](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample4.png?raw=true)
![sample5](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample5.png?raw=true)
![sample6](https://github.com/jeffk713/my-garage-django/blob/master/sample-images/sample6.png?raw=true)

---

## Tech Stack

---

### Languages: JavaScript, Python

### Frameworks: React.js, Django

### Technologies: AWS, Redux-thunk, Django-rest-framework, Django-test, Tailwind

### Database: Postgresql, AWS-S3

### Deployment: Docker, AWS-EC2,

---

## How To Set Up

---

---

### Client

---

#### Install client dependencies

```bash
# in /client dir
$ npm install
```

#### Run client development server at http://localhost:3000

```bash
# in /client dir
$ npm start
```
