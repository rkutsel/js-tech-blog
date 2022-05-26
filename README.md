### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[ # Tech Blog Prototype](https://still-mesa-07377.herokuapp.com/)

## Description

A tech blog prototype that can be easily extended with more features. As of now it has basic authentication functionality that allows a user to either `login` or `sign up`. A registered user that's logged in has elevated access to add blog posts and comments. 

The structure of the codebase follows [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller#:~:text=Model%E2%80%93view%E2%80%93controller%20and%20accepted%20from%20the%20user.) design pattern. Additionally it relies on the following frameworks and libraries: `MySQL RDBMS`, [Sequelize](https://sequelize.org/v6/) to decouple from backend and [Express](https://expressjs.com/) that handles HTTP requests, [Handlebars](https://handlebarsjs.com/) to render HTML templates.


## Installation Instructions

> NOTE: Make sure you have `Node.JS ~v16.14.2` and `NPM ~8.11.0` installed. You can quickly check this by running `node -v` for Node.JS and `npm -v` for NPM in your terminal. Additionally it requires `mysql ~8.0.29`

### Install local dependencies

Once the above is confirmed, clone the repo `git clone git@github.com:rkutsel/js-tech-blog.git` and install the dependencies by running `npm i` in your terminal. I recommend you install them locally. A successful installation should look somewhat similar to the one bellow:

```bash
added 224 packages, and audited 371 packages in 1s

74 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Setup .env credentials
Rename `.env.EXAMPLE` to `.env`. Open the `.env` file and change the variables as needed. 


> ./db directory has schema.sql that needs to be imported into your MySQL. Note: this set up is not meant to be run in production. Seeding is also available if you need some initial data to get started quickly. 

### Import DB schema and seed data into MySQL

```bash
# from the root directory run:
mysql -u root -p < db/schema.sql
node seeds/seed.js # NOTE: this is optional and should only be run if you need some initial data. 
```

## Usage 

To get started, form the `root` directory run `node server` or `npm start dev` which should fire up all of the components. Optionally you can run `npm run watch` that would provide you with a better dev experience. At this point you should be able to consume the API. You can use any API client. 
