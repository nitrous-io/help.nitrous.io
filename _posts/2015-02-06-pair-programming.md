---
layout: article
title: Pair Programming
utm: utm_source=nitrous.io&utm_medium=tutorial&utm_campaign=pair-programming
published: true
category: usage
---

Here's a quick tutorial that brings you up to speed with Pair Programming on Nitrous.IO's collaborative editor. [Sign up](http://www.nitrous.io/?{{page.utm}}) for a free account to unlock the benefits of cloud collaboration in real-time, if you don't already have one.

Check out our featured [blog post](http://blog.nitrous.io/) for a brief introduction to this effective Agile Development practice, that has been used by companies like [Pivotal Labs](http://www.pivotallabs.com). 

##Start the Web IDE
Create a box on [Nitrous.IO](http://www.nitrous.io?{{page.utm}}), or you can use a box that you’ve already created. Pair programming works on any box template.

In your list of boxes, click the IDE button to boot up the IDE for your box:
![Box IDE button](http://help.nitrous.io/images/articles/ide-button.png) 

##Adding Collaborators
Now we’ve got to give access to our friends / colleagues so they can access our box.

Note that with adding collaborators comes great responsibility. Notably, you must trust who you are adding to your box. For extra security, you should practice the following:
Use SSH Key with passphrase

If you’ve already added an SSH Key to Nitrous.IO without a passphrase, you’ll need to delete it and re-generate one with a passphrase.

Use HTTPS authentication with Github
Using HTTPS authentication with Github should prompt you for your password, thus restricting any abuse from collaborators (but they’re your friends, why would they do that?!). Better safe then sorry…my friends have done some evil things to my desktop background…and my forehead with a very, very permanent marker.

Okay, back to business. In the IDE, Click the “Collaborate” menu item in the top navigation, and select “Manage Collaborators”:

![Manage Collaborators](http://help.nitrous.io/images/articles/collab/collab-menu.png)

A list of any collaborators you’ve already added will appear. Enter the Nitrous.IO username, or email of the person you’d like to add to your box.

![Add Collaborators' emails](http://help.nitrous.io/images/articles/collab/collab-modal-email.png)

###Nitrous Users & New Users
If you’re inviting a user with their username, they’ll receive an email and the box will appear in their list of boxes:
![Shared Box](http://help.nitrous.io/images/articles/collab/shared-box.png)

If they don’t have an account yet, they’ll receive an invite to Nitrous, and will be able to access only boxes to which they’ve been added as a collaborator.

##Collaborating on Files
Ok, now lets get to the good part. Once you and your pair programming buddy  have opened the IDE, you can edit files simultaneously.

First, and most importantly, you’ll need to open the same file. Luckily, we put file status notifications in the chat window on the right of the IDE.

###Chat
To open the chat, just click the little “message” icon on the right of the IDE. This will toggle the chat window which has a few valuable features.

![Chat](http://help.nitrous.io/images/articles/collab/collab-online.png)

You can check who else is online by hovering over the group icon. Alternatively, you could just write a message in the chat saying “what’s up”, but sometimes people are around and are just ignoring you because you’re not the most “likable guy”…bleh whatever, screw ‘em.

###File status
Assuming someone has joined the room and opened a file, you’ll see a file status message in the chat window. This is a great shortcut to open the same file to start editing.

##Collaborate!
Now that we have the same file open, we can collaborate. You’ll need to turn “Collab Mode” on for each file.

To turn on Collab Mode, just click the little button on the top-right of the file:

![Collab Mode](http://help.nitrous.io/images/articles/collab/collab-button2.png)

Now, when you edit, your friend will see the changes happening live in their browser. They can type at the same time and it will show up in your browser.

##Tmux Session

If you’re running a server or long-running process that you don’t want to interrupt when you mistakenly close your browser window, create a tmux session by typing the following command in the IDE console window:

````
tmux new -s my_session
````

Once you’ve done that, your work will be constantly stored in a persistent session to which you and your friend can always reconnect to. You can also see what each other type in the console window in real-time. 

Attach back to the session you’ve created if you happen to mistakenly exit your browser window :

````
tmux attach -t my_session
````

Now you can reap the benefits of pair programming no matter where you are, without being physically confined to a single workstation shared with your programming partner.  

