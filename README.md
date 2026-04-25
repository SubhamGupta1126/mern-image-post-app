# 🚀 Postify (MERN Image Posting App)

A full-stack MERN application that allows users to upload and share images with captions.
Built using **React, Node.js, Express, MongoDB**, and **ImageKit** for cloud image storage.

---

## 📸 Features

* Upload images with captions
* Store images using ImageKit (cloud storage)
* View all posts in a feed
* REST API with Express & MongoDB
* Clean and responsive frontend using React

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* React Router DOM

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer (file upload)

**Cloud**

* ImageKit (image storage & CDN)

---

## 📂 Project Structure

```
4_imagePost_Project/
 ├── backend/
 └── frontend/
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the repository

```
git clone https://github.com/your-username/postify.git
cd postify
```

---

### 🔹 2. Setup Backend

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

Run backend:

```
npm start
```

---

### 🔹 3. Setup Frontend

```
cd ../frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### ➤ Create Post

```
POST /post
```

* Upload image + caption

### ➤ Get All Posts

```
GET /post
```

* Fetch all posts

---

## 🧠 How It Works

Frontend (React) → Backend (Express + Multer) → ImageKit (store image) → MongoDB (store URL) → Display in UI

---

## 📌 Future Improvements

* User authentication
* Like & comment system
* Image preview before upload
* Pagination / infinite scroll

---

## 👨‍💻 Author

Subham Shaw

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
