---
layout: article
title: Setting up PostgreSQL with Autoparts
published: true
category: databases
mitem: postgres
---

### Prerequisites

* Nitrous.IO box with the package manager Autoparts installed. To ensure Autoparts is installed, run the command `parts` within the terminal. Take a look at the [Autoparts guide](/autoparts/) for installation instructions.

### Install PostgreSQL

You can quickly install PostgreSQL using Autoparts. Within the terminal, run the following command to install:

    parts install postgresql

### Connecting via Rails

First, start PostgreSQL with the following command:

    parts start postgresql

To create a Rails app with PostgreSQL configured, run the following command:

    rails new appname -d postgresql

View our [Postgres + Nitrous blog post](http://blog.nitrous.io/2013/02/11/postgres-action-io-3.html) for information on building a Rails app with PostgreSQL.

Here is the configuration necessary to connect to your local PostgreSQL database.

In `config/database.yml`:

    development:
      adapter: postgresql
      encoding: unicode
      database: appname-dev
      pool: 5
      host: localhost
      username: action
      password:

Once these configurations have been made, run the following commands:

    rake db:create:all
    rake db:migrate

You can verify the database has been sucessfully created by running `psql` to open the PostgresQL terminal, followed by `\list` which will display all the existing databases.

>For information on connecting to an external PostgreSQL database, please view our [Heroku Postgres guide](/postgres/).
