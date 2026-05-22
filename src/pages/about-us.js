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
// import "/src/assets/css/home.css";
import "/src/assets/css/inside.css";
import "/src/assets/css/about-us.css";

import Breadcrumb from "../components/Breadcrumbs";
import Layout from "../components/Layout";

gsap.registerPlugin(ScrollToPlugin);

export default function About({ data }) {

  const abtMain = data?.wpPage?.aboutUsPageLayout || {};
  const options = data?.wp?.acfOption?.common;

    // onload intro section animation - starts
    useEffect(() => {
      const mm = gsap.matchMedia();

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
      );

      // Breakpoint-specific animations
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // LEFT LIST
        gsap.fromTo(
          ".inside-intro-wrapper .inside-intro-count.left ul li",
          {
            x: isDesktop ? -100 : 0, // 👈 change based on screen
            y: isMobile ? 50 : 0,    // 👈 example for mobile
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.5,
            ease: "power2.out",
          }
        );

        // RIGHT LIST
        gsap.fromTo(
          ".inside-intro-wrapper .inside-intro-count.right ul li",
          {
            x: isDesktop ? 100 : 0,
            y: isMobile ? 50 : 0,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }
    );
    
      // gsap.fromTo(
      //   ".inside-intro-wrapper .inside-intro-count.left ul li",
      //   {
      //     x: -100,
      //     opacity: 0,
      //     stagger: 0.3,
      //     ease: "power2.out"
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     stagger: 0.3,
      //     duration: 0.5,
      //     ease: "power2.out",
      //     // delay: 0.2,
      //   },
      //   "-=0.5"
      // )
      // gsap.fromTo(
      //   ".inside-intro-wrapper .inside-intro-count.right ul li",
      //   {
      //     x: 100,
      //     opacity: 0,
      //     stagger: 0.3,
      //     ease: "power2.out"
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     stagger: 0.3,
      //     ease: "power2.out",
      //     // delay: 0.2,
      //   },
      //   "-=0.5"
      // )
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

  // onscroll straegic section aniamtion - starts
    
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
  
      const items = gsap.utils.toArray(".strategic-choice-wrapper li")
  
      items.forEach((item) => {
        const line = item.querySelector(".line-fill")
        const right = item.querySelector(".right")
  
        const height = right.offsetHeight - 50 // 👈 exact calc
  
        
        gsap.fromTo(line,
        { 
          scaleY: 0 
        },
        {
          scaleY: 1,
          // scrollTrigger: {
          //   trigger: item,
          //   scrub: true,
          // },
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
            toggleClass: {
              targets: [item, right], // 👈 both li + right
              className: "active",
            },
          },
        }
      )
      })
    }, [])
    // onscroll straegic section aniamtion - ends


  return (
    <Layout about>
    <>

      {/* Inside intro section starts */}
      {abtMain?.introSubtext && abtMain?.introHighlightedText && abtMain?.introStatsLeft && abtMain?.introStatsRight &&
        <section className="inside-intro-wrapper">
          <div className="container">
            <div className="inside-intro-count left">
              <ul className="d-flex">
                {abtMain?.introStatsLeft.map((statLeft, index) => (
                  <li 
                  className={` ${index === 0 ? "bg-green" : ""} ${index === 1 ? "bg-white" : ""}`} 
                  dangerouslySetInnerHTML={{__html: statLeft.introStatLeftContent}}
                  />
                ))
                }
              </ul>
            </div>
            <div className="inside-intro-title">
              <h1 dangerouslySetInnerHTML={{__html: data?.wpPage?.title}} />
              <p className="inside-sub-txt" dangerouslySetInnerHTML={{__html: abtMain?.introHighlightedText}} />
            </div>
            <div className="inside-intro-txt" dangerouslySetInnerHTML={{__html: abtMain?.introSubtext}} />
            <div className="inside-intro-count right">
              <ul className="d-flex">
                {abtMain?.introStatsRight.map((statRight, index) => (
                  <li 
                  className={` ${index === 0 ? "bg-green" : ""} ${index === 1 ? "bg-white" : ""}`} 
                  dangerouslySetInnerHTML={{__html: statRight.introStatsRightContent}}
                  />
                ))
                }
              </ul>
            </div>
          </div>
          <div className="scroll-down-arrow">
            <a href="#"
              onClick={(e) => {
                e.preventDefault();

                 if (typeof window !== "undefined") return;
                gsap.to(window, {
                  duration: 1,
                  scrollTo: {
                    y: ".about-step-wrapper", // target section class or id
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

      {/* Child page strategic choice section starts */}
      {abtMain?.emqubeFlowStep &&
        <section className="strategic-choice-wrapper about-step-wrapper">
          <div className="container">
            <ul>
              {abtMain?.emqubeFlowStep.map((flow,index) => (
              <li>
                <div className="right">
                  <span className="count">{index + 1}</span>
                  <span className="line-fill"></span>
                  <p className="title" dangerouslySetInnerHTML={{__html: flow.emqubeFlowTitle}} />
                  <div dangerouslySetInnerHTML={{__html: flow.emqubeFlowContent}} />
                </div>
              </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* Child page strategic choice section ends */}

      {/* about us calues section starts */}
      {abtMain?.emqubeValueSectionTitle && abtMain?.emqubeValueList &&
        <section className="abt-values-wrapper">
          <div className="container">
            <div className="values-left">
              <h2 dangerouslySetInnerHTML={{__html: abtMain?.emqubeValueSectionTitle}} />
            </div>
            <div className="values-right">
              <ul className="value-list">
                {abtMain?.emqubeValueList.map((value, index) => (
                  <li>
                    <div className="green-box" dangerouslySetInnerHTML={{__html: value.emqubeValueIcon}} />
                    <div className="white-box">
                      <p className="value-title" dangerouslySetInnerHTML={{__html: value.emqubeValueTitle}} />
                      <div dangerouslySetInnerHTML={{__html: value.emqubeValueText}} />
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* about us calues section ends */}

      {/* about team section starts */}
      {abtMain?.emqubeTeamSectionTitle && abtMain?.emqubeTeamMember &&
        <section className="abt-team-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: abtMain?.emqubeTeamSectionTitle}} />
            <ul className="team-mem-list">
              {abtMain?.emqubeTeamMember.map((member,index) => (
                <li>
                  <a href="#">
                    <div class="circle-wrapp">
                      <svg viewBox="0 0 280 280">
                        <circle class="dotted-ring" cx="140" cy="140" r="118"></circle>
                      </svg>
                    </div>
                    <div class="circle-wrapp green">
                      <svg viewBox="0 0 280 280">
                        <circle class="green-ring" cx="140" cy="140" r="123"></circle>
                      </svg>
                    </div>
                    <div className="mem-green-shape"></div>
                    <div className="team-mem-img">
                      <img src={member?.memberImage?.mediaItemUrl} alt={member.memberName}></img>
                    </div>
                    <div className="team-mem-name">
                      <p dangerouslySetInnerHTML={{__html: member.memberName}} />
                      <p className="mem-exp-year">{member.memberYearOfExperience} Years of <br />experience</p>
                    </div>
                  </a>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* about team section ends */}

      {/* about bottom section starts */}
      {abtMain?.emqubeEdgeSectionTitle && abtMain?.emqubeEdgeList &&
        <section className="abt-btm-wrapper">
          <div className="container">
            <div className="emqube-edge-txt">
              <p className="edge-title" dangerouslySetInnerHTML={{__html: abtMain?.emqubeEdgeSectionTitle}} />
              <ul>
                {abtMain?.emqubeEdgeList.map((edge, index) => (
                  <li dangerouslySetInnerHTML={{__html: edge.emqubeEdgeListTitle}} />
                ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* about bottom section ends */}

      {/* about emqube info section starts */}
      {abtMain?.aboutEmqubeList &&
        <section className="abt-emqube-info">
          <div className="container">
            <ul>
              {abtMain?.aboutEmqubeList.map((abtEmqube, index) => (
                <li dangerouslySetInnerHTML={{__html: abtEmqube.aboutEmqubeListTitle}} />
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* about emqube info section ends */}
      
    </>
    </Layout>
  );
}


export const data = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 176}) {
      title
      aboutUsPageLayout {
        introSubtext
        introHighlightedText
        introStatsLeft {
          introStatLeftContent
        }
        introStatsRight {
          introStatsRightContent
        }
        emqubeFlowStep {
          emqubeFlowContent
          emqubeFlowTitle
        }
        emqubeValueSectionTitle
        emqubeValueList {
          emqubeValueIcon
          emqubeValueText
          emqubeValueTitle
        }
        emqubeTeamSectionTitle
        emqubeTeamMember {
          memberDesignation
          memberName
          memberYearOfExperience
          memberImage {
            altText
            mediaItemUrl
          }
        }
        aboutEmqubeList {
          aboutEmqubeListTitle
        }
        emqubeEdgeSectionTitle
        emqubeEdgeList {
          emqubeEdgeListTitle
        }
      }
    }
    wp {
      acfOption {
        common {
          brandLogos {
            altText
            mediaItemUrl
          }
          ctaSubtitle
          ctaTitle
          whatsappurl
          callnumber
          contactusUrl
        }
      }
    }
  }
`;