# OpenCourt
Find a court. Join a game. or Play more. Search less.


## Table of Contents

1. [Quick Start](#quick-start)
1. [Big Picture](#big-picture)
1. [Feature Breakdown](#feature-breakdown)
1. [Data Model Planning](#data-model-planning)
1. [User Experience](#user-experience)
1. [Local Development Setup](#local-development-setup)
1. [Environment Variables](#environment-variables)
1. [Database Setup](#database-setup)


## Project Description
OpenCourt solves the problem on not being able to find places for open play for sports such as pickleball, basketball, tennis, volleyball, etc.

Target Users: Anyone that wants to play, socialize, or get active.

### Feature Breakdown

MVP Features: 
Create: Create an event or joining event as a participant
Read: Looking at list of events, participants, players profile
Update: Changing location, time, players, size of party
Delete: Removing event, removing player

Extended Features: 
1. User profiles, which could include sports they play, rating/level of skill, profile pictures
2. Payment links, for court/rental fees, tournament entry fees

### Data Model Planning
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

### User Experience
A user can either host or join an event.
Hosts determine the event size, sport, location, and time.
Participants can browse and join events.
Hosts can remove players or delete events, and users can leave events anytime.


## Local Development Setup
### Prerequisistes
- 

### Steps
1. Clone the repository
```
git clone <repository-url>
cd OpenCourt
```

2. Install dependencies

#### Backend:
```
cd .\src\server\
npm i
```

#### Frontend:
```
cd .\src\frontend\opencourt\
npm i
```

3. Set up environment variables

See [Environment Variables](#environment-variables)

4. Start the application

See [Instructions for Running the Application](#instructions-for-running-the-application)


## Deployment Process
1. Connect to your VM
```
ssh root@<vm-ip>
```
2. Navigate to your project directory

Ex. 
```cd projects/OpenCourt
```


3. Copy and configure environment variables
```
cp template.env .env