import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow  } from "swiper/modules";
import gsap from 'gsap';
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

export default function Reference({ data }) {

  const refMain = data?.wpPage?.referencesPageLayout || {};
  const digitalPortfolio = refMain?.digitalPortfolioList || [];
  const softSolMainProjectAll = data?.allWpPortfolio?.nodes || {};
  const options = data?.wp?.acfOption?.common;

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
                          : "https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/software-project-placeholder.webp"  // fallback image
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
                          : "https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/software-project-placeholder.webp"  // fallback image
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
      <section className="cta-wrapper">
        <div className="container">
          <p className="cta-title stagger-li">Need help with a project?</p>
          <p className="cta-txt stagger-li">Let’s Talk!</p>
          <div className="cta-btn-wrapp d-flex">
            <ul class="lets-talk-wrap">
              <li class="whatsapp stagger-li">
                <a href="#" class="view-all pos-ab-aligh-right ">
                  <span class="text">WhatsApp</span>
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M13.75 0C21.3441 0 27.5 6.15588 27.5 13.75C27.5 21.3441 21.3441 27.5 13.75 27.5C11.3201 27.5042 8.93282 26.8611 6.83377 25.6369L0.00552125 27.5L1.86452 20.669C0.639339 18.5693 -0.00423724 16.181 2.09944e-05 13.75C2.09944e-05 6.15588 6.1559 0 13.75 0ZM9.06402 7.2875L8.78902 7.2985C8.61122 7.31075 8.4375 7.35745 8.27752 7.436C8.12844 7.52058 7.99229 7.62616 7.87327 7.7495C7.70827 7.90488 7.61477 8.03963 7.5144 8.17025C7.00581 8.83149 6.73198 9.64331 6.73615 10.4775C6.7389 11.1512 6.9149 11.8071 7.1899 12.4204C7.75227 13.6606 8.67765 14.9737 9.89865 16.1906C10.1929 16.4835 10.4816 16.7778 10.7924 17.0514C12.3096 18.3871 14.1175 19.3503 16.0724 19.8646L16.8534 19.9843C17.1078 19.998 17.3621 19.9788 17.6179 19.9664C18.0183 19.9453 18.4092 19.8369 18.7633 19.6488C18.9432 19.5557 19.1189 19.4548 19.2899 19.3462C19.2899 19.3462 19.3481 19.3068 19.4618 19.2225C19.6474 19.085 19.7615 18.9874 19.9155 18.8265C20.031 18.7073 20.1273 18.5689 20.2043 18.4113C20.3115 18.1871 20.4188 17.7595 20.4628 17.4034C20.4958 17.1311 20.4861 16.9826 20.482 16.8905C20.4765 16.7434 20.3541 16.5907 20.2208 16.5261L19.4205 16.1672C19.4205 16.1672 18.2243 15.6461 17.4928 15.3134C17.4162 15.28 17.3342 15.2609 17.2508 15.257C17.1567 15.2472 17.0616 15.2577 16.9719 15.2878C16.8822 15.3179 16.8001 15.367 16.731 15.4316C16.7241 15.4289 16.632 15.5073 15.6379 16.7118C15.5808 16.7884 15.5022 16.8464 15.4121 16.8782C15.322 16.91 15.2245 16.9143 15.1319 16.8905C15.0423 16.8666 14.9545 16.8363 14.8693 16.7998C14.6988 16.7283 14.6396 16.7008 14.5228 16.6512C13.7333 16.3074 13.0026 15.842 12.3571 15.2721C12.1839 15.1209 12.023 14.9559 11.858 14.7964C11.3171 14.2783 10.8457 13.6922 10.4555 13.0529L10.3744 12.9222C10.317 12.834 10.2699 12.7394 10.2341 12.6404C10.1819 12.4382 10.318 12.276 10.318 12.276C10.318 12.276 10.6521 11.9102 10.8075 11.7122C10.9588 11.5197 11.0866 11.3328 11.1691 11.1994C11.3314 10.9381 11.3823 10.67 11.297 10.4624C10.912 9.52188 10.5142 8.58642 10.1035 7.656C10.0224 7.47175 9.78177 7.33975 9.56315 7.31362C9.4889 7.30446 9.41465 7.29712 9.3404 7.29163C9.15577 7.28104 8.97065 7.28287 8.78627 7.29713L9.06402 7.2875Z" fill="white"/>
                      </svg>
                  </span>
                </a>
              </li>
              <li class="contact-us stagger-li">
                <a href="javascript:void(0);" class="view-all">
                  <span class="text">Contact Us</span>
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M19.4425 13.5931L1.75468 13.5931C1.30622 13.5931 0.9303 13.4414 0.62693 13.138C0.32356 12.8347 0.171875 12.4587 0.171875 12.0103C0.171875 11.5618 0.32356 11.1859 0.62693 10.8825C0.9303 10.5792 1.30622 10.4275 1.75468 10.4275L19.4425 10.4275L11.6867 2.67177C11.3702 2.35521 11.2185 1.98589 11.2317 1.56381C11.2449 1.14173 11.4098 0.772406 11.7263 0.455846C12.0429 0.165666 12.4122 0.0139809 12.8343 0.000790847C13.2564 -0.0123992 13.6257 0.139286 13.9422 0.455846L24.3887 10.9023C24.547 11.0606 24.6591 11.2321 24.7251 11.4167C24.791 11.6014 24.824 11.7992 24.824 12.0103C24.824 12.2213 24.791 12.4192 24.7251 12.6038C24.6591 12.7885 24.547 12.96 24.3887 13.1182L13.9422 23.5647C13.6521 23.8549 13.2893 24 12.8541 24C12.4188 24 12.0429 23.8549 11.7263 23.5647C11.4098 23.2482 11.2515 22.8723 11.2515 22.437C11.2515 22.0017 11.4098 21.6258 11.7263 21.3092L19.4425 13.5931Z" fill="#4E9C5A"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li class="call-us stagger-li">
                <a href="#" class="view-all pos-ab-aligh-right ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.6 24C19.8222 24 17.0778 23.3944 14.3667 22.1833C11.6556 20.9722 9.18889 19.2556 6.96667 17.0333C4.74444 14.8111 3.02778 12.3444 1.81667 9.63333C0.605556 6.92222 0 4.17778 0 1.4C0 1 0.133333 0.666667 0.4 0.4C0.666667 0.133333 1 0 1.4 0H6.8C7.11111 0 7.38889 0.105556 7.63333 0.316667C7.87778 0.527778 8.02222 0.777778 8.06667 1.06667L8.93333 5.73333C8.97778 6.08889 8.96667 6.38889 8.9 6.63333C8.83333 6.87778 8.71111 7.08889 8.53333 7.26667L5.3 10.5333C5.74444 11.3556 6.27222 12.15 6.88333 12.9167C7.49444 13.6833 8.16667 14.4222 8.9 15.1333C9.58889 15.8222 10.3111 16.4611 11.0667 17.05C11.8222 17.6389 12.6222 18.1778 13.4667 18.6667L16.6 15.5333C16.8 15.3333 17.0611 15.1833 17.3833 15.0833C17.7056 14.9833 18.0222 14.9556 18.3333 15L22.9333 15.9333C23.2444 16.0222 23.5 16.1833 23.7 16.4167C23.9 16.65 24 16.9111 24 17.2V22.6C24 23 23.8667 23.3333 23.6 23.6C23.3333 23.8667 23 24 22.6 24Z" fill="#242424"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
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