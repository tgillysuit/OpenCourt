# Open Court
*Find a court. Join a game. Play more. Search less.*

## Table of Contents
1. [Project Description](#project-description)
1. [Local Development Setup](#local-development-setup)
1. [Prerequisites](#prerequisites)
1. [Building the Application](#building-the-application)
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

## Prerequisites
### Set up VM
*Augy will fill this out*
*The whole VM setup we did including installing and configuring MySQL, git, node, etc*

### Set up database
- (if needed) create DB and user
- create tables
- seed data

## Building the Application
### Configure environment variables
- frontend env
- root env
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

### Deployment
To deploy, run:
```bash
cd src/server
npm run pm2
cd ../frontend/opencourt
npm run dev -- --host
```




