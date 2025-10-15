# OpenCourt
Find a court. Join a game. Play more. Search less.


## Table of Contents

1. [Quick Start](#quick-start)
1. [Big Picture](#big-picture)
1. [Feature Breakdown](#feature-breakdown)
1. [Data Model Planning](#data-model-planning)
1. [User Experience](#user-experience)
1. [Local Development Setup](#local-development-setup)
1. [Environment Variables](#environment-variables)
1. [Database Setup](#database-setup)

## Quick Start
### 0. Set up database (one time)
If you have not yet created your database, follow these steps:
- install SQL (if not yet installed)
```bash
sudo apt update
sudo apt install mysql-server
```
- Connect to mySQL as root user
```bash
mysql -u root -p 
# When prompted, enter root password
```
- Create a new database
```sql
CREATE DATABASE open_court 
-- this is the name you will use in the .env 
```
- Create a user and grant privileges
```sql
CREATE USER 'username'@'0.0.0.0';  -- fix this
GRANT ALL PRIVELEGES ON open_court TO 'username'@'0.0.0.0'; -- is the 0.0.0.0 right?
FLUSH PRIVELEGES;
EXIT;
```
**🚩🚩🚩Augy - What was the line to create a user at any ip with a password? (SEE 'Create a user' ABOVE) 🚩🚩🚩**
- Create tables and add seed data
Configure a connection to the database in Workbench, then run [create_tables](./src/database/create_tables.sql) to create the tables and [seed_tables](./src/database/seed_tables.sql) to seed the tables with some quick sample data.

### 1. Set up environmental variables
Copy the [template.env](./template.env) into a new .env and fill in the variables as indicated in the comments.

Command line from project root:
```bash
cp template.env .env
nano .env # open .env for editing
```

### 2. Run Scripts

#### Set up server

Command line from project root:
```bash
cd src/server
npm i
npm run pm2
npm run pm2-log
```
*Note: If you need to force pm2 to stop, run `npm run pm2-stop`.*

#### Set up frontend

Command line from **server directory**:
```bash
cd ../frontend/opencourt
npm i
npm run dev
```

## Big Picture

**Problem Statement**: Solves the problem on not being able to find places for open play for sports such as pickleball, basketball, tennis, volleyball, etc.

## Project Description
OpenCourt solves the problem on not being able to find places for open play for sports such as pickleball, basketball, tennis, volleyball, etc.

**Target Users**: Anyone that wants to play, socialize, or get active.

### Feature Breakdown

**Current MVP Features**: 
- End-to-End data
    - MySQL database
        - Tables: users, locations, games, and games_users
        - Configured for workbench access
        - Scripts for creating and seeding databases included
    - MVC-style API
        - Deployed with PM2
        - Basic CRUD functionality
            - Create: Add a user, location, or game
            - Read: View all users, locations, or games
        - Basic data validation in the controller
    - React + Vite frontend application 
        - Components: Games, Locations, Users
        - Connects to API through fetch calls on button clicks
        - Uses state to manage form data, error handling
        - Basic data validation
- Simple frontend for client testing
    - React + Vite frontend application
        - Simple, responsive UI
        - useful frontend errors

**Extended Features**: 
- Extend CRUD functionality
    - Update: Change locations, times, players, size of party
    - Delete: Remove events, players
- User profiles, which could include sports they play, rating/level of skill, profile pictures
- Payment links, for court/rental fees, tournament entry fees

### Data Model Planning
**Core Entities**: Events, Users, Location

**Key Relationships**: Users can host Events, Events can have multiples Users, Events have one location, Locations can host multiple events

**CRUD Operations**:
1. Users can create events
2. Users can join events
3. Users can view events and participants
4. Hosts can remove users
5. Hosts can update event details
6. Users can leave events
7. Hosts can delete events

### User Experience

**User Flows**:
A user can either **host** or **participate** in an event. 
- **Hosts**
    - determine the event size, sport, location, and time.
    - can remove players or delete events
- **Participants**
    - can browse and join events.
    - can leave an event anytime.

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