# todo-application
This is a Full Stack Todo Application built using Spring Boot (Backend) and React JS (Frontend).
The application allows users to manage their daily tasks by adding, viewing, updating, deleting, and marking todos as completed or incomplete.

This project demonstrates full stack development including REST API creation, frontend integration, database handling, and GitHub project management.

Project Structure

todo-application
└── demo
    ├── .mvn
    │   └── wrapper
    │       └── maven-wrapper.properties
    │
    ├── backend
    │   └── src
    │       ├── main
    │       │   ├── java
    │       │   │   └── com
    │       │   │       └── example
    │       │   │           └── demo
    │       │   │               ├── controller
    │       │   │               ├── model
    │       │   │               ├── repository
    │       │   │               ├── service
    │       │   │               └── DemoApplication.java
    │       │   │
    │       │   └── resources
    │       │       └── application.properties
    │       │
    │       └── test
    │           └── java
    │               └── com
    │                   └── example
    │                       └── demo
    │
    ├── frontend
    │   ├── public
    │   ├── src
    │   ├── package.json
    │   └── package-lock.json
    │
    ├── .gitattributes
    ├── .gitignore
    ├── mvnw
    ├── mvnw.cmd
    └── pom.xml


Features

Add new Todo

View all Todos

Update existing Todo

Delete Todo

Mark Todo as completed / not completed

REST API-based backend

Simple and clean user interface

Technologies Used

Backend:

Java

Spring Boot

Spring Data JPA

Hibernate

H2 Database

Maven

Frontend:

React JS

Axios

HTML

CSS

JavaScript

Version Control:

Git

GitHub

Prerequisites

Make sure the following software is installed on your laptop:

Java 17 or above

Node.js and npm

Git

Maven (optional, Maven Wrapper is included)

You can check versions using:

java -version
node -v
npm -v
git --version

How to Run the Project on Your Laptop

Step 1: Clone the Repository

git clone https://github.com/nikileshx07/todo-application.git

cd todo-application/demo

Step 2: Run the Backend (Spring Boot)

For Windows:

mvnw.cmd spring-boot:run

For Mac/Linux:

./mvnw spring-boot:run

Backend will start at:
http://localhost:8080

Step 3: Access H2 Database (Optional)

Open browser and visit:
http://localhost:8080/h2-console

Use the following details:
JDBC URL: jdbc:h2:mem:testdb
Username: sa
Password: (leave empty)

Step 4: Run the Frontend (React)

Open a new terminal window and run:

cd frontend
npm install
npm start

Frontend will start at:
http://localhost:3000

Now your full stack application is running successfully.

How Frontend and Backend Work Together

React frontend sends API requests using Axios

Spring Boot backend handles those requests

Data is stored in H2 in-memory database

Backend sends response back to React

React updates the UI dynamically

API Endpoints

GET /todos – Fetch all todos
POST /todos – Create new todo
PUT /todos/{id} – Update a todo
DELETE /todos/{id} – Delete a todo

What I Learned from This Project

Building REST APIs using Spring Boot

Connecting frontend and backend

Managing full stack project structure

Using Git and GitHub for version control

Handling database using JPA and Hibernate

Understanding how full stack applications work

Future Improvements

Add user authentication and authorization

Connect to MySQL instead of H2

Improve UI/UX design

Deploy the application online

Add pagination and search functionality

Author

Vatapalli Nikilesh Babu
B.Tech – Information Technology
NRI Institute of Technology

Email: nikileshbabu09@gmail.com

GitHub: https://github.com/nikileshx07

If you found this project helpful, please consider starring the repository.
