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

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- MongoDB database
- Cloudinary account
- Google OAuth credentials (for Google sign-in)

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 🚀 Getting Started

1. **Clone the repository**

    ```bash
    git clone <your-repo-url>
    cd second-project
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**
    - Create `.env.local` file
    - Add all required environment variables

4. **Run the development server**

    ```bash
    npm run dev
    ```

5. **Open your browser**
    - Navigate to [http://localhost:3000](http://localhost:3000)

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

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.
