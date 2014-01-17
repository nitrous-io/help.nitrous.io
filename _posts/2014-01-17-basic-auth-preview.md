---
layout: article
title: Basic Authentication for Preview
published: true
category: previewing
mitem: basicauth
---

If you're worried about your preview site being accessible by public, you can enable HTTP Basic Authentication to secure it.

To enable HTTP Basic Authentication for Preview, in the IDE open "Preview" menu and select "Set Password". You will be presented with the following dialog box:

![Set Password Dialog](/images/articles/set-password-dialog.png)

Enter a secure username and password and click "Update".

If you reload your preview site, you will now be prompted for a username and password to proceed. Enter the ones you provided in the preivous step. Then the browser will proceed to load the site.

![Basic Auth Browser Prompt](/images/articles/basic-auth-prompt.png)

For an added layer of security, we recommend you to make use of the [SSL previewing](http://help.nitrous.io/ssl/) option, if it's available for your region.



