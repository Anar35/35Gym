import React from "react";
import style from "./index.module.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Course = () => {
  return (
    <section id="course">
      <div className="container">
        <div
          className="section-title text-center"
          style={{ padding: "0 15px 70px" }}
        >
          <h1
            style={{
              fontSize: "36px",
              color: "rgb(34, 34, 34)",
              lineHeight: "43.2px",
              fontWeight: "600",
            }}
          >
            Top Courses That are open for Students
          </h1>
          <p style={{ color: "rgb(119, 119, 119)", fontSize: "14px" }}>
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                border: "0",
              }}
            >
              <div className="img" style={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  className={style.img}
                  alt="..."
                  height="206"
                  style={{ objectFit: "cover", transition: ".5s" }}
                  image="https://preview.colorlib.com/theme/gym/img/c1.jpg"
                />
              </div>
              <CardContent
                href="#"
                component="a"
                style={{
                  paddingLeft: "0",
                  paddingRight: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(34, 34, 34)",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Running Classes
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    fontWeight: "600",
                    color: "rgb(246, 33, 75)",
                  }}
                  component="span"
                >
                  $275
                </Typography>
              </CardContent>
              <span className={style.coursBtn}>Course Available</span>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                border: "0",
              }}
            >
              <div className="img" style={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  className={style.img}
                  alt="..."
                  height="206"
                  style={{ objectFit: "cover", transition: ".5s" }}
                  image="https://preview.colorlib.com/theme/gym/img/c2.jpg"
                />
              </div>
              <CardContent
                href="#"
                component="a"
                style={{
                  paddingLeft: "0",
                  paddingRight: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(34, 34, 34)",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Weight Lifting Classes
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    fontWeight: "600",
                    color: "rgb(246, 33, 75)",
                  }}
                  component="span"
                >
                  $200
                </Typography>
              </CardContent>
              <span className={style.coursBtn}>Course Available</span>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                border: "0",
              }}
            >
              <div className="img" style={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  className={style.img}
                  alt="..."
                  height="206"
                  style={{ objectFit: "cover", transition: ".5s" }}
                  image="https://preview.colorlib.com/theme/gym/img/c3.jpg"
                />
              </div>
              <CardContent
                href="#"
                component="a"
                style={{
                  paddingLeft: "0",
                  paddingRight: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(34, 34, 34)",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Body Combat Classes
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    fontWeight: "600",
                    color: "rgb(246, 33, 75)",
                  }}
                  component="span"
                >
                  $225
                </Typography>
              </CardContent>
              <span className={style.coursBtn}>Course Available</span>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                border: "0",
              }}
            >
              <div className="img" style={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  className={style.img}
                  alt="..."
                  height="206"
                  style={{ objectFit: "cover", transition: ".5s" }}
                  image="https://preview.colorlib.com/theme/gym/img/c4.jpg"
                />
              </div>
              <CardContent
                href="#"
                component="a"
                style={{
                  paddingLeft: "0",
                  paddingRight: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(34, 34, 34)",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Organic Yoga Classes
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    fontWeight: "600",
                    color: "rgb(246, 33, 75)",
                  }}
                  component="span"
                >
                  $300
                </Typography>
              </CardContent>
              <span className={style.coursBtn}>Course Available</span>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                border: "0",
              }}
            >
              <div className="img" style={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  className={style.img}
                  alt="..."
                  height="206"
                  style={{ objectFit: "cover", transition: ".5s" }}
                  image="https://preview.colorlib.com/theme/gym/img/c5.jpg"
                />
              </div>
              <CardContent
                href="#"
                component="a"
                style={{
                  paddingLeft: "0",
                  paddingRight: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(34, 34, 34)",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Raw Fitness Classes
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    fontWeight: "600",
                    color: "rgb(246, 33, 75)",
                  }}
                  component="span"
                >
                  $500
                </Typography>
              </CardContent>
              <span className={style.coursBtn}>Course Available</span>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Card
              className={style.card}
              sx={{
                maxWidth: 345,
                border: "0",
              }}
            >
              <div className="img" style={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  className={style.img}
                  alt="..."
                  height="206"
                  style={{ objectFit: "cover", transition: ".5s" }}
                  image="https://preview.colorlib.com/theme/gym/img/c6.jpg"
                />
              </div>
              <CardContent
                href="#"
                component="a"
                style={{
                  paddingLeft: "0",
                  paddingRight: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(34, 34, 34)",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Body Building Classes
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "21.6px",
                    fontWeight: "600",
                    color: "rgb(246, 33, 75)",
                  }}
                  component="span"
                >
                  $250
                </Typography>
              </CardContent>
              <span className={style.coursBtn}>Course Available</span>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Course;
