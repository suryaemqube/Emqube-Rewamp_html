import React, { lazy, Suspense, useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from 'gsap';
import LazyLoad from "react-lazy-load";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../src/assets/css/common.css";
import "../../../../src/assets/css/inside.css";
import "../../../../src/assets/css/inside-child.css";

import Breadcrumb from "../../../components/Breadcrumbs";
import Layout from "../../../components/Layout";

gsap.registerPlugin(ScrollToPlugin);

const CtaSection = lazy(() => import("../../../components/Lazyload/CtaSection"));


export default function SoftwareSolChild({ data }) {

  const [isLoaded, setIsLoaded] = useState(false);

  const softSolChild = data?.wpPage?.businessApplicationDevelopment || {};
  const softSolChildProject = data?.wpPage?.businessApplicationDevelopment?.selectProjectsList || [];
  const softSolChildOther = data?.wpPage?.softwareConsultingDifferenceandPillar || {};
  const options = data?.wp?.acfOption?.common;

      // Falls back to options if page fields are empty
  const ctaTitle = softSolChild?.ctaTitle || options?.ctaTitle;
  const ctaText = softSolChild?.ctaContent || options?.ctaSubtitle;
  const whatsappUrl = options?.whatsappurl;
  const callNumber = options?.callnumber;
  const contactUsUrl = options?.contactusUrl;

  const [menuActive, setMenuActive] = useState(false);

  const [menuItemActive, setMenuItemActive] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const [activeMenus, setActiveMenus] = useState({
    level1: null,
    level2: null,
  });

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    if (typeof window !== "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") return;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") return;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    if (typeof window !== "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [activeTab, setActiveTab] = useState('custom');

  const [activeAccordion, setActiveAccordion] = useState(null);
  

  useEffect(() => {
    if (typeof window !== "undefined") return;
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleMenuItem = () => {
    setMenuItemActive(!menuItemActive);
    // setMenuItemActive(prev => (prev === menu ? null : menu));
  };

  const handleMenuClick = (level, id) => {
    setActiveMenus(prev => ({
      ...prev,
      [level]: prev[level] === id ? null : id,
      ...(level === "level1" && { level2: null }) // reset child when parent changes
    }));
  };

  const accordionItems =
  softSolChild?.faqsContent?.map((faqLst, index) => ({
    question: faqLst.faqsTitle,
    answer: faqLst.faqsContent,
  })) || [];

  const toggleAccordion = (index) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };

  const slides = [
    {
      key: 1,
      content: (
        <a href="#">
          <div className="work-wrapp">
            <div className="client-icon">
              <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img>
            </div>
            <span className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <div className="proj-img">
              <img src="/assets/img/emove-project-img.webp" alt="Emovers"></img>
            </div>
            <div className="proj-txt">
              {/* <p className="proj-name">E-Move</p> */}
              <p>Region's largest relocation company with services for furniture installation and storage</p>
            </div>
          </div>
        </a>
      )
    },
    {
      key: 2,
      content: (
        <a href="#">
          <div className="work-wrapp">
            <div className="client-icon">
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
            </div>
            <span className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <div className="proj-img">
              <img src="/assets/img/ccms-project-img.webp" alt="Emovers"></img>
            </div>
          </div>
        </a>
      )
    },
    {
      key: 3,
      content: (
        <a href="#">
          <div className="work-wrapp">
            <div className="client-icon">
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
            </div>
            <span className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <div className="proj-img">
              <img src="/assets/img/insurance-policy-project-img.webp" alt="Emovers"></img>
            </div>
          </div>
        </a>
      )
    }
  ];

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

    // onscroll straegic section aniamtion - starts
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)

      const items = gsap.utils.toArray(".strategic-choice-wrapper li")

      items.forEach((item) => {
        const line = item.querySelector(".line-fill")
        const right = item.querySelector(".right")

        const height = right.offsetHeight - 50 // 👈 exact calc

        // gsap.fromTo(
        //   line,
        //   {
        //     height: 0,
        //   },
        //   {
        //     height: height, // 👈 dynamic px value
        //     ease: "none",
        //     scrollTrigger: {
        //       trigger: item,
        //       start: "top 70%",
        //       end: "bottom 30%",
        //       scrub: true,
        //     },
        //   }
        // )
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

  // create collapsible footer menu - starts
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
      if (typeof window !== "undefined") return;
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (!isMobile) {
        setOpenIndex(null);
      }
    }, [isMobile]);

    const toggleFooter = (index) => {
      if (!isMobile) return; // ⛔ only mobile

      setOpenIndex(prev => (prev === index ? null : index));
    };

  // create collapsible footer menu - ends

  // function for icon name convert to lower case and add hiphen between 2 words = starts
  const formatIconClass = (text) => {
    if (!text) return "";

    return text
      .replace(/<[^>]*>/g, "") // remove HTML tags (important for dangerouslySetInnerHTML)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-"); // replace spaces with hyphen
  };
  // function for icon name convert to lower case and add hiphen between 2 words = ends

  return (
    <Layout isChild>
    <>

      {/* Inside intro section starts */}
      {softSolChild && 
        <section className="inside-intro-wrapper inside-child-intro-wrapper">
          <div class="container">
            <div className="breadcrumbs 123-test">
              {<Breadcrumb postId={206} />}
            </div>
            <div className="title-wrapp">
              <p className="parent-page-title">Software Development</p>
              <h1 dangerouslySetInnerHTML={{__html: softSolChild.ssspPageTitle}} />
              <p className="sub-txt w-1000" dangerouslySetInnerHTML={{__html: softSolChild.sspSubText}} />
            </div>
            <div className="scroll-down-arrow">
              <a href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== "undefined") return;
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                      y: ".intro-highlight-wrapper", // target section class or id
                      offsetY: 50,       // 👈 your offset
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
          </div>
        </section>
      }
      {/* Inside intro section ends */}

      {/* child page intro highlight section starts */}
      {softSolChild?.inroTitle && softSolChild?.introDescription &&
        <section className="intro-highlight-wrapper slide-up">
          <div className="container">
            <div className="left" dangerouslySetInnerHTML={{__html: softSolChild.inroTitle}} />
            <div className="right">
              <p dangerouslySetInnerHTML={{__html: softSolChild?.introDescription}} />
            </div>
          </div>
        </section>
      }
      {/* child page intro highlight section ends */}

      {/* Child page strategic choice section starts */}
      {softSolChild?.saContent && 
        <section className="strategic-choice-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softSolChild.strategicAdvanageTitle}} />
            <div className="sub-txt" dangerouslySetInnerHTML={{__html: softSolChild.strategicAdvanageSubtext}} />
            <div className="module-list">
              <ul>
                {softSolChild?.saContent.map((strategList,index) => (
                  <li>
                    <div className="left" dangerouslySetInnerHTML={{__html: strategList.saImage}} />
                    <div className="right">
                      <span className="line-fill"></span>
                      <p className="title" dangerouslySetInnerHTML={{__html: strategList.saTitle}} />
                      <p dangerouslySetInnerHTML={{__html: strategList.saDescription}} />
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* Child page strategic choice section ends */}


      {/* crm services section starts */}
      {softSolChildOther?.fivePillars && softSolChildOther?.pillarsList &&
        <section className="zoho-crm-wrapper piller-wrapper" id="zoho-crm-service">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softSolChildOther?.fivePillars}} />
            <ul className="crm-list">
              {softSolChildOther?.pillarsList.map((crmLst,index) => (
                <li
                  key={index}
                  className={
                    index === softSolChildOther?.pillarsList.length - 1
                      ? "w-100"
                      : ""
                  }
                >
                  <div className="top">
                    <span className="icon" dangerouslySetInnerHTML={{__html: crmLst.zohoCrmServiceListImage}} />
                    <h3 dangerouslySetInnerHTML={{__html: crmLst.title}} />
                  </div>
                  <div className="bottom" dangerouslySetInnerHTML={{__html: crmLst.description}} />
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* crm services section ends */}

      {/* engagement model starts */}
      {softSolChild?.emContent && 
        <section className="engagement-model-wrapp">
          <div className="container">
            <h2 className="txt-center slide-up" dangerouslySetInnerHTML={{__html: softSolChild.engagementModelSectionTitle}} />
            <div className="eng-model-step">
              <ul>
                {softSolChild?.emContent.map((engModel,index) => (
                  <li className="stagger-li">
                    <div className="step-count">{index + 1}</div>
                    <div className="eng-icon" dangerouslySetInnerHTML={{__html: engModel.emImage}} />
                    <div className="eng-title">
                      <h5 dangerouslySetInnerHTML={{__html: engModel.emTitle}} />
                      <div dangerouslySetInnerHTML={{__html: engModel.emDescription}} />
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* engagement model ends */}

      {/* partner with emqube section starts */}
      <section className="inside-partner-wrapper">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{__html: softSolChild?.wpTitle}} />
          <ul className="partner-single">
            <li className="stagger-li">
              <div className="part-txt" dangerouslySetInnerHTML={{__html: softSolChild?.wpText}} />
              <div className="part-img">
                {/* <img src={softProductChild?.zohoWhyPartnerSectionRightLogo?.mediaItemUrl} alt={softProductChild?.zohoWhyPartnerSectionTitle}></img> */}
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* partner with emqube section ends */}

      {/* industry section starts */}
      {softSolChild?.selectIndustries &&  
        <section className="insudtry-list-wrapp">
          <h2 className="slide-up">Work Reference</h2>
          <div className="container">
            {softSolChild?.selectIndustries &&
              <div className="left">
                <h3 className="slide-up">Industries</h3>
                <ul>
                  {softSolChild?.selectIndustries.map((indeslst,index) => {  
                    const iconName = formatIconClass(indeslst);
                    return (
                      <li className="stagger-li">
                        <span className="icon">
                          <i className={`icon icon-${iconName}`}></i>
                        </span>
                        <p dangerouslySetInnerHTML={{__html: indeslst}} />
                      </li>
                    );
                  })
                  }
                </ul>
              </div>
            }
          </div>
        </section>
      }
      {/* industry section ends */}

      {/* Work Reference Section Starts */}
      <section className="work-ref-wrapper">
        <div className="container">
          <h2 className="txt-center slide-up">Select Projects</h2>
        </div>
        {windowWidth > 991 && softSolChildProject.length <= 3 ? (
          <div className="centered-slides slide-up">
            {softSolChildProject.map((project, index) => (
              <div key={project.id || index} className="swiper-slide" style={{ flex: '0 0 auto' }}>
                <a href="/software-projects">
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
                      <img
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
                      />
                    </div>
                    <div className="proj-txt" dangerouslySetInnerHTML={{ __html: project?.content }} />
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            className="workSwiper slide-up"
            navigation
            pagination
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
            {softSolChildProject.map((project, index) => (
              <SwiperSlide key={project.id || index}>
                <a href="/software-projects">
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
                      <img
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
                      />
                    </div>
                    <div className="proj-txt" dangerouslySetInnerHTML={{ __html: project?.content }} />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
      {/* Work Reference Section Ends */}

      {/* faq section starts */}
      {softSolChild?.faqsContent &&
        <section className="faq-accordion-wrapper">
          <div className="container">
            <div className="faq-accordion">
              <h2 className="faq-heading slide-up">Frequently Asked Questions</h2>
              <div className="accordion-list slide-up">
                {accordionItems.map((item, index) => (
                  <div className={`accordion-item ${activeAccordion === index ? 'active' : ''}`} key={index}>
                    <button type="button" className="accordion-trigger" onClick={() => toggleAccordion(index)}>
                      <span>{item.question}</span>
                      <span className="accordion-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" viewBox="0 0 46 20" fill="none">
                          <path d="M22.7883 18.5158C22.6016 18.5181 22.4163 18.4812 22.2446 18.4076C22.0729 18.334 21.9185 18.2253 21.7914 18.0885L8.97291 5.27006C8.4032 4.70035 8.4032 3.8173 8.97291 3.24759C9.54262 2.67789 10.4257 2.67789 10.9954 3.24759L22.8168 15.069L34.6098 3.27608C35.1795 2.70637 36.0626 2.70637 36.6323 3.27608C37.202 3.84579 37.202 4.72884 36.6323 5.29855L23.8138 18.117C23.529 18.4018 23.1587 18.5443 22.8168 18.5443L22.7883 18.5158Z" fill="#707070"/>
                        </svg>
                      </span>
                    </button>
                    <div className="accordion-panel" style={{ maxHeight: activeAccordion === index ? '260px' : '0px' }}>
                      <p dangerouslySetInnerHTML={{__html: item.answer}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      }
      {/* faq section ends */}

      {/* home cta section starts */}
      <LazyLoad onContentVisible={() => setIsLoaded(true)}>
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


export const data = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 206}) {
      title
      businessApplicationDevelopment {
        ssspPageTitle
        sspSubText
        inroTitle
        introDescription
        strategicAdvanageSubtext
        strategicAdvanageTitle
        saContent {
          saDescription
          saImage
          saTitle
        }
        engagementModelSectionTitle
        emContent {
          emDescription
          emImage
          emTitle
        }
        wpTitle
        wpText
        wpwContent {
          wpwDescription
          wpwTitle
          wpwImage {
            altText
            mediaItemUrl
          }
        }
        selectIndustries
        selectApplications
        faqsContent {
          faqsContent
          faqsTitle
        }
        ctaContent
        ctaTitle
        selectProjectsList {
          ... on WpPortfolio {
            id
            content
            title
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
      softwareConsultingDifferenceandPillar {
        description
        featureTable {
          digitalTransformation
          feature
          traditionalBusinessAutomation
        }
        fivePillars
        title
        pillarsList {
          description
          title
        }
      }
    }
    wp {
      acfOption {
        common {
          whatsappurl
          callnumber
          contactusUrl
        }
      }
    }
  }
`;