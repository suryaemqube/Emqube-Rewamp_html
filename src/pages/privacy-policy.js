import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";

import "/src/assets/css/common.css";
import "/src/assets/css/inside.css";
import "/src/assets/css/about-us.css";

import Seo from "../components/SeoMeta";
import Layout from "../components/Layout";


export default function About({ data }) {


  return (
    <Layout isCmnPage>
    <>

      {/* Inside intro section starts */}
      <section className="inside-intro-wrapper">
        <div className="container">
          <div className="inside-intro-title">
            <h1 dangerouslySetInnerHTML={{__html: data?.wpPage?.title}} />
          </div>
        </div>
      </section>
      {/* Inside intro section ends */}
      
      <section className="page-content">
        <div className="container">
          <div className="page-txt" dangerouslySetInnerHTML={{__html: data?.wpPage?.content}} />
        </div>
      </section>
    </>
    </Layout>
  );
}

export const Head = ({ data }) => (
  <Seo
    seoData={data?.wpPage?.seo || []}
    pageUrl={data?.wpPage?.uri}
  >

  </Seo>
);


export const data = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 3}) {
      title
      content
      uri 
      seo {
        canonical
        opengraphDescription
        opengraphImage {
          altText
          mediaItemUrl
          height
          width
          mediaType
        }
        opengraphSiteName
        opengraphTitle
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphUrl
        opengraphModifiedTime
        opengraphType
        title
        metaDesc
        schema {
          raw
        }
      }
    }
  }
`;