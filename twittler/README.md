# Twittler

## What's Already Here

This is a mostly-empty repo, with a file that creates some data that represents twitter users and their tweets. It's the data you would expect to see if you had created a twitter account and followed a few people. (More tweets appear over time.)

That file is called data_generator.js. You don't need to understand the code that's in it, but here's what it does:

- Creates two global variables, users and streams.
  - users is an array of strings -- all the usernames that you're following.
  - streams is an object with two properties, users and home.
    - streams.home is an array of all tweets from all the users you're following.
    - streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost's tweets.
- Kicks off a periodic process that puts more data in streams.

You'll mostly be working in the javascript block of index.html. Note: The generated tweets will be displayed in reverse chronological order.

Requirements:

- Show the user new tweets somehow. (You can show them automatically as they're created, or create a button that displays new tweets.)
- Display the timestamps of when the tweets were created.
- Design your interface so that you want to look at and use the product you're making.
- Allow the user to click on a username to see that user's timeline.
- Show when the tweets were created in a human-friendly way (eg "10 minutes ago"). You'll want to find and use a library for this.
- Allow the user to tweet. (This is going to require you to understand a little more about data_generator.js, but you shouldn't need to modify anything.)