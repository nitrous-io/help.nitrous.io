---
title: Deploying to Nodejitsu
published: true
category: deployment
layout: article
mitem: nodejitsu
---

These instructions will help you deploy your [Node.js](http://nodejs.org/) application to [Nodejitsu](http://www.nodejitsu.com/?ref=nitrous.io).

### Things you should know

* Node.js basic concepts. Your Nitrous box will come preinstalled with Node.js.

### Prerequisites

* A [Nitrous Account](https://www.nitrous.io)
* A [Nodejitsu Account](https://www.nodejitsu.com/signup/?ref=nitrous.io) or sign up below.
* A [Node.js box](https://www.nitrous.io/app#/boxes) on Nitrous
* Any Node.js project. [See an Example here](/azure-sites/)

### Install the Jitsu Command Line Interface (CLI)

The [Jitsu CLI](https://www.nodejitsu.com/documentation/jitsu/) allows you to connect to the Nodejitsu platform right from Nitrous.
Install it by running the following command in the Nitrous console:

    npm -g install jitsu

### Sign up for Nodejitsu (Optional)

If you don't already have a Nodejitsu account, run the following command to signup:

    jitsu signup

### Login to Nodejitsu

Login with following command and enter your nodejitsu username and password:

    jitsu login

### Deploying from Nitrous

To deploy simply issue the following command:

    jitsu deploy

This will prompt you for your project name, the subdomain you wish use, and the project start script.
Once your configuration is set and prjoect files are uploaded to Nodejitsu the command will return 'Nodejitsu ok'

At this point your can browse to **http://your-app-subdomain.nodejitsu.com** to see your app.

Happy coding.
