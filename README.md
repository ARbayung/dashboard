
# Dashboard

The **IT Support Dashboard** is a web application designed to manage IT support tickets, tasks, and a directory of colleagues. The application allows users to create, view, update, and delete support tickets, track task progress, and access contact information for colleagues.

Key functionalities include:

- **Support Tickets**: Create and manage IT support tickets. View ticket status on the dashboard or the tickets page.
- **Task Manager**: Create, update, and delete tasks. The dashboard dynamically updates to reflect task progress and statuses.
- **Directory Page**: Access a directory of colleagues with information loaded from a JSON file.
- **Dynamic UI**: Real-time updates for all data using local storage and JSON, with tables and small info components on the dashboard.

The app utilizes **Material-UI (MUI)** for table components, hooks like **useState** and **useEffect**, and reusable components for efficient development.

---
## Features

- **Ticket Management**: 
  - Create and view support tickets.
  - Track ticket status and progress.
- **Task Manager**: 
  - Create, delete, or mark tasks as complete.
  - Automatically update the task table and dashboard components.
- **Directory**:
  - View a list of colleagues with their details.
  - Data stored in a JSON file for easy access and updates.
- **Dynamic Dashboard**:
  - Displays real-time updates on the dashboard for both tickets and tasks.
  - Utilizes local storage for saving ticket and task data.

---
## Technologies used#
- **React**: For building the user interface.
- **Material UI (MUI)**: For styling and table components.
- **React Hooks**: For state management and side effects (e.g., `useState`, `useEffect`).
- **Local Storage**: For storing tickets and task data locally on the user’s browser.
- **JSON**: For storing directory information.
- **react-router**: For navigating app.

---
## Installation

To run the application locally, follow these steps:

1. **Unzip the project folder** to your preferred directory.
2. **Install dependencies**:
   - Open a terminal and navigate to the project directory.
   - Run the following command to install the required dependencies:
     ```bash
     npm install
     ```
3. **Start the application**:
   - After installing the dependencies, start the application using:
     ```bash
     npm start
     ```
   - This will start the development server and open the app in your browser.

4. **Node.js**: Make sure you have Node.js(v22.14.0) installed on your machine. If not, you can download it from [here](https://nodejs.org/).

---
## Assumptions

- The application relies on local storage for persisting data between sessions.
- Node.js is installed on the machine where the application is being set up.
- The dashboard is for a mock account.
## Future Enhancements
- **User Authentication**: Resonsiveness, fit to all device types.
- **Accessability considerations**: Semantic HTML, Keyboard navigation, Color contrast, ARIA Attributes.
- **User Authentication**: Allow users to sign up, log in, and manage their own tickets and tasks.
- **Backend Integration**: Implement a backend API to persist ticket and task data in a database (e.g., MongoDB, Firebase, etc.) instead of relying on local storage.
- **Notification System**: Add real-time notifications for updates on ticket statuses or task completions.
- **Search and Filter Options**: Allow users to search for specific tickets or tasks and filter them by status, priority, or assignee.
- **Advanced UI Features**: Include more complex UI elements such as drag-and-drop for task management, sorting for the data tables, graphs, more meaningful components in dashboard.
## Dependencies
To run the application, you need to install the following dependencies:

- **Node**: v22.14.0
- **UUID**: not shown in dependencies list but works  without.

```json
"dependencies": {
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "@mui/material": "^7.1.0",
  "@mui/styled-engine-sc": "^7.1.0",
  "@mui/x-charts": "^8.3.0",
  "@mui/x-data-grid": "^8.3.0",
  "@testing-library/dom": "^10.4.0",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.3.0",
  "@testing-library/user-event": "^13.5.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router": "^7.6.0",
  "react-router-dom": "^6.30.0",
  "react-scripts": "5.0.1",
  "styled-components": "^6.1.18",
  "web-vitals": "^2.1.4"
}

