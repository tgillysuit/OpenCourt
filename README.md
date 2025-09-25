# OpenCourt
Find a court. Join a game. or Play more. Search less.

Problem Statement: Solves the problem on not being able to find places for open play for sports such as pickleball, basketball, tennis, volleyball, etc.

Target Users: Anyone that wants to play, socialize, or get active.

# Feature Breakdown

MVP Features: 
Create: Create an event or joining event as a participant
Read: Looking at list of events, participants, players profile
Update: Changing location, time, players, size of party
Delete: Removing event, removing player

Extended Features: 
1. User profiles, which could include sports they play, rating/level of skill, profile pictures
2. Payment links, for court/rental fees, tournament entry fees

# Data Model Planning
Core Entities: Events, Users, Location

Key Relationships: Users can host Events, Events can have multiples Users, Events have one location, Locations can host multiple events

CRUD Operations:
1. Users can create events
2. Users can join events
3. Users can view events and participants
4. Hosts can remove users
5. Hosts can update event details
6. Users can leave events
7. Hosts can delete events

# User Experience
User Flows: A user can either host or join an event. If they host an event, they will determine size of event, location, time, and what sport. If they are a participant they will review list of events and join the one they would want to partake in. If a user is hosting they can remove players they don't want. Users themselves can also leave event. Hosts can also delete events.

