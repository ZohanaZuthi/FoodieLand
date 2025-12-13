# 🍽️ **Foodieland – Full-Stack Recipe Web App**

A modern full-stack recipe platform built with **React + Tailwind (frontend)** and **Django REST Framework (backend)**.
Foodieland allows users to browse recipes, search, explore categories, read blogs, and contact the team — all while storing data in a structured backend.

# Demo Video of FoodieLand
Link : https://github.com/ZohanaZuthi/Demo_video_FoodieLand
---

## 📌 **Features**

### **Frontend**

* Fully responsive UI based on Figma design
* Homepage with sliders, recipe cards, categories, newsletter section
* Recipe detail page with nutrition, ingredients, steps
* Blog listing + blog detail pages
* Contact form integrated with backend
* Navbar & footer with routing
* Newsletter subscription connected to backend
* Dynamic fetching from Django API
* Random recipe suggestions
* React Router navigation
* Heart (like) toggle on recipes

### **Backend**

* Django REST API
* Models for:

  * Category
  * Author
  * Recipe
  * Nutrition
  * Ingredients
  * Instructions
  * Blog
  * Contact messages
  * Newsletter subscriptions
* Image uploads for authors, categories, recipes, instructions
* Admin panel for managing all data
* Validations + unique email subscription system
* API endpoints for recipes, categories, blogs, contacts, subscribing

---

## 🛠️ **Tech Stack**

### **Frontend**

* React.js
* React Router
* Tailwind CSS
* Vite
* Fetch API

### **Backend**

* Django
* Django REST Framework
* SQLite / PostgreSQL
* Pillow for image processing

---

# 🚀 **Installation Guide**

## **1️⃣ Clone the project**

```sh
git clone https://github.com/your-repo/foodieland.git
cd foodieland
```

---

# 📦 **Backend Setup (Django)**

## **Install dependencies**

```sh
cd backend
pip install -r requirements.txt
```

## **Apply migrations**

```sh
python manage.py makemigrations
python manage.py migrate
```

## **Create superuser**

```sh
python manage.py createsuperuser
```

## **Start backend server**

```sh
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

# 🎨 **Frontend Setup (React)**

## **Install dependencies**

```sh
cd frontend
npm install
```

## **Start development server**

```sh
npm run dev
```

Frontend runs at:

```
http://localhost:5173/
```

---

# 🔗 **Important API Endpoints**

| Feature         | Method | Endpoint               |
| --------------- | ------ | ---------------------- |
| All recipes     | GET    | `/api/recipes/`        |
| Recipe detail   | GET    | `/api/recipes/<slug>/` |
| Categories      | GET    | `/api/categories/`     |
| Subscribe email | POST   | `/api/subscribe/`      |
| Contact message | POST   | `/api/contact/`        |
| Blogs list      | GET    | `/api/blogs/`          |
| Blog detail     | GET    | `/api/blogs/<slug>/`   |

---

# 📁 **Project Structure**

```
foodieland/
 ├── backend/
 │   ├── recipes/
 │   ├── blogs/
 │   ├── media/
 │   ├── settings.py
 │   └── urls.py
 ├── frontend/
 │   ├── src/
 │   │   ├── components/
 │   │   ├── pages/
 │   │   ├── assets/
 │   │   └── App.jsx
 │   └── index.html
 └── README.md
```
