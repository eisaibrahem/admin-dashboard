// @ts-nocheck
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";

export default function Contact() {
  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto", overflow: "hiden" }}>
      <Header title="Contact " subTitle="Frequently Asked Questions Page" />

      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
