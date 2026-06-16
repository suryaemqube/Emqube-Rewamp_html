import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SeoMeta";

export default function NotFoundPage() {


  return (
    <Layout isMainParent>
      <div className="not-found-wrapper">
        <div className="container">
          <div className="not-found-inner">
            <div className="not-found-content">
              <h1 className="nf-headline">Page Not Found</h1>
              <p className="nf-sub">We have just rewamped our website!! Looks like the page has moved to a new location. </p>
              <div className="nf-actions square-fill-btn-wrapp">
                <Link to="/" className="nf-btn-primary">
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <Seo
    bodyClass={"not-found"} 
    seoData={{
      title: "404 – Page Not Found | emQube",
      metaDesc: "The page you're looking for doesn't exist. Return to emQube's homepage.",
      metaRobotsNoindex: "noindex",
      metaRobotsNofollow: "nofollow",
    }}
  />
);