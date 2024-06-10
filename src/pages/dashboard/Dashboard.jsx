import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <Box>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
      >
        <Header
          title="Dashboard"
          subTitle="Frequently Asked Questions Page"
          isDashboard={true}
        />
        <Button variant="contained" sx={{ px: 1 }}>
          <DownloadOutlined />
          Download Report
        </Button>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
