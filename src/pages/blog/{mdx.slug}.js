import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import {
  blogImg,
  blogDate,
  blogImgDiv,
  photoCreditDiv,
  bodyText,
} from "./blog.module.css";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className={blogDate}>{data.mdx.frontmatter.date}</p>
      <div className={blogImgDiv}>
        <GatsbyImage
          className={blogImg}
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      </div>
      <div className={photoCreditDiv}>
        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
      </div>
      <p className={bodyText}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </p>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
