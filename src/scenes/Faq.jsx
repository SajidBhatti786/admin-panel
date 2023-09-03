import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="0.5rem 1rem">
      <Header
        title="FAQ"
        subtitle="Frequently Asked Questions are answered here"
      />
      <Accordion
        sx={{
          mt: "1rem",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What is the minimum amount of money I can invest?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color={colors.grey[100]}>
            The minimum amount of money you can invest is $1000
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          mt: "0.5rem",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What types of investment products do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color={colors.grey[100]}>
            We offer a diverse range of investment products, including stocks,
            bonds, mutual funds, and tailored portfolios, designed to meet
            various investment objectives.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          mt: "0.5rem",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Is my investment portfolio managed by professionals?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color={colors.grey[100]}>
            Yes, our team of experienced financial experts actively manages your
            portfolio to optimize returns and minimize risks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          mt: "0.5rem",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            How often can I access my investment funds?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color={colors.grey[100]}>
            You can access your investment funds at any time, subject to the
            specific terms and conditions of your chosen investment product.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          mt: "0.5rem",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            What is the typical investment duration for your products?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color={colors.grey[100]}>
            Investment durations vary, but we offer both short-term and
            long-term options, allowing you to choose the investment horizon
            that suits your financial goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
