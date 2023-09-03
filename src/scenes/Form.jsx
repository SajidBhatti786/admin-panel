import React from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
const inintialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone Number is not Valid")
    .required("Contact is required"),
  address1: yup.string().required("Address is required"),
  address2: yup.string().required("Address is required"),
});
function Form() {
  const isNonMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="0.5rem 1rem">
      <Header title="CREATE USER" subtitle="Create New User Profile" />
      <Formik
        initialValues={inintialValues}
        onSubmit={handleFormSubmit}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="1rem"
                spacing={{ xs: 2, md: 3 }}
                gridTemplateColumns={
                  isNonMobile ? undefined : "repeat(12, 1fr)"
                }
                sx={{
                  "& > div": {
                    // gridColumn: isNonMobile ? "span 12" : "span 12",
                  },
                }}
              >
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: isNonMobile ? undefined : "span 6" }}
                  InputLabelProps={{
                    style: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 6" }}
                  InputLabelProps={{
                    style: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  label="Email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: isNonMobile ? undefined : "span 12" }}
                  InputLabelProps={{
                    style: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  label="Contact Number"
                  name="contact"
                  value={values.contact}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.contact && Boolean(errors.contact)}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: isNonMobile ? undefined : "span 12" }}
                  InputLabelProps={{
                    style: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  label="Address 1"
                  name="address1"
                  value={values.address1}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.address1 && Boolean(errors.address1)}
                  helperText={touched.address1 && errors.address1}
                  sx={{ gridColumn: isNonMobile ? undefined : "span 12" }}
                  InputLabelProps={{
                    style: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  label="Address 2"
                  name="address2"
                  value={values.address2}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.address2 && Boolean(errors.address2)}
                  helperText={touched.address2 && errors.address2}
                  sx={{ gridColumn: isNonMobile ? undefined : "span 12" }}
                  InputLabelProps={{
                    style: { color: colors.grey[100] },
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="0.4rem">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
}

export default Form;
