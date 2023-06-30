# test-backend-sharing-vision

Made by Node.js and Express.js

## Installation

Just clone this repo to your local repo

```bash
git clone https://github.com/Fiqri-R-J/test-backend-sharing-vision.git
```

## Usage

Setting your config file in folder config
use MySql as your database

```config.json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

run the server

```js
npm install
npm run dev
```

# Endpoint

- **GET** Post Endpoint Path: `/article`
- **GET** PostId Endpoint Path: `/article/id`
- **POST** Post Endpoint Path:`/article`
- **PATCH** Users Endpoint Path: `/article/{id}`
- **DELETE** Users Endpoint Path: `/article/{id}`
