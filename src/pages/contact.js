import * as React from "react";
import Layout from "../components/layout";
import EmailForm from "../components/EmailForm";
import { StaticImage } from "gatsby-plugin-image";
import {
  contactDiv,
  span,
  icon,
  contactAnimate,
  contactAnimateIcon,
  reSize
} from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="Contact Info">
      <div className={contactDiv}>
        <div className={contactAnimate}>
          <div className={contactAnimateIcon}>
            <a
              href="https://twitter.com/SAkutiriko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <StaticImage
                  className={reSize}
                  alt="image-avater"
                  src="../images/twitter.png"
                />
              </span>
              Twitter
            </a>
          </div>
          <div className={contactAnimateIcon}>
            <a
              href="https://www.linkedin.com/in/salihu-abubakar-177086201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <StaticImage
                  className={reSize}
                  alt="image-avater"
                  src="../images/linkedin.png"
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>
        <div className={icon}>
          <EmailForm />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
