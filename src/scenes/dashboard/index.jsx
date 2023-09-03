import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
function Dashboard() {
  return (
    <Box margin="0.5rem 1rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
}

export default Dashboard;
