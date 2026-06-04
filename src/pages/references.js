import React, { lazy, Suspense, useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow  } from "swiper/modules";
import gsap from 'gsap';
import LazyLoad from "react-lazy-load";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "/src/assets/css/common.css";
import "/src/assets/css/inside.css";
import "/src/assets/css/reference.css";

import Seo from "../components/SeoMeta";

import Breadcrumb from "../components/Breadcrumbs";
import Layout from "../components/Layout";

gsap.registerPlugin(ScrollToPlugin);

const CtaSection = lazy(() => import("../components/Lazyload/CtaSection"));

export default function Reference({ data }) {

  const [isLoaded, setIsLoaded] = useState(false);

  const refMain = data?.wpPage?.referencesPageLayout || {};
  const digitalPortfolio = refMain?.digitalPortfolioList || [];
  const softSolMainProjectAll = data?.allWpPortfolio?.nodes || {};
  const options = data?.wp?.acfOption?.common;

  const ctaTitle = refMain?.refCtaTitle || options?.ctaSubtitle;
  const ctaText = refMain?.refCtaText || options?.ctaTitle;
  const whatsappUrl = options?.whatsappurl;
  const callNumber = options?.callnumber;
  const contactUsUrl = options?.contactusUrl;

  // onload intro section animation - starts
  useEffect(() => {
    gsap.fromTo(
      ".inside-intro-wrapper .inside-intro-title,.inside-intro-wrapper .inside-intro-txt",
      {
        filter: "blur(20px)",
        opacity: 0.6,
        // scale: 0.6
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        // scale: 1,
        duration: 1.5,
        ease: "power2.out",
        // delay: 0.2,
      }
    )
    gsap.fromTo(
      ".inside-intro-wrapper .inside-intro-count.left ul li",
      {
        x: -100,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.5,
        ease: "power2.out",
        // delay: 0.2,
      },
      "-=0.5"
    )
    gsap.fromTo(
      ".inside-intro-wrapper .inside-intro-count.right ul li",
      {
        x: 100,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out",
        // delay: 0.2,
      },
      "-=0.5"
    )
  }, [])
  // onload intro section animation - ends

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
              }, index * 250);
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


  return (
    <Layout isRef>
    <>
    

      {/* Inside intro section starts */}
      {refMain?.refIntroContent && 
        <section className="inside-intro-wrapper">
          <div className="container">
            <div className="inside-intro-title">
              <h1 dangerouslySetInnerHTML={{__html: data?.wpPage?.title}} />
            </div>
            <div className="inside-intro-txt" dangerouslySetInnerHTML={{__html: refMain?.refIntroContent}} />
          </div>
          <div className="scroll-down-arrow">
            <a href="#"
              onClick={(e) => {
                e.preventDefault();

                 if (typeof window !== "undefined") return;
                gsap.to(window, {
                  duration: 1,
                  scrollTo: {
                    y: ".soft-proj-wrapper", // target section class or id
                    offsetY: 100,       // 👈 your offset
                  },
                  ease: "power2.out",
                });
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 18L12 22M12 22L16 18M12 22V2" stroke="#4E9C5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
          </div>
        </section>
      }
      {/* Inside intro section ends */}

      {/* software project section starts */}
      {refMain?.refSoftwareProjectSectionContent && refMain?.refSoftwareProjectSectionTitle && refMain?.refSoftwareProjectList &&
        <section className="soft-proj-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: refMain?.refSoftwareProjectSectionTitle}} />
            <div dangerouslySetInnerHTML={{__html: refMain?.refSoftwareProjectSectionContent}} />
            <div className="soft-proj-list">
              <ul>
                {refMain?.refSoftwareProjectList.map((refSft,index) => (
                  <li>
                    <a href={`/${refSft?.refSoftwareProjectsCategoryLink?.slug || "software-projects"}/`}>
                      <h3 dangerouslySetInnerHTML={{__html: refSft.refSoftwareProjectsCategoryName}} />
                      <div dangerouslySetInnerHTML={{__html: refSft.refSoftwareProjectsCategoryText}} />
                    </a>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* software project section ends */}

      {/* digital portfolio section starts */}
      {refMain?.digitalPortfolioList && 
        <section className="digital-proj-wrapper-inside">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: refMain?.digitalPortfolioSectionTitle}} />
            <div dangerouslySetInnerHTML={{__html: refMain?.digitalPortfolioSectionContent}} />
            <div className="digi-proj-list">
              {/* First Row */}
              <ul>
                {digitalPortfolio.slice(0, 2).map((item, index) => (
                  <li
                    key={index}
                    className={item?.liClass}
                  >
                    <Link
                      to="/digital-portfolio"
                      // to={`/${item?.digitalPortfolioLink?.slug}/`}
                    >
                      <div className="digi-proj-txt">
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: item?.digitalPortfolioName,
                          }}
                        />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.digitalPortfolioContent,
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Second Row */}
              <ul>
                {digitalPortfolio.slice(2, 4).map((item, index) => (
                  <li
                    key={index}
                    className={item?.liClass}
                  >
                    <Link
                      to="/digital-portfolio"
                      // to={`/${item?.digitalPortfolioLink?.slug}/`}
                    >
                      <div className="digi-proj-txt">
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: item?.digitalPortfolioName,
                          }}
                        />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.digitalPortfolioContent,
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Third Row */}
              <ul>
                {digitalPortfolio.slice(4, 5).map((item, index) => (
                  <li
                    key={index}
                    className={item?.liClass}
                  >
                    <Link
                     to="/digital-portfolio"
                      // to={`/${item?.digitalPortfolioLink?.slug}/`}
                    >
                      <div className="digi-proj-txt">
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: item?.digitalPortfolioName,
                          }}
                        />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.digitalPortfolioContent,
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      }
      {/* digital portfolio section ends */}

      {/* Work Reference Section Starts */}
      {softSolMainProjectAll.length > 0 && 
      <section className="work-ref-wrapper">
        <div className="container">
          <h2 className="txt-center slide-up">Clients</h2>
          <p>An average relationship tenure with clients is 10+ years, and since 2003 we have been working with reputed companies in Dubai, UAE and USA.</p>
        </div>
        <Swiper className="workSwiper slide-up"
          modules={[Navigation, Pagination]}
          // slidesPerView={3.2}
          // loop={true}
          navigation
          // pagination
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
              slidesOffsetBefore: 20,
            },
            768: {
              slidesPerView: 1.9,
              spaceBetween: 10,
              slidesOffsetBefore: 20,
            },
            991: {
              slidesPerView: 2.5,
              slidesOffsetBefore: 145,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3.6,
              slidesOffsetBefore: 145,
              spaceBetween: 20,
            },
          }}
        >
          {softSolMainProjectAll.map((project, index) => (
            <SwiperSlide key={project.id || index}>
              <a href={`/software-projects/${project.slug}`}>
                <div className="work-wrapp">
                  {/* <div className="client-icon">
                    <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img>
                  </div> */}
                  <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                      <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className="proj-img">
                    {/* <img src="/assets/img/emove-project-img.webp" alt="Emovers"></img> */}
                    {/* <img
                      src={
                        project?.featuredImage?.node?.mediaItemUrl
                          ? project.featuredImage.node.mediaItemUrl
                          : "https://wp.emqube.com/wp-content/uploads/2026/05/software-project-placeholder.webp"  // fallback image
                      }
                      alt={
                        project?.featuredImage?.node?.altText
                          ? project.featuredImage.node.altText
                          : project?.title
                      }
                    /> */}
                    <img
                      src={
                        project?.softwarePortfolioLayout?.insidePageLisitngImage?.mediaItemUrl
                          ? project?.softwarePortfolioLayout?.insidePageLisitngImage?.mediaItemUrl
                          : "https://wp.emqube.com/wp-content/uploads/2026/05/software-project-placeholder.webp"  // fallback image
                      }
                      alt={
                        project?.softwarePortfolioLayout?.insidePageLisitngImage?.altText
                          ? project?.softwarePortfolioLayout?.insidePageLisitngImage?.altText
                          : project?.title
                      }
                    />
                  </div>
                  <div className="proj-txt" dangerouslySetInnerHTML={{ __html: project?.content }} />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      }
      {/* Work Reference Section Ends */}


      {/* home cta section starts */}
      <LazyLoad offset={0} onContentVisible={() => setIsLoaded(true)}>
        <Suspense fallback={<div>Loading...</div>}>
          <CtaSection
            ctaTitle={ctaTitle}
            ctaText={ctaText}
            whatsappUrl={whatsappUrl}
            callNumber={callNumber}
            contactUsUrl={contactUsUrl}
          />
        </Suspense>
      </LazyLoad>
      {/* home cta section ends */}

      
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
    wpPage(databaseId: {eq: 183}) {
      title
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
      referencesPageLayout {
        refIntroContent
        refCtaTitle
        refCtaText
        refSoftwareProjectSectionContent
        refSoftwareProjectSectionTitle
        refSoftwareProjectList {
          refSoftwareProjectsCategoryLink {
            ... on WpPage {
              id
              slug
            }
          }
          refSoftwareProjectsCategoryName
          refSoftwareProjectsCategoryText
        }
        digitalPortfolioSectionTitle
        digitalPortfolioSectionContent
        digitalPortfolioList {
          digitalPortfolioContent
          digitalPortfolioName
          liClass
          digitalPortfolioLink {
            ... on WpPage {
              id
              slug
            }
          }
        }
      }
    }
    wp {
      acfOption {
        common {
          ctaSubtitle
          ctaTitle
          whatsappurl
          callnumber
          contactusUrl
        }
      }
    }
    allWpPortfolio(
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "software" } } }
        }
      }
    ) {
      nodes {
        id
        content
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        softwarePortfolioLayout {
          insidePageLisitngImage {
            altText
            mediaItemUrl
          }
        }  
        title
      }
    }
  }
`;