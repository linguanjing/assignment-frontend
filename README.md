# Assignment-frontend

This is a SpringBoot project, to provide the REST API to be consumed by the front-end projects.

springBoot-backend (server) - REST API Provider

- Spring Data JPA
- H2 Database

react-frontend (client) - REST API Consumer

- axios http library
- Component

Start react-frontend:

    npm start

Access URL

     http://localhost:3000/

Client service calls:

    Login:
    GET: http://localhost:8080/api/v1/client/
    POST: http://localhost:8080/api/v1/client/login

    Sign-up

    POST: http://localhost:8080/api/v1/client/signup

    Get List of Recipiants:
    GET: http://localhost:8080/api/v1/client/{senderId}/receivers

Transaction service calls

    For display the list of transaction messages:
    GET: http://localhost:8080/api/v1/transaction

    New Transaction
    POST: http://localhost:8080/api/v1/transactionnew

    p/s. Top-up, sender/receiver set the same person
