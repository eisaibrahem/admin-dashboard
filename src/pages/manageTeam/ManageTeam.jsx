/* eslint-disable no-unused-vars */
// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme, Typography, Box } from "@mui/material";
import {
  AdminPanelSettings,
  AdminPanelSettingsOutlined,
  LockOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

export default function ManageTeam() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "Id",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "Age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "Phone",
      headerName: "Phone",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      width: 200,
      renderCell: ({ row: { Access } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              bgcolor:
                Access === "admin"
                  ? theme.palette.primary.main
                  : Access === "manager"
                  ? theme.palette.secondary.main
                  : "#3daf8a",
              p: "5px",
              borderRadius: "6px",
              color: "white",
              width: "99px",
              m: "10px",
              mx: "auto",
            }}
          >
            {Access === "admin" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {Access === "manager" && <SecurityOutlined fontSize="small" />}
            {Access === "user" && <LockOutlined fontSize="small" />}
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              {Access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto", overflow: "hiden" }}>
      <Header title="Manage Team" subTitle="Frequently Asked Questions Page" />

      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
