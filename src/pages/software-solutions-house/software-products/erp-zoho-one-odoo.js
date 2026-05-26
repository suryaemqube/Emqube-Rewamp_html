import React, { lazy, Suspense, useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { navigate } from "gatsby";
import { useFormik, Formik } from "formik";
import axios from "axios";
import LazyLoad from "react-lazy-load";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../src/assets/css/common.css";
import "../../../../src/assets/css/inside.css";
import "../../../../src/assets/css/inside-child.css";
import "../../../../src/assets/css/zoho-product.css";

import Breadcrumb from "../../../components/Breadcrumbs";
import Layout from "../../../components/Layout";


const WEBSITE_URL = process.env.GATSBY_BASE_URL;

gsap.registerPlugin(ScrollToPlugin);

const CtaSection = lazy(() => import("../../../components/Lazyload/CtaSection"));

export default function SftProduct({ data }) {

  const [isLoaded, setIsLoaded] = useState(false);

  const softProductChild = data?.wpPage?.zohoProductPageLayout || {};
  const softSolChildProject = data?.wpPage?.zohoProductPageLayout?.selectProjectList || [];
  const EcommPLatform = data?.wpPage?.shopifyMangentoWoocommerce || {};
  const options = data?.wp?.acfOption?.common;

  // Falls back to options if page fields are empty
  const ctaTitle = softProductChild?.zohoCtaTitle || options?.ctaTitle;
  const ctaText = softProductChild?.zohoCtaText || options?.ctaSubtitle;
  const whatsappUrl = options?.whatsappurl;
  const callNumber = options?.callnumber;
  const contactUsUrl = options?.contactusUrl;

  const pageTitle = data?.wpPage?.title;

  const [token, setToken] = useState("");
  const [captchaExpression, setCaptchaExpression] = useState("");
  const [captchaResult, setCaptchaResult] = useState("");
  const [formMessage, setFormMessage] = useState("");


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

  const accordionItems = softProductChild?.zohoFaqList.map((faqLst, index) => ({
    question: faqLst.zohoFaqQuestion,
    answer: faqLst.zohoFaqAnswer,
  }));

  const toggleAccordion = (index) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };



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

  // onclick scroll to specific section - starts
  const getOffset = () => {
     if (typeof window !== "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) {
      return 130; // mobile
    } else if (window.matchMedia("(max-width: 1080px)").matches) {
      return 80; // tablet / iPad
    } else {
      return 100; // desktop
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = getOffset();
      const position = element.offsetTop - offset;

       if (typeof window !== "undefined") return;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };
  // onclick scroll to specific section - ends

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

  // Fetch JWT Token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(
          `${process.env.GATSBY_MAIN_URL}/.netlify/functions/fghdfgrtbsrd`
        );
        const { token } = await response.json();
        setToken(token);
      } catch (error) {
        console.error("Token fetch error:", error);
      }
    };
    fetchToken();
  }, []);

  // Generate Captcha
  useEffect(() => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptchaExpression(`${a} + ${b}`);
    setCaptchaResult((a + b).toString());
  }, []);

  // Validation
  const validate = (values) => {
    const errors = {};

    if (!values["first-name"]) errors["first-name"] = "Required";
    if (!values["last-name"]) errors["last-name"] = "Required";
    if (!values["company-name"]) errors["company-name"] = "Required";

    if (!values["company-email"]) {
      errors["company-email"] = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values["company-email"])) {
      errors["company-email"] = "Invalid email address";
    }

    if (!values["mobile-number"]) errors["mobile-number"] = "Required";
    if (!values["your-message"]) errors["your-message"] = "Required";

    if (!values.captcha) {
      errors.captcha = "Required";
    } else if (values.captcha !== captchaResult) {
      errors.captcha = "Incorrect captcha result";
    }

    return errors;
  };

  // Formik
  const formik = useFormik({
    initialValues: {
      "first-name": "",
      "last-name": "",
      "company-name": "",
      "company-email": "",
      "mobile-number": "",
      "your-message": "",
      "page-title": pageTitle || "",  // <-- set from prop
      captcha: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      document.querySelector(".zoho-form .wpcf7-spinner").style.display = "block";
      const submitBtn = document.querySelector(".zoho-form .submit-btn-wrapp .wpcf7-submit");
      submitBtn.setAttribute("disabled", "disabled");
      submitBtn.classList.add("button-disabled");

      const bodyFormData = new FormData();
      bodyFormData.set("first-name", values["first-name"]);
      bodyFormData.set("last-name", values["last-name"]);
      bodyFormData.set("company-name", values["company-name"]);
      bodyFormData.set("company-email", values["company-email"]);
      bodyFormData.set("mobile-number", values["mobile-number"]);
      bodyFormData.set("your-message", values["your-message"]);
      bodyFormData.set("page-title", pageTitle || "");  // <-- send page title
      bodyFormData.set("_wpcf7_unit_tag", "wpcf7-f7114-o1");

      axios({
        method: "post",
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/7114/feedback`,
        data: bodyFormData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          document.querySelector(".zoho-form .wpcf7-spinner").style.display = "none";
          submitBtn.removeAttribute("disabled");
          submitBtn.classList.remove("button-disabled");

          if (response.data.status === "mail_sent") {
            formik.resetForm();
            setFormMessage("");
            if (typeof window !== "undefined") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "formSubmission",
                formId: "7114",
                formName: "Zoho Contact Form",
              });
            }
            navigate("/thankyou/");
          } else if (response.data.status === "validation_failed") {
            setFormMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.error("Form submission error:", error);
          document.querySelector(".zoho-form .wpcf7-spinner").style.display = "none";
          submitBtn.removeAttribute("disabled");
          submitBtn.classList.remove("button-disabled");
          setFormMessage("Something went wrong. Please try again.");
        });
    },
  });

  return (
    <Layout isZoho>
    <>

      {/* Inside intro section starts */}
      {softProductChild && 
        <section className="inside-intro-wrapper inside-child-intro-wrapper">
          <div class="container">
            <div className="breadcrumbs 123-test">
              {<Breadcrumb postId={127} />}
            </div>
            <div className="title-wrapp">
              <p className="parent-page-title">Software Product</p>
            </div>
            <div className="product-head-wrapper">
              <div className="left">
                {softProductChild?.productLogo || softProductChild.productTag &&
                  <div className="zoho-left-top-wrapp">
                    {softProductChild?.productLogo && 
                      <div className="zoho-logo">
                        <img src={softProductChild?.productLogo?.mediaItemUrl} alt={softProductChild?.zohoPageTitle}></img>
                      </div>
                    }
                    {softProductChild.productTag && 
                    <div className="partner-tag">
                      <img src="https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/authorized-icon.svg" alt="Authorized Partner"></img>
                      <p dangerouslySetInnerHTML={{__html: softProductChild.productTag}} />
                    </div>
                    }
                  </div>
                }
                <h1 dangerouslySetInnerHTML={{__html: softProductChild?.zohoPageTitle}} />
                <p className="sub-txt" dangerouslySetInnerHTML={{__html: softProductChild.zohoIntroText}} />
                <div className="zoho-interlinks">
                  <ul>
                    <li><a onClick={() => scrollToSection("zoho-crm-module")}>Zoho CRM Modules & Features</a></li>
                    <li><a onClick={() => scrollToSection("zoho-crm-service")}>Our Specialized CRM Services</a></li>
                    <li><a onClick={() => scrollToSection("zoho-eng-model")}>Our Proven Engagement Model</a></li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="form-wrap">
                  <div className="wpcf7 js">
                    <Formik>
                      <form
                        className="wpcf7-form init"
                        onSubmit={formik.handleSubmit}
                        aria-label="Contact form"
                      >
                        <div className="form-wrapper">
                          <ul>

                            {/* First Name */}
                            <li className="w-50">
                              <span className="wpcf7-form-control-wrap" data-name="first-name">
                                <input
                                  size="40" maxLength="400"
                                  className={
                                    formik.errors["first-name"]
                                      ? "wpcf7-form-control wpcf7-text wpcf7-not-valid"
                                      : "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                  }
                                  aria-required="true"
                                  type="text"
                                  name="first-name"
                                  placeholder="First name"
                                  value={formik.values["first-name"]}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors["first-name"] && (
                                  <span className="wpcf7-not-valid-tip">
                                    {formik.errors["first-name"]}
                                  </span>
                                )}
                              </span>
                            </li>

                            {/* Last Name */}
                            <li className="w-50">
                              <span className="wpcf7-form-control-wrap" data-name="last-name">
                                <input
                                  size="40" maxLength="400"
                                  className={
                                    formik.errors["last-name"]
                                      ? "wpcf7-form-control wpcf7-text wpcf7-not-valid"
                                      : "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                  }
                                  aria-required="true"
                                  type="text"
                                  name="last-name"
                                  placeholder="Last Name"
                                  value={formik.values["last-name"]}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors["last-name"] && (
                                  <span className="wpcf7-not-valid-tip">
                                    {formik.errors["last-name"]}
                                  </span>
                                )}
                              </span>
                            </li>

                            {/* Company Name */}
                            <li className="w-100">
                              <span className="wpcf7-form-control-wrap" data-name="company-name">
                                <input
                                  size="40" maxLength="400"
                                  className={
                                    formik.errors["company-name"]
                                      ? "wpcf7-form-control wpcf7-text wpcf7-not-valid"
                                      : "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                  }
                                  aria-required="true"
                                  type="text"
                                  name="company-name"
                                  placeholder="Company Name"
                                  value={formik.values["company-name"]}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors["company-name"] && (
                                  <span className="wpcf7-not-valid-tip">
                                    {formik.errors["company-name"]}
                                  </span>
                                )}
                              </span>
                            </li>

                            {/* Email */}
                            <li className="w-100">
                              <span className="wpcf7-form-control-wrap" data-name="company-email">
                                <input
                                  size="40" maxLength="400"
                                  className={
                                    formik.errors["company-email"]
                                      ? "wpcf7-form-control wpcf7-email wpcf7-not-valid"
                                      : "wpcf7-form-control wpcf7-email wpcf7-validates-as-required"
                                  }
                                  aria-required="true"
                                  type="email"
                                  name="company-email"
                                  placeholder="Email"
                                  value={formik.values["company-email"]}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors["company-email"] && (
                                  <span className="wpcf7-not-valid-tip">
                                    {formik.errors["company-email"]}
                                  </span>
                                )}
                              </span>
                            </li>

                            {/* Phone */}
                            <li className="w-100">
                              <span className="wpcf7-form-control-wrap" data-name="mobile-number">
                                <input
                                  size="40" maxLength="400"
                                  className={
                                    formik.errors["mobile-number"]
                                      ? "wpcf7-form-control wpcf7-tel wpcf7-not-valid"
                                      : "wpcf7-form-control wpcf7-tel wpcf7-validates-as-required"
                                  }
                                  aria-required="true"
                                  type="tel"
                                  name="mobile-number"
                                  placeholder="Phone No."
                                  value={formik.values["mobile-number"]}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors["mobile-number"] && (
                                  <span className="wpcf7-not-valid-tip">
                                    {formik.errors["mobile-number"]}
                                  </span>
                                )}
                              </span>
                            </li>

                            {/* Message */}
                            <li className="w-100">
                              <span className="wpcf7-form-control-wrap" data-name="your-message">
                                <textarea
                                  cols="40" rows="10" maxLength="2000"
                                  className={
                                    formik.errors["your-message"]
                                      ? "wpcf7-form-control wpcf7-textarea wpcf7-not-valid"
                                      : "wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                  }
                                  aria-required="true"
                                  placeholder="Describe your requirements"
                                  name="your-message"
                                  value={formik.values["your-message"]}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors["your-message"] && (
                                  <span className="wpcf7-not-valid-tip">
                                    {formik.errors["your-message"]}
                                  </span>
                                )}
                              </span>
                            </li>

                            {/* Captcha - shows after name, email, phone filled */}
                            {formik.values["first-name"] &&
                              formik.values["company-email"] &&
                              formik.values["mobile-number"] && (
                                <li className="w-100">
                                  <div className="captcha captcha-wrapper">
                                    <p className="c4wp-display-captcha-form">
                                      <label htmlFor="captcha">
                                        Solve Captcha* {captchaExpression}&nbsp;&nbsp;=&nbsp;&nbsp;
                                      </label>
                                      <input
                                        className={
                                          formik.errors.captcha
                                            ? "wpcf7-form-control wpcf7-not-valid c4wp_user_input_captcha"
                                            : "c4wp_user_input_captcha"
                                        }
                                        id="captcha"
                                        type="text"
                                        name="captcha"
                                        style={{ width: 45 }}
                                        value={formik.values.captcha}
                                        onChange={formik.handleChange}
                                      />
                                      {formik.errors.captcha && (
                                        <span className="wpcf7-not-valid-tip">
                                          {formik.errors.captcha}
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </li>
                              )}

                            {/* Submit */}
                            <li className="w-100 submit-btn-wrapp">
                              <div className="submit-button-wrap">
                                <div className="btn-wrap">
                                  <div className="view-all reverse pos-ab-aligh-right">
                                    <input
                                      className="wpcf7-form-control wpcf7-submit has-spinner submit-btn"
                                      type="submit"
                                      value="Request a call back"
                                    />
                                    <span
                                      className="wpcf7-spinner"
                                      style={{ display: "none" }}
                                    ></span>
                                    <span className="text">Request a call back</span>
                                  </div>
                                </div>
                              </div>
                            </li>

                          </ul>

                          {/* Form Message */}
                          {formMessage && (
                            <div
                              className="wpcf7-response-output"
                              aria-hidden="true"
                              style={{ color: "red" }}
                            >
                              {formMessage}
                            </div>
                          )}

                        </div>
                      </form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      {/* Inside intro section ends */}

      {/* child page intro highlight section starts */}
      {softProductChild?.zohoHighlightSectionTitle &&  softProductChild?.zohoHighlightSectionText &&
        <section className="intro-highlight-wrapper slide-up">
          <div className="container">
            <div className="left">
              <p dangerouslySetInnerHTML={{__html: softProductChild?.zohoHighlightSectionTitle}} />
            </div>
            <div className="right" dangerouslySetInnerHTML={{__html: softProductChild?.zohoHighlightSectionText}} />
          </div>
        </section>
      }
      {/* child page intro highlight section ends */}

      {/* Child page strategic choice section starts */}
      {softProductChild?.zohoModuleSectionTitle && softProductChild?.zohoModuleList &&
        <section className="strategic-choice-wrapper" id="zoho-crm-module">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softProductChild?.zohoModuleSectionTitle}} />
            <ul>
              {softProductChild?.zohoModuleList.map((modList,index) => (
                <li>
                  <div className="left" dangerouslySetInnerHTML={{__html: modList.zohoModuleListImage}} />
                  <div className="right">
                    <span className="line-fill"></span>
                    <p className="title" dangerouslySetInnerHTML={{__html: modList.zohoModuleListTitle}} />
                    <div dangerouslySetInnerHTML={{__html: modList.zohoModuleListText}} />
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* Child page strategic choice section ends */}

      {/* e-commerce platform section starts */}
      {EcommPLatform && 
        <section className="e-comm-platform-wrapp">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: EcommPLatform.epTitle}} />
            <ul>
              {EcommPLatform.epList && EcommPLatform.epList.map((eplatform, index) => (
                <li>
                  <div className="platform-logo">
                    {eplatform?.epLogos && eplatform?.epLogos.map((epLogo, indexLogo) => (
                      <span><img src={epLogo?.mediaItemUrl} alt={epLogo?.altText}></img></span>
                    ))
                    }
                  </div>
                  <div className="platform-name">
                    <p dangerouslySetInnerHTML={{__html: eplatform.epName}} />
                  </div>
                  <div className="platform-txt" dangerouslySetInnerHTML={{__html: eplatform.epText}} />
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* e-commerce platform section ends */}

      {/* crm services section starts */}
      {softProductChild?.zohoCrmServiceTitle && softProductChild?.zohoCrmServiceList &&
        <section className="zoho-crm-wrapper" id="zoho-crm-service">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softProductChild?.zohoCrmServiceTitle}} />
            <ul className="crm-list">
              {softProductChild?.zohoCrmServiceList.map((crmLst,index) => (
                <li
                  key={index}
                  className={
                    index === softProductChild?.zohoCrmServiceList.length - 1
                      ? "w-100"
                      : ""
                  }
                >
                  <div className="top">
                    <span className="icon" dangerouslySetInnerHTML={{__html: crmLst.zohoCrmServiceListImage}} />
                    <h3 dangerouslySetInnerHTML={{__html: crmLst.zohoCrmServiceListTitle}} />
                  </div>
                  <div className="bottom" dangerouslySetInnerHTML={{__html: crmLst.zohoCrmServiceListText}} />
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* crm services section ends */}

      {/* engagement model starts */}
      {softProductChild?.zohoEngagementModelTitle && softProductChild?.zohoEngagementModelList && 
        <section className="engagement-model-wrapp" id="zoho-eng-model">
          <div className="container">
            <h2 className="txt-center slide-up" dangerouslySetInnerHTML={{__html: softProductChild?.zohoEngagementModelTitle}} />
            <div className="eng-model-step">
              <ul>
                {softProductChild?.zohoEngagementModelList.map((englst,index) => (
                  <li className="stagger-li">
                    <div className="step-count">{index+1}</div>
                    <div className="eng-icon" dangerouslySetInnerHTML={{__html: englst.zohoEngagementModelListImage}} />
                    <div className="eng-title">
                      <h5 dangerouslySetInnerHTML={{__html: englst.zohoEngagementModelListTitle}} />
                      <div dangerouslySetInnerHTML={{__html: englst.zohoEngagementModelListText}} />
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
      {softProductChild?.zohoWhyPartnerSectionTitle && softProductChild?.zohoWhyPartnerSectionText && softProductChild?.zohoWhyPartnerSectionRightLogo &&
        <section className="inside-partner-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softProductChild?.zohoWhyPartnerSectionTitle}} />
            <ul className="partner-single">
              <li className="stagger-li">
                <div className="part-txt" dangerouslySetInnerHTML={{__html: softProductChild?.zohoWhyPartnerSectionText}} />
                <div className="part-img">
                  <img src={softProductChild?.zohoWhyPartnerSectionRightLogo?.mediaItemUrl} alt={softProductChild?.zohoWhyPartnerSectionTitle}></img>
                </div>
              </li>
            </ul>
          </div>
        </section>
      }
      {/* partner with emqube section ends */}

      {/* zoho app section starts */}
      {softProductChild?.zohoAppsSectionTitle && softProductChild?.zohoAppsList && 
        <section className="zoho-app-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softProductChild?.zohoAppsSectionTitle}} />
            <ul className="zoho-app-list">
              {softProductChild?.zohoAppsList.map((applst, index) => (
                <li>
                  <div className="zoho-app-logo">
                    <img src={applst?.zohoAppsListLogo?.mediaItemUrl} alt={applst?.zohoAppsListTitle}></img>
                  </div>
                  <div className="zoho-app-txt">
                    <div dangerouslySetInnerHTML={{__html: applst.zohoAppsListText}} />
                    <a href={applst.zohoAppsListLink} className="fill-btn">Book a Free Strategy Session with our Zoho Experts</a>
                  </div>
                  <div className="zoho-app-img">
                    <img src={applst?.zohoAppListRightImage?.mediaItemUrl} alt={applst?.zohoAppsListTitle}></img>
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* zoho app section ends */}

      {/* industry section starts */}
      {softProductChild?.zohoIndustrySelectList && 
        <section className="insudtry-list-wrapp indus-flex-dir-btm">
          <div className="container">
            <div className="left">
              <h2 className="slide-up" dangerouslySetInnerHTML={{__html: softProductChild?.zohoIndustrySelectTitle}} />
              <ul className="flex-dir-row flex-wrap">
                {softProductChild?.zohoIndustrySelectList.map((indeslst,index) => {  
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
      {softProductChild?.zohoFaqList &&
        <section className="faq-accordion-wrapper">
          <div className="container">
            <div className="faq-accordion">
              <h2 className="faq-heading slide-up" dangerouslySetInnerHTML={{__html: softProductChild.zohoFaqSectionTitle}} />
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

export const data = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 127}) {
      title
      zohoProductPageLayout {
        productLogo {
          altText
          mediaItemUrl
        }
        productTag
        zohoPageTitle
        zohoIntroText
        zohoFormShortcode
        zohoHighlightSectionText
        zohoHighlightSectionTitle
        zohoModuleSectionTitle
        zohoModuleList {
          zohoModuleListImage
          zohoModuleListText
          zohoModuleListTitle
        }
        zohoCrmServiceTitle
        zohoCrmServiceList {
          zohoCrmServiceListImage
          zohoCrmServiceListText
          zohoCrmServiceListTitle
        }
        zohoEngagementModelTitle
        zohoEngagementModelList {
          zohoEngagementModelListImage
          zohoEngagementModelListText
          zohoEngagementModelListTitle
        }
        zohoWhyPartnerSectionTitle
        zohoWhyPartnerSectionText
        zohoWhyPartnerSectionRightLogo {
          altText
          mediaItemUrl
        }
        zohoAppsSectionTitle
        zohoAppsList {
          zohoAppsListLink
          zohoAppsListText
          zohoAppsListTitle
          zohoAppsListLogo {
            altText
            mediaItemUrl
          }
          zohoAppListRightImage {
            altText
            mediaItemUrl
          }
        }
        zohoIndustrySelectTitle
        zohoIndustrySelectList
        zohoFaqSectionTitle
        zohoFaqList {
          zohoFaqAnswer
          zohoFaqQuestion
        }
        zohoCtaText
        zohoCtaTitle
        selectProjectList {
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
      shopifyMangentoWoocommerce {
        epTitle
        epList {
          epName
          epText
          epLogos {
            altText
            mediaItemUrl
          }
        }
      }
    }
    wp {
      acfOption {
        common {
          whatsappurl
          callnumber
          contactusUrl
          ctaSubtitle
          ctaTitle
        }
      }
    }
  }
`;