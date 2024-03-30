import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Menu.scss";
const Contact = () => {
  return (
    <div
      style={{
        margin: "5% ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "20rem",
        }}
      >
        <Card.Img
          variant="top"
          src="https://media.licdn.com/dms/image/D5635AQHrx-KX1pjrtw/profile-framedphoto-shrink_200_200/0/1706347731368?e=1712401200&v=beta&t=6--T3RgfZrGZXR5bwOoTUYrY0PnRWC-ohEd4rKp21RM"
        />
        <Card.Body>
          <Card.Title>Ankit Tyagi</Card.Title>
          <Card.Text>
            Hii,I love to learn new things.Contact me on the below social media
            handles.
          </Card.Text>

          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/ankittyagi3/"
            target="_blank"
          >
            <Button
              variant="primary"
              className="navbar"
              style={{ padding: "10px 20px" }}
            >
              linkedin
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Contact;
