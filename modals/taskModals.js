const tasks = []; 

const TaskModel = {
  createTask: (task) => {
    tasks.push(task);
    return task;
  },
  getAllTasks: () => {
    return tasks;
  }
};

module.exports = TaskModel;
