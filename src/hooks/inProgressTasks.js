function inProgressTasks() {
    // Retrieve tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    const inProgressT = storedTasks.filter(task => task.status === 'In Progress').length;
    const totalT = storedTasks.length - inProgressT;


    const results = [{
        id:0,
        value: inProgressT,
    },
    {
        id:1,
        value: totalT,
    }];
    return results;
}

export default inProgressTasks;