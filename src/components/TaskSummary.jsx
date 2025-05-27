import React from "react";
import resolvedTasks from "../hooks/resolvedTasks";
import useTasks from "../hooks/useTasks";

function TaskSummary() {
    const tasks = useTasks(); 

    return (
        <div className="tasks-summary">
        <div >
          <p style={{fontSize:"70px"}}>-</p>
          <p>Tasks summary</p>
        </div>
        <div className="tasks-summary-side">
          <h1 style={{marginRight:"12px"}}>{resolvedTasks()}</h1>
          <h1 style={{marginRight:"12px"}}>/</h1>
          <div>
            <p>{tasks.length}</p>
            <p>since last update</p>
          </div>
        </div>
      </div>
    )
}

export default TaskSummary;