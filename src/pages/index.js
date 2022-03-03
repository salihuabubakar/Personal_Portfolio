import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { happyExploring, staticImage } from "../components/layout.module.css";

const IndexPage = () => {
  return (
    <>
      <Layout name="Hi, I'm Salihu K" pageTitle="A Web Developer">
        <p className={happyExploring}>Happy exploring!</p>
        <motion.div
          animate={{
            scale: [1, 0, 0, 0, 0, 0, 1],
            rotate: [0, 0, 360, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <StaticImage
            className={staticImage}
            alt="profile-image"
            src="https://pbs.twimg.com/profile_images/1224069562066403328/9ACIy--Z_400x400.jpg"
          />
        </motion.div>
      </Layout>
    </>
  );
};

export default IndexPage;
