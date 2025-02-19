# Rally Technical Assessment Project 

## Prerequisites

You will need to have node version 22.5 or later installed on your machine (this will also install npm). You can get it [here](https://nodejs.org/en/download/), or use [nvm](https://github.com/nvm-sh/nvm) to manage multiple versions of node on your machine.

## Build and Run

Install the dependencies:

```bash
npm install
```

Then run the application:

```bash
npm start
```

This will start both the client (front end) and server applications. Any changes will automatically reload your code.

You can also run the client and server separately from each other:

```bash
npm run start:client
npm run start:server
```


## Resetting the Database

If you want to reset the database to its initial state, run the following command:

```bash
npm run reset-db
```

In addition to recreating the tables. this will reload the voter data from the `voterfile.json` file and create the default test user.



