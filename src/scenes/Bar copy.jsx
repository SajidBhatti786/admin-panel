import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../components/BarChart";

const Bar = () => {
  return (
    <Box m="0.5rem 1rem">
      <Header
        title="Bar Chart"
        subtitle="Bar Chart to visualize the business"
      />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
