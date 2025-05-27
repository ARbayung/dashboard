function openTasks() {
    // Retrieve tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    const openT = storedTasks.filter(task => task.status === 'Open').length;
    const totalT = storedTasks.length - openT;


    const results = [{
        id:0,
        value: openT,
    },
    {
        id:1,
        value: totalT,
    }];
    return results;
}

export default openTasks;