const path = require('path');
const { writeJsonToFile } = require('../../fs-utils');
const { readJsonFromFile } = require('../../fs-utils');

const pathToTaskDb = path.join(__dirname, '../../db/db_task.json')

const getTasks = ()=>readJsonFromFile(pathToTaskDb)
const addTask = async(name)=>{
    const tasks = await getTasks();
    console.log(tasks)
    tasks.push(name);
    return writeJsonToFile (pathToTaskDb,tasks)
}
const updateTask = async (newTask,indexTask)=>{
    const tasks = await getTasks();
    tasks[indexTask].title =newTask.title;
    return writeJsonToFile(pathToTaskDb,tasks)
}
const deleteTask = async (indexTask)=>{
    const tasks = await getTasks();
    tasks.splice(indexTask, 1)
    return writeJsonToFile(pathToTaskDb, tasks)
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
};