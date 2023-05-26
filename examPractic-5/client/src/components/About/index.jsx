import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { deleteAbout, getAll } from "../../api/httpRequests";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  const [gymAbouts, setGymAbouts] = useState([]);
  useEffect(() => {
    getAll().then((data) => setGymAbouts(data));
  }, [setGymAbouts]);
  return (
    <section id="about">
      <div className="container">
        <div
          className="section-title text-center"
          style={{ padding: "0 15px 50px" }}
        >
          <h1
            style={{
              fontSize: "36px",
              color: "rgb(34, 34, 34)",
              lineHeight: "43.2px",
              fontWeight: "600",
            }}
          >
            We care about what we offer
          </h1>
          <p style={{ color: "rgb(119, 119, 119)", fontSize: "14px" }}>
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="searchDiv">
          <TextField
            onChange={(e) => {
              getAll(e.target.value).then((data) => setGymAbouts(data));
            }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            type="text"
            className={style.search}
          />
        </div>

        <Grid container spacing={2}>
          {gymAbouts &&
            gymAbouts.map((about) => {
              return (
                <Grid key={about._id} item lg={4} md={6} sm={12}>
                  <Card
                    className={style.card}
                    sx={{
                      maxWidth: 345,
                      border: "0",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="..."
                      height="50"
                      style={{ objectFit: "contain" }}
                      image={about.imageURL}
                    />
                    <CardContent
                      style={{ paddingLeft: "0", paddingRight: "0" }}
                    >
                      <Typography
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "rgb(34, 34, 34)",
                          padding: "10px 0",
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {about.title}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "15px",
                          lineHeight: "22.75px",
                          fontWeight: "300",
                          color: "rgb(119, 119, 119)",
                        }}
                        component="p"
                      >
                        {about.desc}
                      </Typography>
                    </CardContent>
                    <Link to={`/${about._id}`}>
                      <Button
                        style={{ backgroundColor: "#f72149", display:"block", margin:"10px auto" }}
                        variant="contained"
                      >
                        More Detail
                      </Button>
                    </Link>

                    <Button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteAbout(about._id);
                            setGymAbouts(
                              gymAbouts.filter((x) => x._id != about._id)
                            );
                            Swal.fire(
                              "Deleted!",
                              "Your file has been deleted.",
                              "success"
                            );
                          }
                        });
                      }}
                      style={{ backgroundColor: "#f72149", width:"130px" }}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </Card>
                </Grid>
              );
            })}{" "}
        </Grid>
      </div>
    </section>
  );
};

export default About;
