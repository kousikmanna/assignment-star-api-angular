
### installation

Clone the repo:

```bash
$ git clone https://github.com/kousikmanna/assignment-star-api-angular.git
$ cd assignment-star-api-angular
```

Install dependencies:



```bash

$ npm install

```



Install webpack globally
```bash

$ npm install -g webpack

```

### development

Run server with:

```bash

$ npm start

```

It runs express server on localhost on port 3000 and webpack-dev-server on port 3001 with proxing requests from the first one to the second one.

Application has two separate directory `frontend` and `backend`. The entry point for frontend is `frontend/app.es6.js` file and for backend it is `backend/server.js`.
