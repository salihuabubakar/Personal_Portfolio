import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

import {
  sectionA,
  sectionB,
  card,
  cardImgSize,
  box,
  imgBox,
} from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="Projects">
      <div className={sectionA}>
        <div className={card}>
          <div className={imgBox}>
            <StaticImage
              className={cardImgSize}
              alt="image-avater"
              src="../images/hub.png"
            />
          </div>
          <div className={box}>
            <h1>GitHub Repository</h1>
            <p>
              This is my github repository where all my projects source codes
              resides
            </p>
            <a
              href="https://github.com/salihuabubakar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        </div>
        <div className={card}>
          <div className={imgBox}>
            <StaticImage
              className={cardImgSize}
              alt="image-avater"
              src="../images/weather.png"
            />
          </div>
          <div className={box}>
            <h1>Weather App</h1>
            <p>
              This web app provides you with the accurate weather details of a
              particular region.
            </p>
            <a
              href="https://wether-api.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <div className={sectionB}>
        <div className={card}>
          <div className={imgBox}>
            <StaticImage
              className={cardImgSize}
              alt="image-avater"
              src="../images/timart.png"
            />
          </div>
          <div className={box}>
            <h1>Timart Landing Page</h1>
            <p>
              Timart Bussiness Landing page. <br/>
              A team work project.
            </p>
            <a
              href="https://www.gettimart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        </div>
        <div className={card}>
          <div className={imgBox}>
            <StaticImage
              className={cardImgSize}
              alt="image-avater"
              src="../images/qoute.png"
            />
          </div>
          <div className={box}>
            <h1>Qoute Bank App</h1>
            <p>
              Web app that is full of generated qoutes from an api call with
              just a button click
            </p>
            <a
              href="https://qut-api.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
