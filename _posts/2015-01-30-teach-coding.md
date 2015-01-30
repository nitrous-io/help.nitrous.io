---
layout: article
title: NITROUS.IO 101 - Teach Coding
utm: utm_source=nitrous.io&utm_medium=tutorial&utm_campaign=teach-coding
published: true
category: usage
---

This is a quick tutorial that shows you how you can use Nitrous.IO for the purposes of conducting coding lessons. Check out our [blog post](http://blog.nitrous.io/2015/01/30/teach-coding-on-nitrous.html) to find out what makes Nitrous.IO the ideal platform for coding lessons. 

You'd need a Nitrous account to execute these steps, [sign up for free](https://www.nitrous.io?{{page.utm}}) and get provisioned with a free development box.


###CREATE A BOX

Development Boxes or “boxes” are the heart and soul of the Nitrous experience. Basic, free boxes come with stock setups: Rails, Python, Node.js, Go, PHP & Meteor. We include most everything else you need to start teaching, like imagemagick and more.

To create a new free box, just click the “New Box” button on your dashboard after signing in.
![Create a Box](https://raw.github.com/action-io/action-assets/master/support/screenshots/new-box-button.png)

####1. Pick a box template
Select which default stock development environments you prefer to start coding on. We support the following setups. Shoot us an email if you want us to support a different stack.
![Template](https://raw.github.com/action-io/action-assets/master/support/screenshots/box-templates.png)

####2. Enter a unique name
Pick a descriptive box name, the best practice here is to describe the stack or the project (if you’re only going to keep one project on each box, that’s up to you).

####3. Pick a region
We will default the region to whichever is closest to your current IP address, though if you’re travelling and want the box closer to your hometown, then just pick the region closest to you.

####Provisioning
Once you’ve clicked “Create Box”, you’ll need to wait a few seconds while we provision the box. This is typically pretty speedy, but might take up to a minute.

After the box is provisioned, you’ll be kicked into the box information page. Simply click the “IDE” button and you’re ready to start your coding lesson!
![IDE button](https://raw.github.com/action-io/action-assets/master/support/screenshots/ide-button.png)


###TEACH

You can create as many projects as you would like within a single Nitrous box. The only limitation to this is the amount of storage space you use, which not only counts the project files but also modules, different versions of Ruby installed, etc.

Below you will see a screenshot of how you could setup your directories within Nitrous.IO. All projects should be placed within the ~/workspace folder, and configuration files can be placed in your home directory ~/.

![file directory](http://help.nitrous.io/images/articles/directory-tree.png)

Build your app just as you normally would on your local environment. If you find that you need to install additional packages/tools, you can easily get what you need using our [Autoparts Package Manager](http://help.nitrous.io/autoparts/).

####COLLAB MODE

You can nudge on your students’ learning progress by having them add you as a Collaborator to their boxes. To do so, select Collaborate → Manage Collaborators from the dropdown menu.
![Add Collaborators](http://help.nitrous.io/images/articles/collab/collab-menu.png)

Type your email address in the following field. 
![Email](http://help.nitrous.io/images/articles/collab/collab-modal-email.png)

You’ll receive an email invite and your students’ boxes will appear in your list of boxes thereafter:
![Box](http://help.nitrous.io/images/articles/collab/shared-box.png)

Now you can access any box to make necessary repairs/code-edits to aid your students’ learning. Simply pick the file you want to make changes to and select Collab Mode - your students will be able to see your changes live in realtime. 
![Collab mode](http://help.nitrous.io/images/articles/collab/collab-button2.png)

###PREVIEW APP

At the end of the lesson, students can preview and share their newly created web app on a public URL while it is running within their active session.

The Preview menu in the Web IDE displays links to some common default ports, which you can click to open a new window in your browser.
![Preview](http://help.nitrous.io/images/articles/preview-menu.png)

Ports 1024 - 10,000 are open for HTTP, and port 80 is forwarded to port 3000. If your app is running on port 80 in the terminal, navigate to ‘Preview > Port 3000’ in the menu. 
 
If the app is running on another port not found in the menu then you will need to change this within the address bar (e.g. http://ruby-21200.usw1-2.nitrousbox.com:8080).

With a public URL, students would have something to take home with from the lesson and share their learnings with friends and families. If they want to carry on learning independently, they can easily log back into their box while at home and continue from where they left off. 
