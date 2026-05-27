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

    if (!values["first-name"]) {
      errors["first-name"] = "Required";
    }

    if (!values["company-email"]) {
      errors["company-email"] = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values["company-email"])) {
      errors["company-email"] = "Invalid email address";
    }

    if (!values["company-name"]) {
      errors["company-name"] = "Required";
    }

    if (!values["mobile-number"]) {
      errors["mobile-number"] = "Required";
    }

    if (!values["select-371"]) {
      errors["select-371"] = "Required";
    }

    // if (!values["your-message"]) {
    //   errors["your-message"] = "Required";
    // }

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
      "company-email": "",
      "company-name": "",
      "mobile-number": "",
      "select-371": "",
      "your-message": "",
      captcha: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      // Show spinner, disable button
      document.querySelector(".wpcf7-spinner").style.display = "block";
      const submitBtn = document.querySelector(".submit-btn-wrapp .wpcf7-submit");
      submitBtn.setAttribute("disabled", "disabled");
      submitBtn.classList.add("button-disabled");

      const bodyFormData = new FormData();
      bodyFormData.set("first-name", values["first-name"]);
      bodyFormData.set("company-email", values["company-email"]);
      bodyFormData.set("company-name", values["company-name"]);
      bodyFormData.set("mobile-number", values["mobile-number"]);
      bodyFormData.set("select-371", values["select-371"]);
      bodyFormData.set("your-message", values["your-message"]);
      bodyFormData.set("_wpcf7_unit_tag", "wpcf7-5-o1");

      axios({
        method: "post",
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/5/feedback`,
        data: bodyFormData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          document.querySelector(".wpcf7-spinner").style.display = "none";
          submitBtn.removeAttribute("disabled");
          submitBtn.classList.remove("button-disabled");

          if (response.data.status === "mail_sent") {
            formik.resetForm();
            setFormMessage("");
            if (typeof window !== "undefined") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "formSubmission",
                formId: "81b5087",
                formName: "Contact Us Form",
              });
            }
            navigate("/thank-you/");
          } else if (response.data.status === "validation_failed") {
            setFormMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.error("Form submission error:", error);
          document.querySelector(".wpcf7-spinner").style.display = "none";
          submitBtn.removeAttribute("disabled");
          submitBtn.classList.remove("button-disabled");
          setFormMessage("Something went wrong. Please try again.");
        });
    },
  });


  return (
    <Layout isContact>
    <>
      
      {/* Inside intro section starts */}
      <section className="inside-intro-wrapper inside-child-intro-wrapper contact-intro-wrapper">
        <div class="container">
          <div className="breadcrumbs 123-test">
              {<Breadcrumb postId={237} />}
            </div>
          <h1>We are waiting <span className="txt-regular">for you</span></h1>
          <div className="product-head-wrapper">
            {contactPage?.contactPageLayout && 
              <div className="left">
                <p className="interested-txt sub-txt">{contactPage?.contactPageLayout?.contactPageRightSideTitle} <span className="txt-med">{contactPage?.contactPageLayout?.contactPageRightSideSubtitle}</span></p>
                <div className="contact-info-wrapp">
                  <ul>
                    {contactPage?.contactPageLayout?.address && contactPage?.contactPageLayout?.googleMapLocation && 
                      <li className="loc">
                        <div className="left-contact">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="50" viewBox="0 0 35 50" fill="none">
                              <path d="M17.5 23.75C15.8424 23.75 14.2527 23.0915 13.0806 21.9194C11.9085 20.7473 11.25 19.1576 11.25 17.5C11.25 15.8424 11.9085 14.2527 13.0806 13.0806C14.2527 11.9085 15.8424 11.25 17.5 11.25C19.1576 11.25 20.7473 11.9085 21.9194 13.0806C23.0915 14.2527 23.75 15.8424 23.75 17.5C23.75 18.3208 23.5883 19.1335 23.2742 19.8918C22.9602 20.6501 22.4998 21.3391 21.9194 21.9194C21.3391 22.4998 20.6501 22.9602 19.8918 23.2742C19.1335 23.5883 18.3208 23.75 17.5 23.75ZM17.5 0C12.8587 0 8.40752 1.84374 5.12563 5.12563C1.84374 8.40752 0 12.8587 0 17.5C0 30.625 17.5 50 17.5 50C17.5 50 35 30.625 35 17.5C35 12.8587 33.1563 8.40752 29.8744 5.12563C26.5925 1.84374 22.1413 0 17.5 0Z" fill="#4E9C5A"/>
                            </svg>
                          </span>
                        </div>
                        <div className="right-contact">
                          <p dangerouslySetInnerHTML={{__html: contactPage?.contactPageLayout?.address}} />
                          <p>
                            <a href={contactPage?.contactPageLayout?.googleMapLocation} target="_blank">Google maps link</a>
                            <span className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M0.175254 10.5368L7.23047 1.17166L0.1932 2.16161L-5.48652e-05 1.22509L8.71276 -0.00055572L9.9384 8.71226L8.98491 8.78487L7.99497 1.7476L0.939751 11.1127L0.175254 10.5368Z" fill="#4E9C5A"/>
                              </svg>
                            </span>
                          </p>
                        </div>
                      </li>
                    }
                    {contactPage?.contactPageLayout?.email && 
                      <li className="mail">
                        <div className="left-contact">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" fill="none">
                              <path d="M36 0H4C1.8 0 0.02 1.8 0.02 4L0 28C0 30.2 1.8 32 4 32H36C38.2 32 40 30.2 40 28V4C40 1.8 38.2 0 36 0ZM35.2 8.5L21.06 17.34C20.42 17.74 19.58 17.74 18.94 17.34L4.8 8.5C4.59946 8.38742 4.42384 8.23532 4.28378 8.05291C4.14372 7.87049 4.04212 7.66156 3.98515 7.43874C3.92818 7.21593 3.91701 6.98387 3.95231 6.75661C3.98762 6.52936 4.06867 6.31163 4.19056 6.1166C4.31245 5.92158 4.47265 5.75331 4.66145 5.62199C4.85026 5.49067 5.06374 5.39902 5.28899 5.3526C5.51424 5.30617 5.74657 5.30593 5.97191 5.3519C6.19725 5.39786 6.41093 5.48907 6.6 5.62L20 14L33.4 5.62C33.5891 5.48907 33.8027 5.39786 34.0281 5.3519C34.2534 5.30593 34.4858 5.30617 34.711 5.3526C34.9363 5.39902 35.1497 5.49067 35.3385 5.62199C35.5274 5.75331 35.6875 5.92158 35.8094 6.1166C35.9313 6.31163 36.0124 6.52936 36.0477 6.75661C36.083 6.98387 36.0718 7.21593 36.0149 7.43874C35.9579 7.66156 35.8563 7.87049 35.7162 8.05291C35.5762 8.23532 35.4005 8.38742 35.2 8.5Z" fill="#4E9C5A"/>
                            </svg>
                          </span>
                        </div>
                        <div className="right-contact">
                          <p><span className="txt-regular">Email: </span><a href={`mailto:${contactPage?.contactPageLayout?.email}`}>{contactPage?.contactPageLayout?.email}</a></p>
                        </div>
                      </li>
                    }
                    {contactPage?.contactPageLayout?.whatsappLink &&
                      <li className="whatsapp">
                        <div className="left-contact">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                              <path d="M18.3334 0C28.4589 0 36.6667 8.20783 36.6667 18.3333C36.6667 28.4588 28.4589 36.6667 18.3334 36.6667C15.0934 36.6722 11.9104 35.8148 9.1117 34.1825L0.00736167 36.6667L2.48603 27.5587C0.852452 24.759 -0.00564965 21.5747 2.79926e-05 18.3333C2.79926e-05 8.20783 8.20786 0 18.3334 0ZM12.0854 9.71667L11.7187 9.73133C11.4816 9.74767 11.25 9.80993 11.0367 9.91467C10.8379 10.0274 10.6564 10.1682 10.4977 10.3327C10.2777 10.5398 10.153 10.7195 10.0192 10.8937C9.34108 11.7753 8.97598 12.8577 8.98153 13.97C8.9852 14.8683 9.21986 15.7428 9.58653 16.5605C10.3364 18.2142 11.5702 19.965 13.1982 21.5875C13.5905 21.978 13.9755 22.3703 14.3899 22.7352C16.4128 24.5161 18.8234 25.8004 21.4299 26.4862L22.4712 26.6457C22.8104 26.664 23.1495 26.6383 23.4905 26.6218C24.0244 26.5937 24.5456 26.4491 25.0177 26.1983C25.2576 26.0743 25.4919 25.9397 25.7199 25.795C25.7199 25.795 25.7975 25.7424 25.949 25.63C26.1965 25.4467 26.3487 25.3165 26.554 25.102C26.708 24.9431 26.8364 24.7586 26.939 24.5483C27.082 24.2495 27.225 23.6793 27.2837 23.2045C27.3277 22.8415 27.3149 22.6435 27.3094 22.5207C27.302 22.3245 27.1389 22.121 26.961 22.0348L25.894 21.5563C25.894 21.5563 24.299 20.8615 23.3237 20.4178C23.2216 20.3734 23.1123 20.3479 23.001 20.3427C22.8756 20.3295 22.7488 20.3435 22.6292 20.3837C22.5096 20.4239 22.4001 20.4893 22.308 20.5755C22.2989 20.5718 22.176 20.6763 20.8505 22.2823C20.7744 22.3846 20.6697 22.4618 20.5495 22.5043C20.4293 22.5467 20.2993 22.5524 20.1759 22.5207C20.0564 22.4888 19.9394 22.4484 19.8257 22.3997C19.5984 22.3043 19.5195 22.2677 19.3637 22.2017C18.3111 21.7432 17.3368 21.1227 16.4762 20.3628C16.2452 20.1612 16.0307 19.9412 15.8107 19.7285C15.0895 19.0377 14.4609 18.2563 13.9407 17.4038L13.8325 17.2297C13.756 17.112 13.6933 16.9859 13.6455 16.8538C13.5759 16.5843 13.7574 16.368 13.7574 16.368C13.7574 16.368 14.2029 15.8803 14.41 15.6163C14.6117 15.3597 14.7822 15.1103 14.8922 14.9325C15.1085 14.5842 15.1764 14.2267 15.0627 13.9498C14.5494 12.6958 14.0189 11.4486 13.4714 10.208C13.3632 9.96233 13.0424 9.78633 12.7509 9.7515C12.6519 9.73928 12.5529 9.7295 12.4539 9.72217C12.2077 9.70805 11.9609 9.7105 11.715 9.7295L12.0854 9.71667Z" fill="#4E9C5A"/>
                            </svg>
                          </span>
                        </div>
                        <div className="right-contact">
                          <p><span className="txt-regular">Whatsapp: </span><a href={contactPage?.contactPageLayout?.whatsappLink} target="_blank">{contactPage?.contactPageLayout?.whatsappLink}</a></p>
                        </div>
                      </li>
                    }
                    {contactPage?.contactPageLayout?.officeTime && 
                      <li className="office-time">
                        <div className="left-contact">
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                              <mask id="mask0_2379_7731"  maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                              <path d="M17.1666 33.0007C25.9114 33.0007 33 25.9121 33 17.1673C33 8.42257 25.9114 1.33398 17.1666 1.33398C8.4219 1.33398 1.33331 8.42257 1.33331 17.1673C1.33331 25.9121 8.4219 33.0007 17.1666 33.0007Z" fill="white" stroke="white" stroke-width="2.66667" stroke-linejoin="round"/>
                              <path d="M17.173 7.66797V17.1759L23.8855 23.8892" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                              </mask>
                              <g mask="url(#mask0_2379_7731)">
                              <path d="M-1.83337 -1.83203H36.1666V36.168H-1.83337V-1.83203Z" fill="#4E9C5A"/>
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="right-contact">
                          <p><span className="txt-regular">Office Hours: </span>{contactPage?.contactPageLayout?.officeTime}</p>
                        </div>
                      </li>
                    }
                    {/* <li className="job-enq">
                      <div className="left-contact">
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M15.75 0C19.9272 0 23.9332 1.65937 26.8869 4.61307C29.8406 7.56677 31.5 11.5728 31.5 15.75C31.5 19.9272 29.8406 23.9332 26.8869 26.8869C23.9332 29.8406 19.9272 31.5 15.75 31.5C11.5728 31.5 7.56677 29.8406 4.61307 26.8869C1.65937 23.9332 0 19.9272 0 15.75C0 11.5728 1.65937 7.56677 4.61307 4.61307C7.56677 1.65937 11.5728 0 15.75 0ZM16.5832 6.73242C14.7574 6.73242 13.3137 7.25156 12.252 8.28984C11.1621 9.33047 10.6453 10.7648 10.6453 12.5965H13.4648C13.4648 11.5594 13.6652 10.7402 14.0836 10.1707C14.5547 9.47812 15.3211 9.1582 16.4109 9.1582C17.2594 9.15352 17.9191 9.38438 18.3902 9.85078C18.8653 10.3784 19.114 11.0716 19.0828 11.7809C19.0743 12.4272 18.8377 13.0498 18.4148 13.5387L18.1195 13.8832C16.5094 15.3211 15.5461 16.3582 15.2227 17.0297C14.8781 17.6977 14.7305 18.5133 14.7305 19.4555V19.8H17.5746V19.452C17.5746 18.8578 17.6977 18.341 17.9473 17.8453C18.1868 17.3685 18.5233 16.947 18.9352 16.6078C20.1234 15.5672 20.8406 14.8992 21.0656 14.6531C21.6598 13.8586 21.9797 12.8461 21.9797 11.6086C21.9797 10.0992 21.4852 8.91094 20.4961 8.04375C19.5047 7.1543 18.1934 6.73242 16.5832 6.73242ZM16.1402 21.0129C15.8904 21.0058 15.6416 21.0481 15.4081 21.1374C15.1746 21.2267 14.961 21.3612 14.7797 21.5332C14.5977 21.7032 14.4547 21.9107 14.3606 22.1414C14.2666 22.372 14.2236 22.6203 14.2348 22.8691C14.2348 23.4141 14.407 23.8605 14.7797 24.2051C15.1433 24.5574 15.6305 24.753 16.1367 24.75C16.6816 24.75 17.1246 24.5742 17.4973 24.2297C17.6815 24.0549 17.8273 23.8436 17.9253 23.6094C18.0234 23.3752 18.0716 23.123 18.0668 22.8691C18.0713 22.6211 18.0254 22.3748 17.9317 22.1451C17.838 21.9155 17.6986 21.7073 17.5219 21.5332C17.1454 21.1863 16.6485 20.9996 16.1367 21.0129" fill="#4E9C5A"/>
                          </svg>
                        </span>
                      </div>
                      <div className="right-contact">
                        <p><span className="txt-regular">Job inquiry: </span><a href="#">Click here</a> to submit your CV</p>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            }
            <div className="right">
              <div className="right-to-us-wrapp">
                <p>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M36.315 2.46712L37.2983 3.45045C38.6533 4.80712 38.4483 7.21212 36.8367 8.82212L16.5583 29.1004L9.98833 31.5038C9.16333 31.8071 8.36 31.4138 8.19666 30.6288C8.14165 30.344 8.16763 30.0495 8.27166 29.7788L10.7217 23.1521L30.9433 2.92878C32.555 1.31878 34.96 1.11045 36.315 2.46712ZM15.6733 4.48378C15.8922 4.48378 16.1089 4.52689 16.3111 4.61065C16.5133 4.69441 16.6971 4.81717 16.8518 4.97194C17.0066 5.1267 17.1294 5.31043 17.2131 5.51264C17.2969 5.71485 17.34 5.93158 17.34 6.15045C17.34 6.36932 17.2969 6.58605 17.2131 6.78825C17.1294 6.99046 17.0066 7.1742 16.8518 7.32896C16.6971 7.48372 16.5133 7.60649 16.3111 7.69025C16.1089 7.77401 15.8922 7.81712 15.6733 7.81712H9.00666C8.12261 7.81712 7.27476 8.1683 6.64964 8.79343C6.02452 9.41855 5.67333 10.2664 5.67333 11.1504V31.1504C5.67333 32.0345 6.02452 32.8823 6.64964 33.5075C7.27476 34.1326 8.12261 34.4838 9.00666 34.4838H29.0067C29.8907 34.4838 30.7386 34.1326 31.3637 33.5075C31.9888 32.8823 32.34 32.0345 32.34 31.1504V24.4838C32.34 24.0418 32.5156 23.6178 32.8282 23.3053C33.1407 22.9927 33.5646 22.8171 34.0067 22.8171C34.4487 22.8171 34.8726 22.9927 35.1852 23.3053C35.4977 23.6178 35.6733 24.0418 35.6733 24.4838V31.1504C35.6733 32.9186 34.971 34.6142 33.7207 35.8645C32.4705 37.1147 30.7748 37.8171 29.0067 37.8171H9.00666C7.23855 37.8171 5.54286 37.1147 4.29262 35.8645C3.04238 34.6142 2.34 32.9186 2.34 31.1504V11.1504C2.34 9.38234 3.04238 7.68665 4.29262 6.4364C5.54286 5.18616 7.23855 4.48378 9.00666 4.48378H15.6733Z" fill="white"/>
                    </svg>
                  </span>
                  Write to us
                </p>
              </div>
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

                          {/* Your Name */}
                          <li>
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
                                placeholder="Your Name"
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

                          {/* Email */}
                          <li>
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

                          {/* Company Name */}
                          <li>
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

                          {/* Phone */}
                          <li className="w-50">
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

                          {/* How did you hear about us */}
                          <li className="w-50 mob-w-100">
                            <span className="wpcf7-form-control-wrap" data-name="select-371">
                              <select
                                name="select-371"
                                className={
                                  formik.errors["select-371"]
                                    ? "wpcf7-form-control wpcf7-select wpcf7-not-valid"
                                    : "wpcf7-form-control wpcf7-select"
                                }
                                value={formik.values["select-371"]}
                                onChange={formik.handleChange}
                                aria-invalid="false"
                              >
                                <option value="">How did you hear about us?</option>
                                <option value="Friends">Friends</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Internet Search">Internet Search</option>
                              </select>
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
                              <li className="w-50 mob-w-100">
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
                          <li className="w-50 mob-w-100 submit-btn-wrapp">
                            <div className="submit-button-wrap">
                              <div className="btn-wrap">
                                <div className="view-all reverse pos-ab-aligh-right">
                                  <input
                                    className="wpcf7-form-control wpcf7-submit has-spinner submit-btn"
                                    type="submit"
                                    value="Submit"
                                  />
                                  <span
                                    className="wpcf7-spinner"
                                    style={{ display: "none" }}
                                  ></span>
                                  <span className="text">Submit</span>
                                </div>
                              </div>
                            </div>
                          </li>

                        </ul>

                        {/* Form response message */}
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
    wpPage(databaseId: {eq: 237}) {
      content
      title
      slug
      contactPageLayout {
        address
        contactPageRightSideSubtitle
        contactPageRightSideTitle
        email
        googleMapLocation
        officeTime
        whatsappLink
      }
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