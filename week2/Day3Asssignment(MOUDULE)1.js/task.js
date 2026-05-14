// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

//        ii. task.js - Task operations
// TODO: Import validator functions
// import { ... } from './validator.js';
//ii. task.js - Task operations
// TODO: Import validator functions

import {validateTitle,validatePriority,validateDueDate} from './validator.js';
 const tasks = [];
// 1. Add new task
function addTask(title,priority,dueDate) {
//Validate using imported functions
 // If valid, add to tasks array
 if(!validateTitle()&&!validatePriority()&&!validateDueDate()){
 return "Invalid task"
}
const newtask={title,priority,dueDate,completed:false};
tasks.push(newtask);
return "Task added";
// Return success/error message
}
                    
// 2. Get all tasks
function getAllTasks() {
return tasks;
}
                    
// 3. Mark task as complete
function completeTask(taskId) {
// // Find task and mark as complete
 const task=tasks.find(ele=>ele.id===taskId)
 if(!task)return "task not completed";
task.completed=trues
return "task completed";
}



// Export functions
export {addTask,getAllTasks,completeTask}
