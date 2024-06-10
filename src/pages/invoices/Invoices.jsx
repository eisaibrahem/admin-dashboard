// @ts-nocheck
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "../../pages/contact/data";
import Header from "../../components/Header";

export default function Invoices() {
  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto", overflow: "hiden" }}>
      <Header title="Invoices" subTitle="Frequently Asked Questions Page" />

      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
