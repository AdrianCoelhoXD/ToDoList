const TaskModel = require('../modals/taskModals.js');

const getAllTasks = (req, res) => {
    const tasks = TaskModel.getAllTasks(); 
    res.json(tasks);
};

const getTaskById = (req, res) => {
    const taskId = req.params.id;
    const task = TaskModel.getTaskById(taskId);
    res.json(task);
};

const createTask = (req, res) => {
    const task = req.body;
    TaskModel.createTask(task);
    res.json(task);
}

const updateTask = (req, res) => {
    const taskId = req.params.id;
    const task = req.body;
    TaskModel.updateTask(taskId, task);
    res.json(task);
}

const deleteTask = (req, res) => {
    const taskId = req.params.id;
    TaskModel.deleteTask(taskId);
    res.json(taskId);
}


module.exports = {getAllTasks, getTaskById, createTask, updateTask, deleteTask};