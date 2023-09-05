import { Box } from "@mui/material";
import Header from "../components/Header";
import GeographyChart from "../components/GeographyChart";

const Geography = () => {
  return (
    <Box m="0.5rem 1rem">
      <Header
        title="Bar Chart"
        subtitle="Bar Chart to visualize the business"
      />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
