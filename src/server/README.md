# Server

## Quick Start
- Open folder `cd src/server`
- Install dependencies `npm i`
- Launch server `npm run start`
- Access server at [host]:3000 (example: http://localhost:3000/)

## CRUD Operations
1. Users can create events
2. Users can join events
3. Users can view events and participants
4. Hosts can remove users
5. Hosts can update event details
6. Users can leave events
7. Hosts can delete events

## Basic Strategy
/model # db connection
/controllers # logic
/routers # routes
server.js - start server listening on port, use routers