# PML README
A Full stack web application that serves as a personal media library to keep track of music that you would like to listen and add it to a library

Direct link to app: https://floating-inlet-66162.herokuapp.com/

# Git Repository:

https://github.com/ttomas100/PML

### Result:

In this application we utilized the Dezeer API to implement a search for music. Ultimately, PML allows the user to keep a list of music they want to listen. Once the song is selected, the song is appended to the user page

### Technologies used:

Materialize (Front-end framework)

Cards, Modal

Express.js (Server framework)

Heroku (Cloud platform)

JawsDB (Heroku database add-on)

MySQL (RDBMS)

Node.js (Javascript environment)

Sequelize (ORM)

## Getting Started

### Prerequisites
- MySQL
- Node.js

### Installing
If you would like the view the site from a user's point of view, you have the option of viewing the site on Heroku. 
 
If you would like to run the application locally, please ensure that you have the prerequisites installed, then take the following steps:
- Clone this repository to your local machine with `git clone <repo-url>`.
- Install NPM dependencies by running `npm install` in the project directory.
- Install Sequelize 'npm install sequelize'.
- If you use a MySQL username other than `root` or have a MySQL password, open `config/config.json` and update these values on lines 3 and 4.
- Log into MySQL CLI with `mysql -u root` (substitute your username and add `-p <your password>` if needed).
- Run `CREATE DATABASE passport_db;`
- The application will be running at `localhost:8080/`

## Author
Tomas Utreras, Abby Adams

