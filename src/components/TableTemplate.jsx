import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

function TableTemplate({rows, columns}) {
    const paginationModel = { page: 0, pageSize: 15 };
    return(
        <Paper sx={{ height: "100%", width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
            />
        </Paper>
    )
}

export default TableTemplate;