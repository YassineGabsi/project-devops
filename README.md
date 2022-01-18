# Devops Project
### About the application
This application is a microservice responsible for managing stores in a big microservice application. It handles the creating, deleting, or modifying a store.
This Application is using NestJS as a NodeJS framework.

### Features
We focused on preparing a proper CI/CD pipeline for the application. We tried to cover these points:

- Create Unit Tests for the api.
- Create a CI/CD pipeline using CircleCi.
- Dockerize the application and upload in to Docker Hub
- Create unit tests and end to end tests.
- Deploy using Kubernetes and Helm.

#### How to run

```sh
$ npm i
```
```sh
$ npm run start
```

#### How to Test
Run unit test
```sh
$ npm run test
```
Run unit end-to-end tests
```sh
$ npm run test-e2e
```
Format the code with prettier
```sh
$ npm run format
```
Analyse code with eslint
```sh
$ npm run lint
```
## Endpoints of the application

| Methods | Endpoints | Description |
| ------- | ------------- | ----------- |
| GET | "/" | Get Filtered stores | 
| GET | "/:id" | Get one store | 
| GET | "/url/:url" | Get store by URL |
| GET | "/all/urls" | Get all stores URLs |
| GET | "/deleted/all" | Get all deleted stores |
| POST | "/" | Add one store |
| PATCH | "/:id" | Edit one store |
| DELETE | "/delete" | Delete Filtered stores |
| DELETE | "/delete/:id" | Delete one store |
| GET | "/restore/:id" | Restore one deleted store |
