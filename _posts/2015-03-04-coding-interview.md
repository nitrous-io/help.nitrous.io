---
layout: article
title: Coding Interview
utm: utm_source=nitrous.io&utm_medium=tutorial&utm_campaign=coding-interview
published: true
category: usage
---

Here’s an in-depth tutorial on how you can conduct live Coding Interviews using Nitrous.IO in Collab Mode and tmux. If you are new to [Nitrous.IO](http://www.nitrous.io?{{page.utm}}), simply [sign up for a free account](http://www.nitrous.io?{{page.utm}}), create a development box in seconds and you’d be all set for this tutorial.

Do check out our [blog post](http://blog.nitrous.io/2015/03/04/coding-interview.html) to find out what makes Nitrous.IO a great platform for coding interviews.  


##Start the Web IDE
Create a box on Nitrous, or you can use a box that you’ve already created. You can use any box template to conduct interviews.

In your list of boxes, click the IDE button to boot up the IDE for your box:

![Box IDE button](http://help.nitrous.io/images/articles/ide-button.png)


##Adding Collaborators (Candidates)
Now we’ve got to give access to our candidates so they can access our box.

In the IDE, Click the “Collaborate” menu item in the top navigation, and select “Manage Collaborators”:

![Manage Collaborators](http://help.nitrous.io/images/articles/collab/collab-menu.png)

A modal with a list of collaborators you’ve already added will appear. Enter the Nitrous.IO username, or email of the candidate you’d like to add to your box.


###Nitrous Users & New Users
If you’re inviting a Nitrous User with their username, they’ll receive an email and the box will appear in their list of boxes:

![Shared Box](http://help.nitrous.io/images/articles/collab/shared-box.png)

If they don’t have an account yet, they’ll receive an invite to Nitrous, and will be able to access only boxes to which they’ve been added as a collaborator.


##Collaborating on Files
On to the good part. Once you and the candidate have opened the IDE, you can edit files simultaneously.

First, and most importantly, you’ll need to open the same file. Luckily, we put file status notifications in the chat window on the right of the IDE.

###File status
Assuming the candidate has joined the room and opened a file, you’ll see a file status message in the chat window. This is a great shortcut to open the same file to start the interview.

###Chat (in case of Remote Coding Interview)
To open the chat, just click the little “message” icon on the right of the IDE. This will toggle the chat window which has a few valuable features.

![Chat](http://help.nitrous.io/images/articles/collab/collab-online.png)

You can check who else is online by hovering over the group icon. 


##Start the Interview!
Now that we have the same file open, we can begin the interview. You’ll need to turn “Collab Mode” on for each file.

To turn on Collab Mode, just click the little button on the top-right of the file. Tell the candidate to do the same. 

![Collab Mode](http://help.nitrous.io/images/articles/collab/collab-button2.png)

Now, when the candidate edits, you will see the changes happening live in your browser. You can type at the same time and it will show up in their browser.


##Tmux Session

If you require your candidate to run a server or long-running process that neither of you want to interrupt by mistakenly closing the browser window, simply use tmux (a terminal multiplexer). 

Create a tmux session by typing the following command in the IDE console window:

````
tmux new -s my_session
````

Once you’ve done that, your terminal session will be accessible to your candidate. You can also see what each other types in the console window in real-time. 

Tell your candidate to attach to the session you’ve created by running the below: 

````
tmux attach -t my_session
````

You can return to the session if you close your browser window by running the same command.

**Note: Remember to remove the candidate’s box access via ‘Collaborate’ => ‘Manage Collaborators’ once the interview has included.** 