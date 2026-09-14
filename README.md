# React Task Manager

A simple, clean, and modern task management web application built with React and Vite.

## Features

- ✅ Add new tasks with an input field and Add button
- ✅ Press Enter to quickly add tasks
- ✅ Mark tasks as complete with a checkbox
- ✅ Delete tasks with a delete button
- ✅ View task statistics (remaining and total)
- ✅ Empty state message
- ✅ Responsive design for desktop and mobile
- ✅ Clean, modern UI with no external dependencies

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation & Running

1. Navigate to the project directory:
```bash
cd react-task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

## Project Structure

```
react-task-manager/
├── src/
│   ├── App.jsx          # Main component with task logic
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
├── public/              # Static files
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── index.html           # HTML entry point
└── README.md            # This file
```

## How It Works

### State Management
- **`task`**: Stores the current input value
- **`tasks`**: Stores the array of all tasks

### Key Functions
- **`handleAddTask()`**: Creates a new task with unique ID
- **`handleToggleTask(id)`**: Marks/unmarks a task as complete
- **`handleDeleteTask(id)`**: Removes a task from the list
- **`handleKeyPress()`**: Adds task on Enter key press

### React Concepts Used
- **useState Hook**: Manages task and input state
- **.map()**: Renders task list dynamically
- **.filter()**: Calculates remaining tasks and deletes tasks
- **Conditional Rendering**: Shows empty state when no tasks
- **Immutable State Updates**: Creates new arrays/objects instead of mutating state
- **Event Handling**: Manages input, button clicks, and keyboard events

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Technologies Used
- React 18
- Vite
- JavaScript (ES6+)
- CSS3

## License
Open source - feel free to use and modify!
