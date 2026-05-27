import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import gsap from 'gsap';
import { navigate } from "gatsby";
import { useFormik, Formik } from "formik";
import axios from "axios";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "/src/assets/css/common.css";
import "/src/assets/css/inside.css";
import "/src/assets/css/inside-child.css";
import "/src/assets/css/contact-us.css";

import Seo from "../components/SeoMeta";
import Breadcrumb from "../components/Breadcrumbs";
import Layout from "../components/Layout";

const WEBSITE_URL = process.env.GATSBY_BASE_URL

gsap.registerPlugin(ScrollToPlugin);


export default function ContactUs({ data }) {

  const contactPage = data?.wpPage || {};

  const [token, setToken] = useState("");
  const [captchaExpression, setCaptchaExpression] = useState("");
  const [captchaResult, setCaptchaResult] = useState("");
  const [formMessage, setFormMessage] = useState("");
  
  // common script for all animation - starts
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".slide-up, .fade-in, .stagger-li"
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {

            if (entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("visible");
            }

            if (entry.target.classList.contains("slide-up")) {
              entry.target.classList.add("visible");
            }

            if (entry.target.classList.contains("stagger-li")) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, index * 100);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // 🧹 CLEANUP (VERY IMPORTANT in React)
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };

  }, []);
  // common script for all animation - ends

  // onload intro section animation - starts
  useEffect(() => {
    gsap.fromTo(
      ".inside-intro-wrapper",
      {
        filter: "blur(10px)",
        opacity: 0.6,
        // scale: 0.6
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        // scale: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.2,
      }
    )
  }, [])
  // onload intro section animation - ends

 
  return (
    <Layout isThankyou>
    <>
      
      {/* Inside intro section starts */}
      <section className="inside-intro-wrapper inside-child-intro-wrapper contact-intro-wrapper">
        <div class="container">
          <div className="breadcrumbs">
              {<Breadcrumb postId={7860} />}
            </div>
          <h1>Thank You</h1>
          <p className="sub-txt txt-center">for sending your requirements, we will get back to you as soon as possible.</p>
        </div>
      </section>
      {/* Inside intro section ends */}

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
    wpPage(databaseId: {eq: 7860}) {
      content
      title
      slug
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