import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="0.1rem">
      <Typography
        variant="h2"
        fontWeight="bold !important"
        color={colors.grey[100]}
        sx={{ mb: "0.2rem" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
