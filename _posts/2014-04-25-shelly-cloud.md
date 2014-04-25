---
layout: article
title: Deploying to Shelly Cloud
published: true
category: deployment
---

# Deploying a Rails app to Shelly Cloud

[Shelly Cloud](https://shellycloud.com/) is a PaaS (Platform as a Service) hosting provider, dedicated for Ruby on Rails apps.

This tutorial assumes you have already initialized a git repository – take a look at the [Github's guide](https://help.github.com/articles/set-up-git) if that isn't the case. If you get stuck at any point in this guide, take a look at the [docs](https://shellycloud.com/documentation/quick_start) or use one of our [support channels](https://shellycloud.com/support).

## 1. Prepare your app for deployment

First, make sure your app uses one of Shelly Cloud's [supported databases](https://shellycloud.com/documentation/supported_databases). Second, you are advised to use the `shelly-dependecies` gem to take care of [gem dependencies](https://shellycloud.com/documentation/requirements#shelly-dependencies). Add the following lines to your `Gemfile`:

    group :production do
      gem 'shelly-dependencies'
    end

and then run bundle:

    bundle install

## 2. Sign up for Shelly Cloud

You can sign up for Shelly Cloud using the [sign-up form](https://shellycloud.com/sign_up). Clicking on the link in the confirmation email will complete your sign-up process. You can now install the `shelly` gem:

    $ gem install shelly

and log in:

    $ shelly login
    Email (you@example.com - default): [enter your email]
    Password: [enter your password]
    Login successful
    Uploading your public SSH key

>Tip: By default the `shelly` gem will look for a public SSH key in your `~/.ssh` directory, choosing either a DSA key `id_dsa.pub` or a RSA key `id_rsa.pub`. To specify another key, use the `--key PATH` option. If you're not sure if you have a SSH key already, take a look at this helpful [Github article](https://help.github.com/articles/generating-ssh-keys).

## 3. Create your cloud

All the information needed for your app to work with Shelly Cloud will be stored in the `Cloudfile` that should be placed in your app's main directory. A default `Cloudfile` will be generated when you create new cloud with the `shelly` gem. Run:

    $ shelly add --cloud your-cloud-name

where `your-cloud-name` is the name for your new cloud, and follow the instructions.

>Tip: If you need a specific Ruby version or want to use a different database, check out the [Cloudfile documentation](https://shellycloud.com/documentation/cloudfile) to help you set it up.

Don't forget to commit your new `Cloudfile`!

## 4. Push to production

You put your app in the cloud using `git push` (`shelly` gem takes care of setting the right remotes):

    $ git push shelly master
      ---> Received push to cloud 'your-cloud-name'
      ---> Checking Gemfile
      ---> Creating code package... done.
      ---> Push accepted
      ---> Start your cloud using: `shelly start --cloud your-cloud-name`

You can now start your app.

    $ shelly start --cloud your-cloud-name
    Starting cloud your-cloud-name.
      ---> Launching server app1 started
      ---> Launching server app1 finished
      ---> Configuration on server app1 started
      ---> Configuration on server app1 finished
      ---> Deployment on server app1 started
      ---> Deployment on server app1 finished
    Starting cloud successful

>Tip: If you make changes to your app, you can just commit them and use `git push shelly master` to redeploy.

## 5. Celebrate!

Your app is now live at [http://your-cloud-name.shellyapp.com](http://your-cloud-name.shellyapp.com), ready to share it with the world.
