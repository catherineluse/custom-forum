# Welcome to Gennit

This project is called Gennit. It is supposed to be a desktop site for meetups and discussions.

The project is based on two what-ifs:

1. What if Reddit had been designed for small, niche communities from the ground up, instead of being designed for content aggregation with community features being added as an afterthought?
2. What if Reddit communities had built-in features for hosting meetups, similar to meetup.com? In other words, what if Reddit was built to comfortably bridge the divide between real-world and online communities?

## Technology

- AWS Amplify & AppSync
- GraphQL
- DynamoDB
- React, using create-react-app
- Bootstrap

## Design

I'm working on this project very slowly, but here are the features that I have planned:

**Basic Features**

- Organizer can create communities and add rules for them
- Can create discussions within a community
- Can create comments within a discussion
- Can create events within a community
- Notifications for messages, replies to discussions, replies to comments
- Can receive notifications by email, and email has unsubscribe link
- Can search and filter upcoming events by location, keyword, day of the week, and hours of the day
- Community moderation is enabled with a moderation queue of reported comments
- Message page shows conversations divided by correspondent

**Discussions and Voting Features**

- Comment voting system supports reasons for upvotes and downvotes (agree/disagree, etc)
- Can filter and rank comments by upvote reason
- Organizer can customize the default voting buttons on comments and the general appearance of comments - more or less profile information, more or fewer buttons
- Community members can also customize the appearance of comments
- Can filter discussions by tag
- Organizer can change the default comment ranking that is used in discussions
- The title of the discussion can be edited and the revisions are shown in a changelog

**Community Features**

- Communities can list real-world locations
- Can search for community by keyword or words in description
- Can search for community by location
- Communities have event calendar
- Can filter discussions by tag/topic
- Communities can show lists of related communities, inside or outside of the site
- Each community has a wiki to build knowledge, answer common questions, and get everyone on the same page
- Can see community’s participation stats
- The community has a changelog so that everyone can see when the name changes or when other settings change

**Promoting the Truth in Social Media**

- Can add sources to every discussion and comment
- Can reply to comments using a fact-check form in which sources are required

**Transparency, Moderation and Fairness**

- Comment form displays community rules on submit, and asks to confirm that the submission follows the rules before the final submission (prevents the unpleasant experience for newcomers where their first exposure to the rules is when their comments are removed for breaking them)
- Can see community’s moderation stats
- Mods can mark a comment as hidden until it is revised, to avoid discouraging newcomers by deleting their comments
- Reasons for reports are displayed on reported discussions and comments
- Reasons for removal are displayed on deleted discussions and comments
- Community has a moderation log which shows a list of moderators and summaries of their activity

**Profile Features**

- Users can post under several different profiles, and reputation is scored separately for each profile
- Users can score reputation for upvoted comments and discussions
- Reasons for upvotes are broken down and displayed on profile
- Users can opt in to showing their activity on their profile
