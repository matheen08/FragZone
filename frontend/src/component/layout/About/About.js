import React from "react";
import "./AboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagramFounder = () => {
    window.location = "https://instagram.com/itsmatheen";
  };

  const visitInstagramCoFounder = () => {
    window.location = "https://instagram.com/jawad_sait_";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dea2ey2tq/image/upload/v1658679775/products/IMG_8983_3_-01_db99lb.jpg"
              alt="Founder"
            />
            <Typography>Mohammed Matheen Pasha</Typography>
            <InstagramIcon />
            <Button onClick={visitInstagramFounder} color="primary">
              Visit Instagram
            </Button>
            <span>
              The Reason you are here, because of my passion towards perfumes..!
            </span>
          </div>
          <hr />
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dea2ey2tq/image/upload/v1659190552/products/236864620_4049583918484693_5047366393311182213_n_ki3xmo.jpg"
              alt="Co-Founder"
            />
            <Typography>Md Jawad Sait</Typography>
            <InstagramIcon />
            <Button onClick={visitInstagramCoFounder} color="primary">
              Visit Instagram
            </Button>
            <span>
              Making a fine scent is like making fine precious stone gems. A
              sharp gem specialist will have an eye for the ideal precious stone
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
