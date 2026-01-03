# Todo PERN Stack Application

A full-stack Todo application built with PostgreSQL, Express, React, and Node.js (PERN stack).

## 📋 Project Status

- ✅ **Backend**: Complete and functional
- 🚧 **Frontend**: In development

## 🛠️ Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Relational database
- **pg** - PostgreSQL client for Node.js
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## 📁 Project Structure

```
todo-pern/
├── backend/
│   ├── controllers/
│   │   └── todo.controller.js    # Todo business logic
│   ├── db/
│   │   └── db.js                 # Database connection pool
│   ├── routes/
│   │   └── todo.route.js         # Todo API routes
│   ├── index.js                  # Express server entry point
│   └── package.json              # Backend dependencies
└── frontend/                     # (Coming soon)
```

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd todo-pern
```

2. Navigate to the backend directory:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

## ⚙️ Environment Setup

1. Create a `.env` file in the `backend` directory:

```bash
cd backend
touch .env
```

2. Add the following environment variables to `.env`:

```env
# Server Configuration
PORT=5050

# Database Configuration
DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

Replace the placeholder values with your actual PostgreSQL credentials.

## 🗄️ Database Setup

1. Create a PostgreSQL database:

```sql
CREATE DATABASE your_database_name;
```

2. Connect to your database and create the `todo` table:

```sql
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false
);
```

## 🏃 Running the Server

### Development Mode

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server on file changes.

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:5050` (or the port specified in your `.env` file).

You should see:

```
✅ Connected to PostgreSQL database
Server is running on port 5050
```

## 📡 API Endpoints

All endpoints are prefixed with `/api/v1/todos`

### Create a Todo

- **POST** `/api/v1/todos`
- **Request Body**:

```json
{
  "description": "Complete the project",
  "completed": false
}
```

- **Response**: `201 Created`

```json
{
  "todo_id": 1,
  "description": "Complete the project",
  "completed": false
}
```

### Get All Todos

- **GET** `/api/v1/todos`
- **Response**: `200 OK`

```json
[
  {
    "todo_id": 1,
    "description": "Complete the project",
    "completed": false
  },
  {
    "todo_id": 2,
    "description": "Review code",
    "completed": true
  }
]
```

### Update a Todo

- **PUT** `/api/v1/todos/:id`
- **Request Body**:

```json
{
  "description": "Updated description",
  "completed": true
}
```

- **Response**: `200 OK`

```json
{
  "todo_id": 1,
  "description": "Updated description",
  "completed": true
}
```

- **Error**: `404 Not Found` if todo doesn't exist

### Delete a Todo

- **DELETE** `/api/v1/todos/:id`
- **Response**: `200 OK`

```json
{
  "message": "Todo deleted successfully"
}
```

- **Error**: `404 Not Found` if todo doesn't exist

## 🔒 Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (missing required fields)
- `404` - Not Found
- `500` - Internal Server Error

## 🧪 Testing the API

You can test the API using tools like:

- **Postman**
- **cURL**
- **Thunder Client** (VS Code extension)
- **Insomnia**

### Example cURL Commands

**Create a todo:**

```bash
curl -X POST http://localhost:5050/api/v1/todos \
  -H "Content-Type: application/json" \
  -d '{"description": "Test todo", "completed": false}'
```

**Get all todos:**

```bash
curl http://localhost:5050/api/v1/todos
```

**Update a todo:**

```bash
curl -X PUT http://localhost:5050/api/v1/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"description": "Updated todo", "completed": true}'
```

**Delete a todo:**

```bash
curl -X DELETE http://localhost:5050/api/v1/todos/1
```

## 📝 Notes

- The backend uses ES6 modules (`type: "module"` in package.json)
- Database connection pooling is implemented for efficient connection management
- CORS is enabled to allow cross-origin requests (useful when frontend is added)

## 🔮 Future Enhancements

- Frontend React application
- User authentication
- Todo categories/tags
- Due dates and reminders
- Search and filter functionality

