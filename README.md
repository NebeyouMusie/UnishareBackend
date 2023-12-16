UniShare Project - Backend
Welcome to the UniShare project! 
This backend repository is responsible for handling user authentication, managing posts, and providing endpoints for the UniShare web application.

Technologies Used
Node.js: JavaScript runtime for server-side development.
Express.js: Web application framework for Node.js.
MongoDB: NoSQL database for storing user and post data.
bcrypt: Library for hashing passwords securely.
jsonwebtoken: Library for handling JSON Web Tokens (JWT) for user authentication.

Project Structure
The project structure is organized into the following folders:
model: Contains MongoDB schemas for the post and user entities.
post: Manages routes and controllers for handling posts.
user: Manages routes and controllers for handling users, including registration and login.
middleware: Contains the authentication middleware (auth.js).

Setup Instructions
Clone the Repository:
git clone https://github.com/your-username/unishare-backend.git
cd unishare-backend
Install Dependencies:
npm install

Set Up Environment Variables:
Create a .env file in the project root and add the following:
env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_for_jwt

Run the Application:
npm start
The server will run at http://localhost:5000 by default. You can change the port in the .env file.

Endpoints
User Endpoints

Register User:
Endpoint: POST /user/add
Payload:
{
  "name": "Your Name",
  "password": "Your Password",
  "role": "student/instructor",
  "course": "Your Course (if applicable)",
  "user_id": "Your Unique User ID"
}

User Login:
Endpoint: POST /user/login
Payload:
{
  "user_id": "Your Unique User ID",
  "password": "Your Password"
}

Get User by ID (Authenticated):
Endpoint: GET /user
Headers: x-auth-token: Your_JWT_Token
Post Endpoints
Add Post (Authenticated):

Endpoint: POST /post/add
Headers: x-auth-token: Your_JWT_Token
Payload:
{
  "title": "Your Post Title",
  "description": "Your Post Description",
  "date": "Your Post Date",
  "postType": "Your Post Type",
  "file": "Link to Post File (optional)"
}

Get All Posts:
Endpoint: GET /post/get


