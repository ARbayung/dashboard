function resolvedTasks() {
    // Retrieve tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    const resolvedCount = storedTasks.filter(task => task.status === 'Resolved').length;

    return resolvedCount
}

export default resolvedTasks;