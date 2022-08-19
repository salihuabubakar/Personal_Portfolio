import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import {
  meImg,
  aboutMeDiv,
  greeting,
  aboutMeText,
} from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className={aboutMeDiv}>
        <StaticImage
          className={meImg}
          alt="profile-image"
          src="../images/me.jpg"
        />
        <div>
          <h3 className={greeting}>Salihu Abubakar Kutiriko, 21</h3>
          <p className={aboutMeText}>
            I am a creative Web Developer from <strong>Nigeria</strong> who
            designs, develops and writes resourceful tech blogs. <br/>
            I'm passionate, dedicated and consistent in deliverying excellency. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
