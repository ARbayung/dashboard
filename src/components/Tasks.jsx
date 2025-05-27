import useTasks from "../hooks/useTasks";


function Tasks() {
    // State to hold the list of tasks#
    const tasks = useTasks();
    console.log(tasks.length);

    return (
        <div className="tasks-list">
            {tasks.map((task, index) => (
                <li key={index}>
                    <div >
                        <h2>{task.task}</h2>
                        <p>{task.date}</p>
                    </div>
                </li>
            ))}
        </div>
    );
}
export default Tasks;