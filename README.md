Professional Full-Stack Developer Portfolio

A high-performance, single-page web portfolio built with **React** and styled dynamically with **Tailwind CSS**. This project features fluid responsive layouts, custom navigation states, and a client-side scroll-tracking engine built entirely without external npm packages.

---

## Project Overview

This application serves as a modern, production-ready portfolio built to showcase technical skills and web engineering practices. 

Instead of treating sections as independent static pages, the app unifies the entire user experience into an adaptive timeline layout. It balances heavy technical backend context with clean interactive frontend elements, serving as a hub for personal projects, code repositories, and structural engineering expertise.

### Core Features
**Fluid Mobile Layout:** Fluid container systems ensure that the user interface scales elegantly across modern smartphone viewports without clipping.
**State-Driven Hamburger Menu:** Mobile layouts replace bulky link bars with an interactive menu drawer that handles seamless path jumping and automatic closing.
**Synchronized Address Bar:** The browser URL bar rewrites its anchor history smoothly (`#about`, `#projects`) in real-time as users scroll past section boundaries.

---

## 🛠️ Technologies Used

The project architecture relies strictly on modern web utilities to ensure rapid local rendering and clean asset loading:

* **React (v18+):** Leverages functional components, declarative layout mapping, and conditional UI blocks.
  * `useState` Hook: Manages reactive storage for user input text and mobile navbar visibility toggles.
  * `useEffect` Hook: Tracks window system side-effects, initializing local layout viewport parameters on startup.
* **Vite:** Serves as the modern local compilation engine, enabling ultra-fast Hot Module Replacement (HMR) during local engineering updates.
* **Tailwind CSS:** A utility-first styling framework used to write entirely responsive UI structures via native CSS modifiers (e.g., matching desktop layout grids directly with mobile-first column rules).

---

## How to Run the Project Locally

Follow these sequential steps to replicate the project architecture and run the development environment on your local system:

### 1. Prerequisites
Ensure you have **Node.js** (LTS version) installed on your machine. You can verify your installation by running `node -v` in your terminal.

### 2. Clone the Repository
Open your terminal and pull the project code files to your local folder framework:
```bash

### 3. Enter the Project Root Directory
Navigate directly into the main directory where your configuration files sit:
cd your-portfolio-repo

4. Install Project Dependencies
Run the installation script to fetch and align all structural packages (React, Vite, Tailwind assets):

npm install

5. Launch the Development Server
Execute the Vite local script runner to boot up the portfolio app:
npm run dev

6. Once initialized, open your browser and go to the link output in your terminal window (typically http://localhost:5173)
