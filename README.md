# 📝 MERN Stack Blog Application

A full-stack Blog Application built using the MERN Stack that allows users to securely create, read, update, and delete blog posts. The application includes JWT Authentication, protected routes, and user authorization to ensure that users can only modify their own posts.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User Registration
- User Login
- Password hashing using bcrypt
- JWT (JSON Web Token) Authentication
- Protected API Routes
- Persistent Login using Token
- User-based Authorization
  - Users can create posts.
  - Users can edit only their own posts.
  - Users can delete only their own posts.
  - All authenticated users can read posts.

---

### 📝 Blog Features
- Create Blog Post
- Read All Blog Posts
- Update Existing Blog Post
- Delete Blog Post
- Search Blog Posts
- Responsive User Interface
- Date Formatting using date-fns

---

## 🛠️ Tech Stack

### Frontend
- React JS
- React Router DOM
- Context API
- Axios
- CSS3
- HTML5
- JavaScript (ES6+)
- date-fns

### Backend
- Node JS
- Express JS
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

### Database
- MongoDB Atlas / MongoDB

---

## 📂 Project Structure

```
Blog-Application/
│
├── client/
│   ├── src/
│   │   ├── Components/
│   │   ├── Context/
│   │   ├── Hooks/
│   │   ├── API/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔒 Authentication Flow

```
User Register
       │
       ▼
Password Hashed (bcrypt)
       │
       ▼
Stored in MongoDB
       │
       ▼
User Login
       │
       ▼
JWT Token Generated
       │
       ▼
Token Stored in Browser
       │
       ▼
Protected Routes
       │
       ▼
Authenticated User Access
```

---

## 🔐 Authorization Flow

```
User A creates a Post
          │
          ▼
Post stores User ID
          │
          ▼
Update/Delete Request
          │
          ▼
Compare JWT User ID
          │
          ▼
Owner?
     │           │
   Yes           No
    │             │
Allow Update   Return 403 Forbidden
```

---

## 📡 REST API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register User |
| POST | `/login` | Login User |

---

### Posts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/posts` | Get All Posts |
| POST | `/posts` | Create New Post |
| PUT | `/posts/:id` | Update Own Post |
| DELETE | `/posts/:id` | Delete Own Post |

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/pavalanganesan2368/MERN-blog-day-application.git
```

---

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

## ▶️ Run the Application

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
npm run dev
```

## 💻 Technologies Used

- MongoDB
- Express JS
- React JS
- Node JS
- Mongoose
- JWT
- bcrypt
- Axios
- Context API
- React Router DOM
- date-fns
- HTML5
- CSS3
- JavaScript (ES6+)

---

## 📚 Concepts Implemented

- MERN Stack Architecture
- RESTful API
- MVC Pattern
- JWT Authentication
- Password Encryption
- Protected Routes
- User Authorization
- CRUD Operations
- React Context API
- React Hooks
- State Management
- API Integration
- Error Handling
- Responsive Design

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building a complete Full-Stack MERN Application.
- Designing RESTful APIs using Express.js.
- Implementing JWT Authentication and Authorization.
- Managing application state using React Context API.
- Performing CRUD operations with MongoDB and Mongoose.
- Securing passwords using bcrypt.
- Protecting backend APIs with middleware.
- Creating responsive user interfaces in React.
- Integrating frontend and backend using Axios.
- Structuring scalable MERN applications.

---

## 🔮 Future Improvements

- User Profile Page
- Profile Picture Upload
- Rich Text Editor
- Like & Comment System
- Categories & Tags
- Pagination
- Dark Mode
- Image Upload (Cloudinary)
- Email Verification
- Forgot Password
- Refresh Token Authentication
- Role-Based Access Control (Admin/User)
- Bookmark Posts

---

## 👨‍💻 Author

**G. Pavalan**

Final Year B.E. Computer Science and Engineering Student

Passionate MERN Stack Developer focused on building secure, scalable, and responsive web applications.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.