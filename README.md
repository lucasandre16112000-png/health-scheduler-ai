# 🏥 Health Scheduler AI

**Intelligent Appointment Scheduling System for Clinics and Hospitals**

An advanced full-stack application that uses AI algorithms to automatically optimize doctor schedules, reduce idle time, and improve patient experience.

---

## 📋 Table of Contents

1. [Quick Start (For Everyone)](#quick-start-for-everyone)
2. [What You Need to Install](#what-you-need-to-install)
3. [Step-by-Step Installation Guide](#step-by-step-installation-guide)
4. [Running the Application](#running-the-application)
5. [Features](#features)
6. [How to Use](#how-to-use)
7. [Technology Stack](#technology-stack)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start (For Everyone)

### The Easiest Way - 2 Clicks! ⚡

If you just want to run the application without any technical knowledge:

1. **Download** the project from GitHub
2. **Double-click** `INSTALL.bat`
3. **Wait** for everything to install automatically (5-10 minutes)
4. **Done!** The application opens automatically in your browser

**That's it!** No terminal, no commands needed. Everything is automatic.

### What Happens When You Click INSTALL.bat:

```
[1/7] Creating installation folder...
[2/7] Downloading project from GitHub...
[3/7] Extracting files...
[4/7] Copying files to installation folder...
[5/7] Cleaning up old dependencies...
[6/7] Installing dependencies (npm install)...
[7/7] Starting servers...

Waiting for server to start...
Server is ready!

✓ Browser opens automatically
✓ Application is running!
```

---

## 📦 What You Need to Install

Before running Health Scheduler AI, you need to have these programs installed on your Windows computer:

### 1. **Node.js** (Required)
- **What is it?** A runtime environment for running JavaScript applications
- **Why do you need it?** Health Scheduler AI is built with Node.js
- **Download:** https://nodejs.org/
- **Version:** v18 or higher (LTS recommended)
- **Installation Steps:**
  1. Go to https://nodejs.org/
  2. Click the **LTS** button (Long Term Support)
  3. Download the Windows installer
  4. Run the installer (.msi file)
  5. Click "Next" through all steps
  6. **IMPORTANT:** Check the box "Add Node.js to PATH" ✓
  7. Click "Install"
  8. Wait for completion
  9. Click "Finish"

**Verify Installation:**
- Open Command Prompt (search for "cmd")
- Type: `node --version`
- You should see a version number like `v20.11.0`

### 2. **Git** (Optional but Recommended)
- **What is it?** A version control system
- **Why do you need it?** To download the project from GitHub
- **Download:** https://git-scm.com/
- **Installation:** Click "Next" through all steps
- **Note:** If you don't have Git, you can download the project as ZIP instead

---

## 📝 Step-by-Step Installation Guide

### For Complete Beginners

#### Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Click the **LTS** button (Long Term Support - recommended)
3. Download the installer for Windows
4. Run the installer (`.msi` file)
5. Click "Next" for each step
6. **IMPORTANT:** When you see "Add Node.js to PATH", make sure it's checked ✓
7. Click "Install"
8. Wait for installation to complete
9. Click "Finish"

**Verify it worked:**
- Open Command Prompt (search for "cmd" in Windows)
- Type: `node --version`
- You should see a version number like `v20.11.0`

#### Step 2: Download Health Scheduler AI

**Option A: Download as ZIP (Easiest)**
1. Go to https://github.com/lucasandre16112000-png/health-scheduler-ai
2. Click the green **Code** button
3. Click **Download ZIP**
4. Extract the ZIP file to a folder (e.g., Desktop or Documents)
5. You should see a folder called `health-scheduler-ai-main`

**Option B: Using Git (For Advanced Users)**
1. Open Command Prompt
2. Navigate to where you want to install:
   ```
   cd Desktop
   ```
3. Clone the repository:
   ```
   git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
   ```
4. Navigate to the project:
   ```
   cd health-scheduler-ai
   ```

#### Step 3: Run INSTALL.bat

1. Open the `health-scheduler-ai` folder
2. Find the file named `INSTALL.bat`
3. **Double-click** it
4. A command window will open
5. Wait for the installation to complete (this may take 5-10 minutes)
6. You'll see messages like:
   - `[OK] Dependencies installed`
   - `Waiting for server to start...`
   - `Server is ready!`
7. Your browser will automatically open to http://localhost:3002
8. **Done!** The application is running!

---

## ▶️ Running the Application

### Using INSTALL.bat (Recommended) ⭐

This is the easiest way for everyone:

1. Navigate to the Health Scheduler AI folder
2. **Double-click** `INSTALL.bat`
3. A window will open showing the installation progress
4. The script will:
   - Create the installation folder
   - Download the project from GitHub
   - Extract all files
   - Clean up old dependencies
   - Install npm packages
   - Start both frontend and backend servers
   - Wait for servers to be ready
   - Open your browser automatically
5. Your browser will open to http://localhost:3002
6. **You're ready to use Health Scheduler AI!**

### What INSTALL.bat Does (Technical Details):

```batch
Step 1: Create folder at C:\Users\[YourName]\health-scheduler-ai
Step 2: Download from GitHub
Step 3: Extract ZIP file
Step 4: Copy files to permanent location
Step 5: Remove old node_modules and package-lock.json
Step 6: Run npm install (installs all dependencies)
Step 7: Start npm run dev (starts both servers)

Then it:
- Waits for port 3002 to be ready (frontend)
- Waits for port 5000 to be ready (backend)
- Opens http://localhost:3002 in your browser
- Shows "Server is ready!" message
```

### Manual Running (For Developers)

If you want to run it manually without INSTALL.bat:

1. Open Command Prompt
2. Navigate to the project folder:
   ```
   cd C:\Users\YourName\health-scheduler-ai
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to: http://localhost:3002

---

## ✨ Features

### 📅 Intelligent Scheduling
- Automatic appointment optimization
- AI-powered schedule recommendations
- Conflict detection and resolution

### 👥 Patient Management
- Complete patient registration
- Medical history tracking
- Contact information management

### 👨‍⚕️ Doctor Management
- Doctor profile management
- Specialty tracking
- CRM number verification
- Schedule management

### 📊 Analytics Dashboard
- Real-time scheduling metrics
- Doctor utilization rates
- Patient appointment statistics
- Visual charts and reports

### ⚙️ AI Optimization
- Automatic schedule analysis
- Idle time detection
- Smart recommendations
- Efficiency improvements

### 🔍 Appointment Management
- Create new appointments
- Edit existing appointments
- Cancel appointments
- View appointment details

---

## 🎮 How to Use the Application

### 1. Access the Dashboard
- Open your browser
- Go to: http://localhost:3002
- You'll see the main dashboard

### 2. Create a Patient
1. Click on **"Patients"** in the menu
2. Click **"New Patient"** button
3. Fill in the information:
   - Name (required)
   - Email (required)
   - Phone (required)
   - CPF (required)
4. Click **"Create"**

### 3. Create a Doctor
1. Click on **"Doctors"** in the menu
2. Click **"New Doctor"** button
3. Fill in the information:
   - Name (required)
   - Specialty (required)
   - CRM (required)
   - Email (required)
   - Phone (required)
4. Click **"Create"**

### 4. Create an Appointment
1. Click on **"Appointments"** in the menu
2. Click **"New Appointment"** button
3. Select:
   - Patient
   - Doctor
   - Date
   - Time
4. Click **"Create"**

### 5. View Analytics
1. Click on **"Dashboard"** in the menu
2. See real-time statistics:
   - Total appointments
   - Doctor utilization
   - Patient statistics
   - Schedule efficiency

### 6. Get AI Recommendations
1. Go to **"Optimization"** section
2. View AI-generated recommendations
3. See efficiency improvements
4. Apply suggested changes

---

## 🌐 Access URLs

| Service | URL |
|---------|-----|
| **Frontend** | http://localhost:3002 |
| **Backend API** | http://localhost:5000 |
| **Health Check** | http://localhost:5000/api/health |

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Concurrently** - Run multiple processes simultaneously

### Tools
- **npm** - Package manager
- **Nodemon** - Auto-reload during development

---

## 📁 Project Structure

```
health-scheduler-ai/
├── src/                 # Frontend React code
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── server/             # Backend Express code
│   ├── routes/         # API routes
│   ├── index.js        # Server entry point
│   └── data.js         # Sample data
├── public/             # Static files
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── INSTALL.bat         # Automatic installer (FINAL VERSION)
└── README.md           # This file
```

---

## 🐛 Troubleshooting

### Problem: "Node.js not found"
**Solution:**
1. Make sure Node.js is installed
2. Restart your computer
3. Open Command Prompt and type: `node --version`
4. If it still doesn't work, reinstall Node.js
5. Make sure you checked "Add Node.js to PATH" during installation

### Problem: "Port 3002 is already in use"
**Solution:**
1. Close any other applications using port 3002
2. Or change the PORT in the application
3. Restart the application

### Problem: "Port 5000 is already in use"
**Solution:**
1. Close any other applications using port 5000
2. Or change the PORT in the backend
3. Restart the application

### Problem: "INSTALL.bat closes immediately"
**Solution:**
1. Make sure Node.js is installed
2. Check your internet connection
3. Try running as Administrator
4. Check the error messages in the console

### Problem: "Application won't start"
**Solution:**
1. Open Command Prompt in the project folder
2. Run: `npm install`
3. Run: `npm run dev`
4. Check for error messages

### Problem: "npm: command not found"
**Solution:**
1. Node.js is not installed or not in PATH
2. Download and install from https://nodejs.org/
3. Make sure to check "Add Node.js to PATH"
4. Restart your computer
5. Try again

### Problem: "Cannot find module"
**Solution:**
1. Run: `npm install`
2. Wait for all dependencies to install
3. Try running again

### Problem: "Browser shows error when opening"
**Solution:**
1. Wait a bit longer - the server may still be starting
2. Refresh the page (F5)
3. Close and restart INSTALL.bat
4. Make sure ports 3002 and 5000 are not in use

### Problem: "Buttons don't work"
**Solution:**
1. Clear your browser cache (Ctrl + Shift + Delete)
2. Reload the page (F5)
3. Restart the application

---

## 📊 Sample Data

The application comes with pre-loaded sample data:

### Patients
- Maria Silva (CPF: 123.456.789-00)
- João Santos (CPF: 987.654.321-00)
- Ana Costa (CPF: 456.789.123-00)

### Doctors
- Dr. Carlos Mendes (Cardiology)
- Dr. Patricia Lima (Pediatrics)
- Dr. Roberto Alves (Orthopedics)

---

## 🔧 Development Commands

### Install Dependencies
```bash
npm install
```

### Run in Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Production Build
```bash
npm start
```

---

## 🚀 Next Steps

After successful installation:

1. **Explore the Dashboard** - See real-time statistics
2. **Create Sample Data** - Add patients and doctors
3. **Create Appointments** - Schedule some appointments
4. **View Analytics** - Check the statistics
5. **Get Recommendations** - See AI suggestions

---

## 📞 Support

If you encounter any issues:

1. Check the Troubleshooting section above
2. Make sure Node.js is installed correctly
3. Try running INSTALL.bat again
4. Check your internet connection
5. Restart your computer if something doesn't work

---

## 📄 License

This project is provided as-is for healthcare appointment scheduling purposes.

---

## 🎯 Getting Started Now

### The Fastest Way:
1. Download `INSTALL.bat`
2. Double-click it
3. Done! ✅

### Questions?
- Check the Troubleshooting section
- Make sure Node.js is installed
- Restart your computer if something doesn't work

---

**Happy scheduling! 🏥**

For more information, visit: https://github.com/lucasandre16112000-png/health-scheduler-ai
