import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { happyExploring, staticImage } from "../components/layout.module.css";

const IndexPage = () => {
  return (
    <>
      <Layout name="Hi, I'm Salihu K" pageTitle="A Web Developer">
        <p className={happyExploring}>Happy exploring!</p>
        <div>
          <StaticImage
            className={staticImage}
            alt="profile-image"
            src="https://pbs.twimg.com/profile_images/1224069562066403328/9ACIy--Z_400x400.jpg"
          />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
