import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

import {
  sectionA,
  sectionB,
  sectionC,
  card,
  cardImgSize,
  box,
  imgBox,
  hidden
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
            <h2></h2>
            <ul className={hidden}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
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
            <h2>Technologies/Tools used</h2>
            <ul>
              <li>Html</li>
              <li>css</li>
              <li>js</li>
              <li>Weather Map Api</li>
            </ul>
            <a
              href="https://wether-api.netlify.app/"
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
              src="../images/timart.png"
            />
          </div>
          <div className={box}>
            <h1>Timart Landing Page</h1>
            <p>
              Timart Bussiness Landing page. <br />A team work project.
            </p>
            <h2>Technologies/Tools used</h2>
            <ul>
              <li>React</li>
              <li>Nextjs</li>
              <li>Graphql</li>
              <li>Styled Component</li>
            </ul>
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
            <h2>Technologies/Tools used</h2>
            <ul>
              <li>Html</li>
              <li>css</li>
              <li>js</li>
              <li>Qoute Api</li>
            </ul>
            <a
              href="https://qut-api.netlify.app"
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
              src="../images/anatare.png"
            />
          </div>
          <div className={box}>
            <h1>Anatare Web App</h1>
            <p>
              FSI(Financial Services Innovators) & FUTMINNA INNOVATIVE
              CHALLENGE. <br />
              This a Minimum Viable Product(MVP). An app to help people from the
              northern part of Nigeria to have easy access to Insurance
              services, Savings and Investment, and Mobile cheque payment.
            </p>
            <h2>Technologies/Tools used</h2>
            <ul>
              <li>Html</li>
              <li>css</li>
              <li>js</li>
              <li>FlutterWave Api & Axamansard Api</li>
            </ul>
            <a
              href="https://anatare.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <div className={sectionB}></div>
      <div className={sectionC}></div>
    </Layout>
  );
};

export default AboutPage;
