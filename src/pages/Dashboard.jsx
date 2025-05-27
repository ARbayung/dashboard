import React from "react";
import Banner from "../components/Banner";
import TicketSummary from "../components/TicketSummary";
import TaskSummary from "../components/TaskSummary";
import useTasks from "../hooks/useTasks";
import TableTemplate from "../components/TableTemplate"; // Assuming TableTemplate is imported here

function Dashboard() {
  const tasks = useTasks();
  console.log(tasks.length);
  
  const columns = [
    { field: "task", headerName: "Task", width: 300 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
  ];

  return (
    <div className="dashboard">
      <Banner />
    
      <div className="dashboard-section-top">
        <div className="summary-section">
          <TicketSummary />
        </div>
        <div className="summary-section">
          <TaskSummary />
        </div>

        <div className="dashboard-table">
          <TableTemplate rows={tasks} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;