# RDBMS

## Project Overview

This project is a **simple relational database management system (RDBMS)** built from scratch using **JavaScript (Node.js)**.

The database is stored in **CSV files**.

The project also includes:
- A **SQL-like interface**
- An **interactive REPL**
- A **web API (Express server)**
- A **simple client (HTML + JS)** that performs CRUD operations

## Features

### Database Features
- Tables stored as `.csv` files  
- Column headers  
- CRUD operations:
  - `INSERT`
  - `SELECT`
- SQL-like command parsing  
- In-memory representation synced to CSV  
- Simple command execution engine  

### Server Features
- Express.js REST API  
- JSON request/response  
- CORS enabled  
- Endpoints for CRUD operations  

### Client Features
- Simple HTML + JavaScript frontend  
- Fetch API for communicating with server  
- Display data in browser  

## Technologies Used

- Node.js 
- Express.js
- Nodemon
- CSV file storage
- Vanilla JavaScript 


## Installation & Setup

### 1 Clone the repository

```bash
git clone https://github.com/HWaruguru/rdbms.git
cd rdbms
```

### 2 Install dependencies
```bash
cd server
npm install
```

### 3 Project configuration
- Ensure package.json contains:
```json
{
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}

```
### 4 .gitignore
```bash
node_modules
```

## CSV Database Format
Each table is stored as a CSV file.
```csv
id,name,email
1,Han,han@gmail.com
2,Bob,bob@gmail.com
```
- First row defines column names
- Each subsequent row represents a record

## Running the Server
```bash
cd server
npm run dev
```
- Expected output:
```bash
Server running on port 3000
```

## API Usage
### Get all users
```bash
curl http://localhost:3000/users
```

### Insert a user
```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"id":"3","name":"Kev","email":"kev@gmail.com"}'
```

## SQL-like REPL
- The project includes an interactive REPL for executing SQL-like commands

### Start REPL
```bash 
cd server
node repl.js
```
- Prompt:
```shell
rdbms>
```
### Supported Commands

```sql
SELECT * FROM users
INSERT INTO users VALUES (4,Daudi,daudi@gmail.com)
```
### Exit REPL
- quit
- or Ctrl + C

## Client Application
### Running the Client
```bash
npx serve client
```
Open the provided URL in the browser.

### Client Capabilities

- Fetch records from the database
- Display results in the browser
- Communicate with the server using fetch API

### CORS Handling
CORS is enabled in the Express server to allow browser access:

```js
app.use(cors());
```