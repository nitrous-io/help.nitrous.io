---
layout: article
title: Redis Cloud
published: true
categories: [databases]
---

[Redis Cloud](http://redis-cloud.com/) is a fully-automated cloud service for hosting your Redis dataset.

To get started, sign up with [Redis Cloud](http://redis-cloud.com/). Once signed up, login and click on New Redis Subscription:

![Redis Cloud Subscription](/images/articles/redis-cloud-subscription.png)

From there you will want to select your plan, and specify a resource name and password. The password field is optional, and if left empty you will not want to reference a password in the configurations.

![Redis Cloud Configuration](/images/articles/redis-cloud-configure.png)

Next you will want to select the region which is closest to you.

![Redis Cloud Region](/images/articles/redis-cloud-region.png)

### Testing Connectivity with Redis-cli

To ensure you have set this up to connect properly we will be testing the connection in with [redis-cli](http://redis.io/topics/quickstart). This is pre-installed on your Nitrous box so there is no extra setup needed.

Run the following command with your Redis Cloud's db configuration. You can obtain the host (public DNS), port, and password in your Redis Cloud account in the navigation menu under ‘My Resources’ > ‘Manage’ ([view example](/images/articles/redis-cloud-settings.png)):

    redis-cli -h REDIS_CLOUD_HOST -p REDIS_CLOUD_PORT -a REDIS_CLOUD_PASSWORD

>If you did not include a password in your Redis db configuration, do not include the -a or password in the command. Passing an empty value would cause issues when connecting.

After running redis-cli, you can set and get keys. Here is an example of output which you should see when setting and getting keys:

![Redis-cli-connection](/images/articles/redis-cli.png)

### Setting up the Database configuration (Ruby/Rails)

If you are building a Rails app, follow this step to connect your app to Redis Cloud.

Navigate in your menubar to 'My Resources' > 'Manage', and from there click on your new database. You will be taken to the settings page which will provide you with the host, port, and password needed for your app.

![Redis Cloud Settings](/images/articles/redis-cloud-settings.png)

Grab each of the values and assign them to environment variables to a file called `.env` within your project folder like so: 

![Env Variables](/images/articles/redis-bashrc.png)

>If you are going to add your project to a git repo, add `.env` to your `.gitignore` file to ensure these credentials aren't pushed with the rest of your code.

Once your environment variables have been saved, run the following command within your project folder:

    export $(cat .env)

You can now test these variables by running `echo REDIS_CLOUD_HOST` in the console to see if the corresponding value is returned.

Within your Rails app, update your Gemfile to include the [redis-rb](http://github.com/redis/redis-rb) client:

    gem 'redis'

Next you will want to install the gem via Bundler:

    bundle install

Create a new redis.rb initializer in config/initializers/ and add the following code:

    $redis = Redis.new(:host => ENV['REDIS_CLOUD_HOST'], :port => ENV['REDIS_CLOUD_PORT'], :password => ENV['REDIS_CLOUD_PASSWORD'])