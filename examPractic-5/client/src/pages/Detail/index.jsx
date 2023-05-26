import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getByID } from "../../api/httpRequests";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Detail = () => {
  const [about, setAbout] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getByID(id).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <section id="detail">
      <div className="container d-flex justify-content-center">
        <Card
          sx={{
            maxWidth: 345,
            border: "0",
            textAlign:"center",
            boxShadow:"none"
          }}
        >
          <CardMedia
            component="img"
            alt="..."
            height="50"
            style={{ objectFit: "contain" }}
            image={about.imageURL}
          />
          <CardContent style={{ paddingLeft: "0", paddingRight: "0" }}>
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
          <Link to='/'>
            <Button
              style={{
                backgroundColor: "#f72149",
                display: "block",
                margin: "10px auto",
              }}
              variant="contained"
            >
              Go Back
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default Detail;
