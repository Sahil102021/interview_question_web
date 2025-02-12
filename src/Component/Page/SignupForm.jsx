import React from "react";
import {
  Box,
  TextField,
  Button,
  Grid2,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      contact: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("User Name is required"),
      firstname: Yup.string().required("First Name is required"),
      lastname: Yup.string().required("Last Name is required"),
      contact: Yup.string().required("Contact is required"),
      password: Yup.string().required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values , {resetForm}) => {
      try {
        let submitData = await axios.post(
          "https://interview-question-api.onrender.com/users/signup",
          values
        );
        toast.success("SuccessFully Submit");
        console.log(submitData);
      } catch (error) {
        toast.error("Submission Failed!");
        console.error(error);
      }
      resetForm();
    },
  });
  return (
    <Box width="100%">
      <Container maxWidth="xl">
        <Box sx={{ mt: "100px", display: "flex", justifyContent: "center" }}>
          <Paper
            sx={{
              padding: 3,
              width: "100%",
              maxWidth: "600px",
              borderRadius: "8px",
              backgroundColor: "#FFFAEC",
            }}
          >
            <Typography variant="h5" align="center" sx={{ mb: 3 }}>
              User Information Form
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid2 container spacing={2}>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="user Name"
                    variant="outlined"
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    variant="outlined"
                    type="text"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstname &&
                      Boolean(formik.errors.firstname)
                    }
                    helperText={
                      formik.touched.firstname && formik.errors.firstname
                    }
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastname && Boolean(formik.errors.lastname)
                    }
                    helperText={
                      formik.touched.lastname && formik.errors.lastname
                    }
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="contact"
                    name="contact"
                    label="Contact"
                    variant="outlined"
                    type="number"
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.contact && Boolean(formik.errors.contact)
                    }
                    helperText={formik.touched.contact && formik.errors.contact}
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="password "
                    variant="outlined"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "#578E7E" }}
                    fullWidth
                  >
                    <Typography color="#FFFAEC">Submit</Typography>
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default SignupForm;
