Project Setup
Creating the Project:

Start by creating a new React project using Create React App.
Install necessary dependencies: React, Redux, React-Redux, and Bootstrap.
cd to-do
1.npx create-react-app to-do
npm install redux react-redux
npm install redux

and then Creating style the application use Bootstrap 
1. Setup Bootstrap
Install Bootstrap via npm:
npm install bootstrap

Create Components (TaskInput, TaskList)

Task Input Component (src/components/TaskInput.js)
This component handles adding new tasks.
Purpose:
1.Maintain the current input value in the local state.
2.Dispatch an action to add a new task to the Redux store when the user presses Enter or clicks the "Add Task" button.

Task List Component (src/components/TaskList.js)
This component displays the list of tasks and provides options to complete, delete, or edit tasks.
Purpose:
1.Display tasks from the Redux store.
2.Allow users to complete, delete, or edit tasks.
3.Use a Bootstrap modal for editing tasks.

Purpose:
1.Use Redux Provider to make the store available to all nested components.
2.Render the TaskInput and TaskList components within a Bootstrap card layout.

Setup Redux for State Management( Action , Reducer , and Store)

Redux Actions (src/redux/actions.js)
These are the actions that describe changes that can happen in the application.
Purpose:
1.Define actions to add, delete, toggle, and update tasks.

 Redux Reducer (src/redux/reducers.js)
The reducer updates the state based on the actions.
Purpose:
1.Handle the logic to update the state of tasks based on the actions.

Redux Store (src/redux/store.js)
The store holds the state of the application.
Purpose:
1.Create the Redux store with the task reducer.

Implement Task Addition, Deletion, and Editing

to-do/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md


Start the Application:

Run the following command to start the development server:
cd to-do
npm start

