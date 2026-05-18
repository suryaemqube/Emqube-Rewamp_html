/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect, useContext } from "react";
import { Slice } from "gatsby";
import { PageStateContext } from "./context/PageStateContext";

import Header from "./header"
import "./layout.css"

const Layout = ({ children, isHome, isMainParent, isChild, isMobileAppChild, isAiDevChild, isWhatsappBusChild, isBusinessIntelChild, isECommerceChild, isZoho }) => {

  const { pageState, setPageEntering, setPageActive, setPageExiting } = useContext(PageStateContext);

  const pageTransitionClasses = {
    entering: "page-entering",
    active: "page-active",
    exiting: "page-exiting",
  };
  console.log("pageState: ", pageState);

  const layoutClassName = `layout-fade ${pageTransitionClasses[pageState]}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageActive();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [pageState]);

  useEffect(() => {
    const unlisten = navigateListener();
    return () => {
      unlisten();
    };
  }, []);

  const navigateListener = () => {
    return () => {
      setPageEntering();
    };
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header /> */}
      <main className={`
        ${isHome ? "home" : ""} 
        ${isMainParent ? "inside-page" : ""} 
        ${isChild ? "inside-page inside-child" : ""}
        ${isMobileAppChild ? "inside-page inside-child mobile-app-development" : ""}
        ${isAiDevChild ? "inside-page inside-child ai-development" : ""}
        ${isWhatsappBusChild ? "inside-page inside-child whatsapp-business" : ""}
        ${isBusinessIntelChild ? "inside-page inside-child business-intelligence" : ""}
        ${isECommerceChild ? "inside-page inside-child E-Commerce" : ""}
        ${isZoho ? "inside-page inside-child zoho-product" : ""}
        `}>
        <Slice alias="navigation-bar" />
        {children}
      </main>
      <Slice alias="footer" />
    </>
  )
}

export default Layout;
