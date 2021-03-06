# Opbeans

The Opbeans inventory management system is a demo app created and
maintained by [Opbeat](https://opbeat.com).

It's hosted on [opbeans.com](http://opbeans.com).

[![Build status](https://travis-ci.org/opbeat/opbeans.svg?branch=master)](https://travis-ci.org/opbeat/opbeans)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
<a href="https://opbeat.com" title="Opbeat"><img src="http://opbeat-brand-assets.s3-website-us-east-1.amazonaws.com/svg/logo/logo.svg" align="right" height="25px"></a>

## Technology Stack

This application uses the following technologies:

- [Node.js](https://nodejs.org)
- [Express](http://expressjs.com)
- [PostgreSQL](https://www.postgresql.org)
- [Redis](https://redis.io)
- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](https://github.com/reactjs/redux)
- [Opbeat](https://opbeat.com)

## Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This app can be deployed directly to Heroku by pressing the button above.
You will need to enter the required environment variables to complete the deployment. See below for configuration options.

## Configuration

Setup the following environment variables:

- `NODE_ENV` - The current Node environment (set to `production` to enable Opbeat)
- `PGHOST` - PostgreSQL server host
- `PGPORT` - PostgreSQL server port
- `PGUSER` - PostgreSQL database username
- `PGPASSWORD` - PostgreSQL database password
- `PGDATABASE` - PostgreSQL database name (defaults to `opbeans`)
- `OPBEAT_ORGANIZATION_ID` - Opbeat Organization Id for the server app
- `OPBEAT_APP_ID` - Opbeat App Id for the server app
- `OPBEAT_SECRET_TOKEN` - Opbeat Secret Token for the server app
- `REACT_APP_OPBEAT_APP_ID` - Opbeat App Id for the client app
- `REACT_APP_OPBEAT_ORG_ID` - Opbeat Organization Id for the client app

For a complete list of PostgreSQL environment variables [see the
official
documentation](https://www.postgresql.org/docs/9.5/static/libpq-envars.html).

In development, you can create a `.env` file in the root of the project
containing all your secret environment variables. See [dotenv](https://github.com/motdotla/dotenv) for details. Additionally if you create a `.env` file in the `/client` folder, variables prefixed with `REACT_APP_` will be available in the React app. 

## Bootstrap

Populate the database with tables and basic data:

```
npm run db-setup
```

Generate random orders:

```
node db/generate_orders.js <num>
```

Where `<num>` is the amount of orders to create.

## Start

```
npm start
```

## Demo notes

The Node.js server have a built-in bug that you can trigger by
navigating to the path `/is-it-coffee-time`.

## License

MIT

<br>Made with ♥️ and ☕️ by Opbeat.
