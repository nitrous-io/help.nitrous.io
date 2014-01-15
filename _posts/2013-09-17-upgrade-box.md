---
layout: article
title: Updating Your Nitrous.IO box
published: true
category: boxes
mitem: box-upgrades
---

This guide covers how to check your Nitrous.IO box version and how to update.

>If you are looking to increase/decrease the amount of memory or storage on your existing box, please view the [Configuring Box Memory & Storage](/box-settings) guide.

### Nitrous.IO Box Versions

The latest version is `drogo` &mdash; any new boxes you create will be a `drogo` box.

Our previous versions were, from most recent to the oldest:

* `cersei`
* `bran`
* `arya`

The most current box version receives the most attention and patches, so if you have a non-`drogo` box and are experiencing problems, please upgrade it to `drogo` by following the instructions below.

### Checking the Current Version of your Box

To view which version your Nitrous.IO box is running on, navigate to the [boxes page](https://www.nitrous.io/app#/boxes). From there, expand your Nitrous.IO box to view the stack information.

The screenshot below displays a `bran` box. Some packages may not work correctly in the previous box version, `arya`.

![bran box version](/images/articles/bran-box.png)

### Upgrading the Nitrous.IO Box

In order to obtain the latest box version, you will need to [create a new box](/box-new).

If you need to terminate an existing box to utilize the N2O for a new box, you may first want to download your project data. View the [Upload an Existing Application](/faq-adding-project/) guide for information on how to transfer projects to and from your Nitrous.IO box via SFTP or Git.

You can terminate an existing box by navigating to the [boxes page](https://www.nitrous.io/app#/boxes), and from there you will need to select `Shut Down` followed by `Terminate` on the box you intend to delete.
