# What I Learned in This Project

## 🎓 Key Learnings & Skills Developed

### 1. **Authentication & Authorization**

- Implemented NextAuth.js for secure authentication
- Integrated Google OAuth for social login
- Managed user sessions and protected routes
- Password hashing and security best practices with bcryptjs

### 2. **Database Connection & Management**

- Connected MongoDB with Next.js application
- Used Mongoose for schema modeling and data validation
- Handled database operations (CRUD) efficiently
- Managed database connection pooling and optimization

### 3. **Dynamic Routing**

- Leveraged Next.js 14+ App Router architecture
- Created dynamic routes with file-based routing
- Implemented parallel routes and route groups
- Built API routes for backend functionality

### 4. **Model Writing & Data Structures**

- Designed Mongoose schemas with TypeScript
- Implemented data validation and type safety
- Created user models with proper field definitions
- Handled relationships between data entities

### 5. **Context API & State Management**

- Used React Context for global state management
- Created UserContext for user data sharing across components
- Implemented ClientProvider for client-side state
- Managed authentication state throughout the app

### 6. **File Upload & Cloud Storage**

- Integrated Cloudinary for image uploads
- Handled file uploads in Next.js API routes
- Managed image transformations and optimizations

### 7. **TypeScript Integration**

- Used TypeScript for type safety
- Created custom type definitions
- Implemented proper typing for API responses and props

### 8. **API Route Development**

- Built RESTful API endpoints
- Handled HTTP methods (GET, POST, PUT, DELETE)
- Implemented server-side validation and error handling
- Used Next.js API routes for backend logic

---

# User Authentication & Profile Management App

A modern full-stack web application built with Next.js that allows users to register, login, and manage their profiles.

## 🌟 Features

- **User Registration** - Create an account with email and password
- **User Login** - Sign in with credentials or Google account
- **Google OAuth** - Quick sign-in using Google authentication
- **Profile Management** - View and edit your profile information
- **Image Upload** - Upload and update profile pictures
- **Secure Authentication** - Password encryption and session management

## 🛠️ Technologies Used

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Image Storage**: Cloudinary
- **Password Encryption**: bcryptjs
- **Icons**: React Icons



## 📁 Project Structure

```
src/
├── app/
│   ├── api/           # API routes
│   │   ├── auth/      # Authentication endpoints
│   │   ├── edit/      # Profile edit endpoint
│   │   └── user/      # User data endpoint
│   ├── login/         # Login page
│   ├── register/      # Registration page
│   ├── edit/          # Edit profile page
│   └── page.tsx       # Home page (user profile)
├── context/           # React context for state management
├── lib/               # Utility functions
│   ├── auth.ts        # NextAuth configuration
│   ├── cloudinary.ts  # Cloudinary setup
│   └── db.ts          # Database connection
└── model/             # MongoDB models
    └── user.model.ts  # User schema
```

## 🔑 Key Features Explained

### Authentication

- Users can register with email/password or use Google OAuth
- Passwords are securely hashed using bcryptjs
- Session management handled by NextAuth.js

### Profile Management

- Users can view their profile after logging in
- Edit functionality allows updating name and profile picture
- Profile pictures are stored in Cloudinary

### Security

- Protected routes require authentication
- Passwords are never stored in plain text
- Secure session handling

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Pages

- **/** - Home page (displays user profile)
- **/login** - Login page
- **/register** - Registration page
- **/edit** - Edit profile page


