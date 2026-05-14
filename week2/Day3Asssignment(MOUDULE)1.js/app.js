// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

//       iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again`

// TODO: Import task functions
import {addTask,getAllTasks,completeTask} from './task.js'
// Test your module system
// 1. Add some task
addTask("eating","high",'2024-12-12')
addTask("sleeping","low",'2025-01-24')
// 2. Display all tasks
const task=getAllTasks();
console.log(task)

// 3. Complete a task
completeTask(1)
// 4. Display all tasks again
console.log(task)