# Open Court
*Find a court. Join a game. Play more. Search less.*

## Table of Contents
1. [Project Description](#project-description)
1. [The Plan](#the-plan)
1. [Prerequisites](#prerequisites)
1. [Building the Application](#building-the-application)
1. [Running the Application](#running-the-application)
1. [VM Setup](#vm-setup)

## Project Description
OpenCourt solves the problem of not being able to easily find open play locations for sports like pickleball, basketball, tennis, volleyball, and more.

### Current Features
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

## The Plan
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

## Prerequisites
### [Set up VM](#vm-setup) (Do This First!)

### Set up Local Database Connection
1. Open MySQL Workbench
2. Go to *Database=>Connect to Database*
3. Fill in the database information you configured in your VM
- Create the tables by pasting and running the contents of [create_tables](src/database/create_tables.sql) in MySQL Workbench
- **Optionally** populate the tables using [seed_tables](src/database/seed_tables.sql)

## Building the Application
### Configure environment variables
1. Duplicate and fill out the [frontend env](src/frontend/opencourt/template.env)
2. Duplicate and fill out the [root env](template.env)

#### In Linux (The VM)
```bash
cp template.env .env
nano .env
# Then fill out the env file
```
### Install all packages
From root, run the following lines to install all required packages:
```bash
cd src/server
npm i
cd ../frontend/opencourt
npm i
```
## Running the Application
### Development
For local development, run:
```bash
cd src/server
npm run pm2
cd ../frontend/opencourt
npm run dev
```
*Note: If you need to force pm2 to stop, run `npm run pm2-stop`. See [package.json](/src/server/package.json) for more useful server scripts.*

### Deployment - *Frontend and backend both running in the VM*

To deploy, run from the root of the project:
```bash
bash start.sh
```

<br>
<br>

## VM Setup
1. Open a terminal on your local machine
1. Log into your VM using your IP Address and Password
    ```bash
    ssh root@{vm-ip-address}
    ```
### System Setup
Update the package index and upgrade exisiting packages

```bash
sudo apt update
yes | sudo DEBIAN_FRONTEND=noninteractive apt-get -yqq upgrade
```

### Core Dependencies
1. Install Git
    ```bash
    sudo apt install git
    ```
1. Install MySQL
    ```bash
    sudo apt install mysql-server
    ```
1. Install Node.js using NVM
    ```bash
    sudo apt-get install curl
    ```
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    ```
    ```bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    ```
    ```bash
    nvm install --lts
    ```
### MySQL Configuration
#### Modify the bind-address
1. Open the MySQL config file
    ```bash
    sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
    ```
1. Change the bind-address value from **127.0.0.1**
 to **0.0.0.0**
1. Save and exit (Crtl+O, Enter, Ctrl+X)
#### Create a user
1. Log into MySQl as root
    ```bash
    mysql -u root -p
    # When prompted, enter root password
    ```
1. Create a new user (replace 'student' and 'yourpassword' with your chosen credentials)
    ```sql
    CREATE USER 'student'@'%' IDENTIFIED BY 'yourpassword';
    ```
#### Give the user external host connection permissions
1. View your current databases
    ``` sql
    SHOW DATABASES;
    ```
1. Pick an existing database or create a new one
    ```sql
    CREATE DATABASE opencourt;
    -- this is the name you will use in the .env
    ```
1. Grant permissions
    ```sql
    GRANT ALL PRIVILEGES ON opencourt.* TO '{your-username}'@'%';
    FLUSH PRIVILEGES;
    ```
1. Verify your permissions
    ```sql
    SHOW GRANTS FOR '{your-username}'@'%';
    ```
1. Exit
    ```sql
    EXIT;
    ```
#### Open port 3006 in the firewall
```bash
sudo ufw allow 3306/tcp
sudo ufw reload
```
### Process Management
```bash
# Install PM2 globally
npm install -g pm2

# Keep PM2 alive on reboot
pm2 startup
pm2 save
```
### Application Deployment
1. Clone this repository into a folder in you VM 
1. Complete the steps in [Building the Application](#building-the-application) in the VM

To deploy, run from the root of the project:
```bash
bash start.sh
```
<br>
<br>

## Docker Setup

### Part 0: Modifying your .env files | <code style="color : red">*IMPORTANT!*</code>
When using Docker inside of the VM, you will need to modify your `.env` files to make sure the `docker-compose.yml` file works inside of the project. 

***Steps:***

1. The .env file that you created earlier, you'll need to access that and add another parameter.
    ```bash
    nano .env
    ```
2. Inside of the .env file you're going to need to add/edit.
    ```env
    DB_HOST=database
    DB_ROOT_PW=example
    ```
    ##### <code style="color : Yellow">*!!! Make sure that DB_HOST is set to **database**. This is required for the Docker network to work properly and securely.*</code>
3. Save you credentials out of nano, by doing `CTRL + O`, and then hit `ENTER`.
4. Next, you'll need to go into the frontend folder and modify that .env file as well.
    ```bash
    cd src/frontend/opencourt
    nano .env
    ```
5. Inside of this .env file, you'll need to verify the `VITE_SERVER_HOST` and `VITE_SERVER_PORT` variables are set to the variables below.
    ```env
    VITE_SERVER_HOST = "localhost"  
    VITE_SERVER_PORT = "3000"
    ```
6. Save you credentials out of nano, by doing `CTRL + O`, and then hit `ENTER`.
7. Return back to the root directory by doing:
    ```bash
        cd ../../../../
    ```

<br>
<br>

---

### Part 1: Installing Docker onto the VM *(Virtual Machine)*
Inside the root directory run this command to install Docker with the necessary packages and dependencies on your VM, along with starting the docker containers.
```bash
    bash project_INIT.sh    # Runs another shell script - get_docker.sh
```

<br>
<br>

---
### Running Docker and Stopping Docker

Now you should be able to run the `docker-compose.yml` file from the root directory of the project and stop it. 

To Start the Docker Containers, run:
```bash
    docker-compose up -d    #This is here in case you need to start the docker containers back up. 
```

To Stop the Docker Containers, run:
```bash
    docker-compose down     #To remove the containers
```
or

```bash
    docker-compose stop     #To NOT remove the containers
```

<br>

**To visit the Frontend page, navigate to `http://{vm-ip-address}:5174`**
<br>
<br>

## How to use Adminer
1. Open a web browser and navigate to `http://{vm-ip-address}:8081`
2. Fill in the login credentials as follows:
   - System: MySQL
   - Server: database
   - Username: {your-username}
   - Password: {your-password}
   - Database: opencourt
3. Click "Login" to access the database management interface.


---

***If you have any questions about setting up Docker on your VM, talk to Tyler and/or Raymond.***

---
    