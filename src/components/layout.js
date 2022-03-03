import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import favicon from "../images/favicons/favicons.ico";
import { Helmet } from "react-helmet";
import {
  heading,
  navLinks,
  mainContent,
  navLinkText,
  siteTitle,
  navLinkList,
} from "./layout.module.css";

const Layout = ({ pageTitle, children, name }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkList}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkList}>
            <Link to="/about" className={navLinkText}>
              About Me
            </Link>
          </li>
          <li className={navLinkList}>
            <Link to="/contact" className={navLinkText}>
              Contact Me
            </Link>
          </li>
          <li className={navLinkList}>
            <Link to="/projects" className={navLinkText}>
              Projects
            </Link>
          </li>
          <li className={navLinkList}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className={mainContent}>
        <title>{pageTitle} | PortFolio</title>
        <header className={siteTitle}>{name}</header>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
