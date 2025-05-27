import React from 'react';
import DataGridTemplate from '../components/DataGridTemplate.jsx';
import data from '../data/staff.json';

function Directory() {  
    const rows = data.map((staff) => ({
    id: staff.id,
    name: staff.name,
    email: staff.email,
    role: staff.role,
    status: staff.status,
    lastLogin: staff.lastLogin,
    driveUsage: staff.driveUsage,
    device: staff.device
  }));
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'lastLogin', headerName: 'Last Login', width: 180 },
    { field: 'driveUsage', headerName: 'Drive Usage', width: 130 },
    { field: 'device', headerName: 'Device', width: 150 }
  ];
  return (
    <div className="directory">
      <h1>Directory</h1>
      <DataGridTemplate
        rows = {rows}
        columns = {columns}
      />
    </div>
  );
}   

export default Directory;