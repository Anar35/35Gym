import React from "react";
import { useFormik } from "formik";
import { AddSchema } from "../../validation/AddValidation";
import { Button, TextField } from "@mui/material";
import { postAbout } from "../../api/httpRequests";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AddGymAbout = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      imageURL: "",
    },
    onSubmit: handleSubmit,
    validationSchema: AddSchema,
  });
  function handleSubmit(values, actions) {
    postAbout(values);
    navigate("/");
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Posted:)",
      showConfirmButton: false,
      timer: 1500,
    });
    actions.resetForm();
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Add Offer</title>
        </Helmet>
      </HelmetProvider>
      
      <section className="add">
        <h1 className="text-uppercase">Add About For Gym</h1>
        <form className="add-form" onSubmit={formik.handleSubmit}>
          <TextField
            style={{ marginTop: "30px", width: "300px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.title}
            name="title"
            id="standard-basic"
            label="Title"
            variant="standard"
            required
            type="text"
            error={formik.errors.title && formik.touched.title ? true : false}
          />
          {formik.errors.title && formik.touched.title && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.title}</p>
          )}
          <TextField
            style={{ marginTop: "30px", width: "300px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.desc}
            name="desc"
            id="standard-basic"
            label="Description"
            variant="standard"
            required
            type="text"
            error={formik.errors.desc && formik.touched.desc ? true : false}
          />
          {formik.errors.desc && formik.touched.desc && (
            <p style={{ color: "red", margin: "0" }}>{formik.errors.desc}</p>
          )}
          <TextField
            style={{ marginTop: "30px", width: "300px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.imageURL}
            name="imageURL"
            id="standard-basic"
            label="Image URL"
            variant="standard"
            required
            type="text"
            error={
              formik.errors.imageURL && formik.touched.imageURL ? true : false
            }
          />
          {formik.errors.imageURL && formik.touched.imageURL && (
            <p style={{ color: "red", margin: "0" }}>
              {formik.errors.imageURL}
            </p>
          )}
          <Button
            style={{ marginTop: "30px", width: "200px" }}
            variant="contained"
            color="success"
            type="submit"
          >
            Add
          </Button>
        </form>
      </section>
    </>
  );
};

export default AddGymAbout;
