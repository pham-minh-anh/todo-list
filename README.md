# Mem's Todo List

A small todo app that runs in the browser. You can sort your tasks into projects, give them due dates and priorities, and mark them done. Everything is saved in your browser's `localStorage`, so your todos are still there after you reload the page.

**Live demo:** https://pham-minh-anh.github.io/todo-list/

## Features

- **Projects**: keep todos in separate projects. There is always a default **Inbox** project, and it can't be deleted.
  - Project names must be unique.
  - You can delete a project in two ways: remove it **with all its todos**, or remove it and **move its todos to the Inbox**.
- **Todos**: each todo has:
  - a title (required)
  - a description (optional; click a todo to show or hide it)
  - a due date (optional)
  - a priority: Low, Medium (default) or High
  - the project it belongs to
- **Status**: click a todo's status button to switch it between *Pending* and *Completed*. A todo whose due date has passed shows as *Overdue*.
- **Sorting**: todos are sorted by due date, earliest first. Todos with no due date go last. Completed todos are listed apart from open ones.
- **Edit and delete**: change any field of a todo, including which project it's in, or delete it.
- **Saved data**: projects and todos are stored in `localStorage` under the keys `projects` and `todos`.

## Tech stack

- Plain JavaScript (ES modules), HTML and CSS. No framework.
- [Webpack 5](https://webpack.js.org/) with `html-webpack-plugin`, `css-loader` and `style-loader`.
- `webpack-dev-server` for local development.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (a recent LTS version) and npm

### Install

```bash
git clone https://github.com/pham-minh-anh/todo-list.git
cd todo-list
npm install
```

### Run locally

```bash
npm run dev
```

This starts the webpack dev server. Open the URL it prints, usually http://localhost:8080.

### Build

```bash
npm run build
```

The bundled app is written to `dist/`, as `index.html` and `main.js`.

> **Browser note:** the dialogs open and close using the HTML `command` / `commandfor` attributes. These only work in recent browser versions, so use an up-to-date Chrome, Edge, Firefox or Safari.

## Project structure

```
todo-list/
├── src/
│   ├── index.js        # Entry point: loads data, renders the UI, attaches event listeners
│   ├── template.html   # HTML template used by html-webpack-plugin
│   ├── styles.css      # App styles
│   ├── dom.js          # Rendering and UI event handling (projects, todos, forms, dialogs)
│   ├── app.js          # Logic that uses both projects and todos (project deletion options)
│   ├── projects.js     # Project model and functions to create, read and delete projects
│   ├── todos.js        # Todo model and functions to create, read, update, delete and move todos
│   ├── date.js         # Overdue check and due-date sorting
│   └── storage.js      # Helpers that wrap localStorage
├── webpack.config.js
└── package.json
```

## Data model

```js
// Project
{ id: string, name: string }

// Todo
{
  id: string,
  title: string,
  description: string,
  dueDate: string | null,   // "YYYY-MM-DD"
  priority: -1 | 0 | 1,     // Low | Medium | High
  projectId: string,        // "inbox" by default
  done: boolean
}
```

## Resetting data

To clear everything, open your browser's DevTools console on the app page and run:

```js
localStorage.removeItem("todos");
localStorage.removeItem("projects");
```

Then reload the page.

## License

ISC
