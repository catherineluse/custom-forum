# Welcome to Gennit

This project is called Gennit. It is supposed to be a desktop site for meetups and discussions.

The project is based on what-ifs:

1. What if Reddit had been designed for small, niche communities from the ground up, instead of being designed for content aggregation with community features being added as an afterthought?
2. What if Reddit communities had built-in features for hosting meetups, similar to meetup.com? In other words, what if Reddit was built to comfortably bridge the divide between real-world and online communities?
3. What if social media was decentralized? What if you could have the independence of a small community, while having the discoverability of being part of a larger community?

## Why should social media be decentralized?

1. It would not be possible for a top-down authority like Mark Zuckerberg to say what is allowed on the site. Instead of top-down rules, which can be heavy-handed and difficult to enforce fairly, greater control over content would be given to individual communities and larger networks of communities that could include or exclude communities in a network based on their adherence to the rules.
2. It would not be possible for a top-down authority to sell everyone's user data.
3. Moderation could be improved and customized for individual communities, which would each have their own niche topic, like subreddits.
4. It would be impossible to use the platform to spread disinformation across the entire world, because not all instances of the decentralized system would be connected. A network of related communities could share a user base, and make their content discoverable within the network, but in order to share the user base, each community would have to follow the rules of the network. And if it didn't want to become part of the network, it would have to form its own network or be disconnected from all of the other communities.

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

**Distributed Social Media**

- An instance of gennit can start a gennit network
- The network may require permission to join or not
- Other instances of gennit can join the network
- Search results on one gennit can show results from an entire network
- Gennit instances can become organizers of multiple networks, and can join multiple networks
- The content of one gennit server is easily discoverable from other servers in the same network
- The first time you post in a different gennit server, you have to sign off that you have read the rules of the server
