# Open Court
*Find a court. Join a game. Play more. Search less.*

## Table of Contents
1. [Project Description](#project-description)
1. [Local Development Setup](#local-development-setup)
1. [Deployment Process](#deployment-process)
1. [Environment Variables](#environment-variables)
1. [Running the Application](#running-the-application)
1. [VM Setup](#vm-setup)

## Project Description
OpenCourt solves the problem on not being able to find places for open play for sports such as pickleball, basketball, tennis, volleyball, etc.

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

## Local Development Setup
*Setting up frontend and backend. LOCALLY*

### Prerequisites and Dependencies

### Backend
Command line from project root:
```bash
cd src/server
npm i
npm run pm2
npm run pm2-log
```
*Note: If you need to force pm2 to stop, run `npm run pm2-stop`.*
### Frontend
Command line from **server directory**:
```bash
cd ../frontend/opencourt
npm i
npm run dev
```



- BUILD
    - VM (for deployment)
    - environment
    - Setup (install all packages)
- RUN
    - Running

Backend
if in 
npm run dev -- --host


## Deployment Process
*How to run on project on **VM** -- for development reasons I'm guessing*

*Link to VM Setup Here as well*

## Environment Variables
*Explain environment variables*

## Running the Application
*Insert the commands to run app*

*npm run dev for front end*

*npm run pm2 for backend*

*note to see the package.JSON for scripts*

## VM Setup
*Augy will fill this out*
*The whole VM setup we did including installing and configuring MySQL, git, node, etc*


