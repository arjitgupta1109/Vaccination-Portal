# 💉 Vaccination Portal-Full Stack Project

Vaccination Portal is a full-stack web application built to streamline the vaccination appointment process. It allows users to register, log in, manage child/adult vaccination appointments, and track vaccination status — all in one place with a clean user interface.

---

##🚀 Features

### 👤 User Authentication
- Login and Signup using mobile number and password
- Backend-based session handling

### 📅 Appointment Management
- Register child or adult for vaccination
- Book, update, or cancel appointments
- View appointment confirmation and vaccine status

### 🌙 UI Enhancements
- Animated tagline
- Real-time clock display
- Dark mode toggle (if enabled)

---

## 🧰 Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | HTML, CSS, JavaScript, React  |
| Backend    | Node.js, Express.js           |
| Database   | MongoDB (Atlas)               |
| Versioning | Git & GitHub                  |

---

## 📁 Project Structure

vaccination-portal/
│
├── backend/ # Express.js server
│ ├── routes/ # API routes (auth, appointments)
│ ├── models/ # Mongoose schemas
│ ├── server.js # Server entry point
│ └── .env # Environment variables (MongoDB URI, PORT)
│
├── react/ # React-based frontend components
├── *.html, *.js, *.css # Static HTML/CSS/JS files
├── .gitignore
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ Getting Started Locally

### 🔧 Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/arjitgupta1109/Teeka-Kendra.git
   cd Teeka-Kendra/backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend/ folder and add:

ini
Copy
Edit
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/vaccinationDB?retryWrites=true&w=majority
PORT=5000
Start the server:

bash
Copy
Edit
npm run dev
💻 Frontend Setup
If using static HTML + JS:

Open login.html or dashboard.html directly in a browser.

If using React:

Navigate to the React folder and start the app:

bash
Copy
Edit
cd react
npm install
npm start
📬 Author
Arjit Gupta
📧 guptaarjit11@gmail.com
🌐 @arjitgupta1109

