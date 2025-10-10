# Frontend

## Quick Start
- Open folder `cd src/frontend/opencourt`
- Install dependencies `npm i`
- Launch server `npm run dev`
- Access server at [host]:5173 (example: http://localhost:5173/)

## User Experience
User Flows: A user can either host or join an event. If they host an event, they will determine size of event, location, time, and what sport. If they are a participant they will review list of events and join the one they would want to partake in. If a user is hosting they can remove players they don't want. Users themselves can also leave event. Hosts can also delete events.

'npm run dev -- --host`

## Database

| users | | 
| --- | --- |
| user_id | PRIMARY KEY |
| user_name | varchar(100) |

| locations | | 
| --- | --- |
| location_id | PRIMARY KEY |
| location_name | varchar(100) |
| address | varchar(255) |

| games | | 
| --- | --- |
| game_id | PRIMARY KEY |
| ganes_name | varchar(100) |
| location_id | FOREIGN KEY |

| games_users | | 
| --- | --- |
| game_user_id | PRIMARY KEY |
| user_id | FOREIGN KEY |
| game_id | FOREIGN KEY |

SQL Generate script:
```
USE opencourt;

DROP TABLE IF EXISTS games_users;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100)
);


CREATE TABLE locations (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    location_name VARCHAR(100),
    address VARCHAR(255)
);


CREATE TABLE games (
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    game_name VARCHAR(100),
    location_id INT,
    FOREIGN KEY (location_id) REFERENCES locations (location_id)
);


CREATE TABLE games_users (
    game_user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    game_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (game_id) REFERENCES games (game_id)
);
```