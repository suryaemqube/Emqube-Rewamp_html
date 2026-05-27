import React, { useEffect, useState, useRef } from "react";
import { graphql, Link } from "gatsby";
import "/src/assets/css/common.css";
import "/src/assets/css/home.css";
import Seo from "../components/SeoMeta";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Layout from "../components/Layout";

gsap.registerPlugin(ScrollTrigger);


export default function Home({ data }) {

  const home = data?.wpPage?.homePage || {};
  const options = data?.wp?.acfOption?.common;

  const rightUlRef = useRef(null);
  const introUlRef = useRef(null);
  const wrapperRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(8);

  // create collapsible footer menu - starts
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  // create collapsible footer menu - ends

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // run on mount to set initial value
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  
  const logos = options?.brandLogos.map(item => ({
    src: item.mediaItemUrl, 
    alt: item.altText
  })) ?? [];


  // homepage video section animation - onscroll - starts
  useEffect(() => {
    const itemsUl = rightUlRef.current;
    const items = rightUlRef.current?.children;
    const target = introUlRef.current;
    const wrapper = wrapperRef.current;

    if (!items?.length || !target || !wrapper) return;

    gsap.registerPlugin(ScrollTrigger);

    // 🔥 GAP CONTROL
    const GAP = 80;

    // 🔥 CALCULATE POSITIONS ONCE
    const positions = [];

    const targetRect = target.getBoundingClientRect();
    const colWidth = (targetRect.width - GAP) / 2;

    Array.from(items).forEach((el, i) => {
      const elRect = el.getBoundingClientRect();
      // const targetRect = target.getBoundingClientRect();

      // const colWidth = (targetRect.width - GAP) / 2;

      positions.push({
        x: targetRect.left - elRect.left + (i * colWidth),
      });
    });

    // 🔥 SAME Y FOR BOTH ITEMS
    // const targetRect = target.getBoundingClientRect();
    const firstRect = items[0].getBoundingClientRect();
    const baseY = targetRect.top - firstRect.top;

    // 🔥 INITIAL STATE
    gsap.set(wrapper, {
      width: 800,
      margin: "0 auto", // ✅ CENTER FIX
    });

    gsap.set(items, {
      // x: 80,
      x: (i) => {
        if (i === 0) {
          // left item
          // return center - itemWidth - GAP / 2;
          // return center - itemWidth;
          // return -265
          //  if (typeof window !== "undefined") return;
          const w = window.innerWidth;
          
          if (w >= 1200) return 80;
          if (w >= 1380) return 80;
          if (w >= 1300) return 80;
          if (w >= 850) return 80;
          if (w >= 768) return 40;
          return 0;
        }

        if (i === 1) {
          // right item
          // return center + GAP / 2;
          // return -62
          //  if (typeof window !== "undefined") return;
          const w = window.innerWidth

          if (w >= 1200) return 0;
          if (w >= 768) return 0;
          return 0;
        }
      },
      y: -50,
      scale: 0.7,
      rotate: (i) => (i === 0 ? -7.49 : 5.35),
      transformPerspective: 1200,
      transformOrigin: "center center",
      willChange: "transform",
    });

    // gsap.to(itemsUl, {
    //   display: "block",
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".home-intro-wrapper",
    //     start: "top 30%",
    //     end: "bottom 60%",
    //     scrub: 1.2,
    //     invalidateOnRefresh: true,
    //   }
    // })
    // 🔥 WRAPPER ANIMATION (RESPONSIVE)
    gsap.to(wrapper, {
      // left: "35%",
      // xPercent: -50, // ✅ replaces translateX(-50%)
      // right: "auto",
      width: () => {
        //  if (typeof window !== "undefined") return;
        const w = window.innerWidth;

        if (w >= 1500) return 1200;
        if (w >= 1300) return 1000;
        if (w >= 851) return "90%";
        return "80%";
      },
      ease: "none",

      scrollTrigger: {
        trigger: ".home-intro-wrapper",
        // start: "top 30%",
        start: "40% 50%",
        end: "bottom 70%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    // 🔥 ITEMS ANIMATION
    gsap.to(items, {
      // position: "absolute",
      // left: "50%",
      // top: 0,
      // x: (i) => positions[i].x,
      // x: (i) => {
      //   const baseX = positions[i].x;

      //   // 👇 push items apart from center
      //   if (i === 0) return baseX - GAP / 2;
      //   if (i === 1) return baseX + GAP / 2;

      //   return baseX;f
      // },

      x: (i) => {
        const containerWidth = introUlRef.current.getBoundingClientRect().width;
        const itemWidth = (containerWidth - GAP) / 2;

        // center point
        const center = containerWidth / 2;

        // if (i === 0) {
        //   return -(itemWidth + GAP / 2);
        // }

        // if (i === 1) {
        //   return GAP / 2;
        // }

        if (i === 0) {
          // left item
          // return center - itemWidth - GAP / 2;
          // return center - itemWidth;
          // return -265
          //  if (typeof window !== "undefined") return;
          const w = window.innerWidth;

          if (w >= 1700) return -413;
          if (w >= 1500) return -300;
          if (w >= 1380) return -265;
          if (w >= 1300) return -230;
          if (w >= 850) return -176;
          if (w >= 768) return -165;
          return 0;
        }

        if (i === 1) {
          // right item
          // return center + GAP / 2;
          // return -62
          //  if (typeof window !== "undefined") return;
          const w = window.innerWidth

          if (w >= 1700) return -250;
          if (w >= 1500) return -140;
          // if (w >= 1500) return -250;
          if (w >= 1380) return -62;
          if (w >= 1200) return -15;
          if (w >= 850) return -25;
          if (w >= 768) return -7;
          return 0;
        }

        return 0;
      },

      // ✅ SAME Y ALIGNMENT
      // y: baseY,

      y: () => {
        //  if (typeof window !== "undefined") return;
        const w = window.innerWidth

        if (w >= 1381) return baseY;
        if (w >= 1300) return 645;
        if (w >= 852) return 580;
        if (w >= 768) return 550;
        return baseY;
      },

      scale: 1,
      rotate: 0.18,

      // ✅ WIDTH WITH GAP FIX
      width: () => {
        const containerWidth = target.getBoundingClientRect().width;
        // return (containerWidth - GAP) / 2;
        return (containerWidth  / 2) - GAP;
        // return (containerWidth) / 2;

      },

      height: () => {
        //  if (typeof window !== "undefined") return;
        const w = window.innerWidth

        if (w >= 1501) return 480;
        if (w >= 1301) return 380;
        if (w >= 1101) return 350;
        if (w >= 768) return 320;
        // if (w >= 850) return 500;
        return baseY;
      },

      margin: 0,
      ease: "none",

      scrollTrigger: {
        trigger: ".home-intro-wrapper",
        // start: "top 30%",
         start: "40% 50%",
        end: "bottom 70%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  // homepage video section animation - onscroll - ends


  

  return (

      <Layout isHome>

      {/* Home page Intro section - starts */}
      { home &&
        <section className="hero-video-wrapper">
          <div className="container">
            <video autoPlay muted loop playsInline preload="none" 
            poster={home?.heroVideoHolderImage?.mediaItemUrl} 
            >
              {home?.heroVideoDesktop &&
                <source src={home?.heroVideoDesktop?.mediaItemUrl} media="(min-width: 768px)" type="video/mp4" />
              }
              {home?.heroVideoMobile &&
                <source src={home?.heroVideoMobile?.mediaItemUrl} media="(max-width: 767px)" type="video/mp4" />
              }
            </video>
            {home && home?.heroLink && home?.heroLinkText && home?.heroTitleHtml &&
              <div className="hero-txt">
                <div dangerouslySetInnerHTML={{ __html: home?.heroTitleHtml}} />
                <a href={home?.heroLink} class="view-all">
                  <span class="text" dangerouslySetInnerHTML={{ __html: home?.heroLinkText}} />
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M19.4425 13.5931L1.75468 13.5931C1.30622 13.5931 0.9303 13.4414 0.62693 13.138C0.32356 12.8347 0.171875 12.4587 0.171875 12.0103C0.171875 11.5618 0.32356 11.1859 0.62693 10.8825C0.9303 10.5792 1.30622 10.4275 1.75468 10.4275L19.4425 10.4275L11.6867 2.67177C11.3702 2.35521 11.2185 1.98589 11.2317 1.56381C11.2449 1.14173 11.4098 0.772406 11.7263 0.455846C12.0429 0.165666 12.4122 0.0139809 12.8343 0.000790847C13.2564 -0.0123992 13.6257 0.139286 13.9422 0.455846L24.3887 10.9023C24.547 11.0606 24.6591 11.2321 24.7251 11.4167C24.791 11.6014 24.824 11.7992 24.824 12.0103C24.824 12.2213 24.791 12.4192 24.7251 12.6038C24.6591 12.7885 24.547 12.96 24.3887 13.1182L13.9422 23.5647C13.6521 23.8549 13.2893 24 12.8541 24C12.4188 24 12.0429 23.8549 11.7263 23.5647C11.4098 23.2482 11.2515 22.8723 11.2515 22.437C11.2515 22.0017 11.4098 21.6258 11.7263 21.3092L19.4425 13.5931Z" fill="#4E9C5A"></path>
                    </svg>
                  </span>
                </a>
              </div>
            }
          </div>
        </section>
      }
      {/* Home page Intro section - ends */}

      {/* Home Page Intro section starts */}
      <section className="home-intro-wrapper slide-up">
        <div className="container">
          <div className="left">
            <div className="count-wrapper">
              <ul className="d-flex">
                {home && home?.stats &&
                  home?.stats.map((count, index) => (
                    <li key={`count` + index}>
                      <p className="count">
                        <span className="num">{count.statTitle}</span>
                        <span className="icon">+</span>
                      </p>
                      <p className="count-txt">{count.statInfo}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="intro-txt">
              {home && home?.aboutTitle &&
                <div dangerouslySetInnerHTML={{ __html: home?.aboutTitle}} />
              }
              {home && home?.aboutContent &&
                <div dangerouslySetInnerHTML={{ __html: home?.aboutContent}} />
              }
            </div>
          </div>
          <div className="right anim-vid-wrapp" ref={wrapperRef}>
            <ul className=""  ref={rightUlRef}>
              {home && home?.introVideoList &&
                  home?.introVideoList.map((introVid, index) => (
                <li>
                  <a href={introVid?.pageLink?.[0]?.uri}>
                    <video autoPlay muted loop playsInline preload="none">
                      <source src={introVid?.introVideoFile?.mediaItemUrl} type="video/mp4" />
                    </video>
                    <span className="arrow-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                        <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <h4 dangerouslySetInnerHTML={{ __html: introVid?.introVideoTitle}} />
                  </a>
                </li>
              ))
              }
            </ul>
          </div>
          <div className="intro-vid-wrapp">
            <ul className="d-flex"  ref={introUlRef}>
              {home && home?.introVideoList &&
                  home?.introVideoList.map((introVid, index) => (
                <li className="d-none">
                  <a href={introVid?.pageLink?.[0]?.uri}>
                    <video autoPlay muted loop playsInline preload="none">
                      <source src={introVid?.introVideoFile?.mediaItemUrl} type="video/mp4" />
                    </video>
                    <span className="arrow-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                        <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <h4 dangerouslySetInnerHTML={{ __html: introVid?.introVideoTitle}} />
                  </a>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </section>
      {/* Home Page Intro section ends */}

      {/* Home Page Why choose section starts */}
      {home?.wcsSectionTitle && home?.wcsContent && 
        <section className="home-choose-wrapper">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: home?.wcsSectionTitle}} />
            <div className="home-why-choose-list">
              <ul className="d-flex">
                {home && home?.wcsContent &&
                  home?.wcsContent.map((homeChoose, index) => (
                    <li className="stagger-li">
                      <div className="icon">
                        <div className="desk" dangerouslySetInnerHTML={{__html: homeChoose?.wcIconDesktop}} />
                        <div className="mob" dangerouslySetInnerHTML={{__html: homeChoose?.wcIconMobile}} />
                      </div>
                      <div className="icon-txt">
                        <h3 className="txt-gradient" dangerouslySetInnerHTML={{__html: homeChoose?.wcTitle}} />
                        <p dangerouslySetInnerHTML={{__html: homeChoose?.wcContent}} />
                      </div>
                      <div className="icon-num">{index+1}</div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* Home Page Why choose section ends */}

      {/* Home Page Brand section starts */}
      <section className="brand-wrapper">
        <div className="container">
          <h2 className="txt-center txt-gradient slide-up">Brands That Trust Us</h2>
          <ul className="brand-list d-flex slide-up">
            {(isMobile ? logos.slice(0, visibleCount) : logos).map((logo, index) => (
              <li key={index}>
                <a href="#">
                  <img src={logo.src} width="148" height="72" alt={logo.alt} />
                </a>
              </li>
            ))}
          </ul>

          {isMobile && (
            <a href="javascript:void(0);"
              onClick={loadMore}
              className={`view-more-btn ${
                visibleCount >= logos.length ? "disabled" : ""
              }`}
              disabled={visibleCount >= logos.length}
            >
              {visibleCount >= logos.length ? "No more brands" : "View more"}
            </a>
          )}
        </div>
      </section>
      {/* Home Page Brand section ends */}

      

      {/* home cta section starts */}
      {options && 
        <section className="cta-wrapper">
          <div className="container">
            <p className="cta-title stagger-li" dangerouslySetInnerHTML={{ __html: options?.ctaSubtitle}} />
            <p className="cta-txt stagger-li" dangerouslySetInnerHTML={{ __html: options?.ctaTitle}} />
            <div className="cta-btn-wrapp d-flex">
              <ul class="lets-talk-wrap">
                {options && options?.whatsappurl && 
                  <li class="whatsapp stagger-li">
                    <a href={options?.whatsappurl} target="_blank" class="view-all pos-ab-aligh-right ">
                      <span class="text">WhatsApp</span>
                      <span class="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M13.75 0C21.3441 0 27.5 6.15588 27.5 13.75C27.5 21.3441 21.3441 27.5 13.75 27.5C11.3201 27.5042 8.93282 26.8611 6.83377 25.6369L0.00552125 27.5L1.86452 20.669C0.639339 18.5693 -0.00423724 16.181 2.09944e-05 13.75C2.09944e-05 6.15588 6.1559 0 13.75 0ZM9.06402 7.2875L8.78902 7.2985C8.61122 7.31075 8.4375 7.35745 8.27752 7.436C8.12844 7.52058 7.99229 7.62616 7.87327 7.7495C7.70827 7.90488 7.61477 8.03963 7.5144 8.17025C7.00581 8.83149 6.73198 9.64331 6.73615 10.4775C6.7389 11.1512 6.9149 11.8071 7.1899 12.4204C7.75227 13.6606 8.67765 14.9737 9.89865 16.1906C10.1929 16.4835 10.4816 16.7778 10.7924 17.0514C12.3096 18.3871 14.1175 19.3503 16.0724 19.8646L16.8534 19.9843C17.1078 19.998 17.3621 19.9788 17.6179 19.9664C18.0183 19.9453 18.4092 19.8369 18.7633 19.6488C18.9432 19.5557 19.1189 19.4548 19.2899 19.3462C19.2899 19.3462 19.3481 19.3068 19.4618 19.2225C19.6474 19.085 19.7615 18.9874 19.9155 18.8265C20.031 18.7073 20.1273 18.5689 20.2043 18.4113C20.3115 18.1871 20.4188 17.7595 20.4628 17.4034C20.4958 17.1311 20.4861 16.9826 20.482 16.8905C20.4765 16.7434 20.3541 16.5907 20.2208 16.5261L19.4205 16.1672C19.4205 16.1672 18.2243 15.6461 17.4928 15.3134C17.4162 15.28 17.3342 15.2609 17.2508 15.257C17.1567 15.2472 17.0616 15.2577 16.9719 15.2878C16.8822 15.3179 16.8001 15.367 16.731 15.4316C16.7241 15.4289 16.632 15.5073 15.6379 16.7118C15.5808 16.7884 15.5022 16.8464 15.4121 16.8782C15.322 16.91 15.2245 16.9143 15.1319 16.8905C15.0423 16.8666 14.9545 16.8363 14.8693 16.7998C14.6988 16.7283 14.6396 16.7008 14.5228 16.6512C13.7333 16.3074 13.0026 15.842 12.3571 15.2721C12.1839 15.1209 12.023 14.9559 11.858 14.7964C11.3171 14.2783 10.8457 13.6922 10.4555 13.0529L10.3744 12.9222C10.317 12.834 10.2699 12.7394 10.2341 12.6404C10.1819 12.4382 10.318 12.276 10.318 12.276C10.318 12.276 10.6521 11.9102 10.8075 11.7122C10.9588 11.5197 11.0866 11.3328 11.1691 11.1994C11.3314 10.9381 11.3823 10.67 11.297 10.4624C10.912 9.52188 10.5142 8.58642 10.1035 7.656C10.0224 7.47175 9.78177 7.33975 9.56315 7.31362C9.4889 7.30446 9.41465 7.29712 9.3404 7.29163C9.15577 7.28104 8.97065 7.28287 8.78627 7.29713L9.06402 7.2875Z" fill="white"/>
                          </svg>
                      </span>
                    </a>
                  </li>
                }
                {options && options?.contactusUrl && 
                  <li class="contact-us stagger-li">
                    <a href={options?.contactusUrl} class="view-all">
                      <span class="text">Contact Us</span>
                      <span class="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                          <path d="M19.4425 13.5931L1.75468 13.5931C1.30622 13.5931 0.9303 13.4414 0.62693 13.138C0.32356 12.8347 0.171875 12.4587 0.171875 12.0103C0.171875 11.5618 0.32356 11.1859 0.62693 10.8825C0.9303 10.5792 1.30622 10.4275 1.75468 10.4275L19.4425 10.4275L11.6867 2.67177C11.3702 2.35521 11.2185 1.98589 11.2317 1.56381C11.2449 1.14173 11.4098 0.772406 11.7263 0.455846C12.0429 0.165666 12.4122 0.0139809 12.8343 0.000790847C13.2564 -0.0123992 13.6257 0.139286 13.9422 0.455846L24.3887 10.9023C24.547 11.0606 24.6591 11.2321 24.7251 11.4167C24.791 11.6014 24.824 11.7992 24.824 12.0103C24.824 12.2213 24.791 12.4192 24.7251 12.6038C24.6591 12.7885 24.547 12.96 24.3887 13.1182L13.9422 23.5647C13.6521 23.8549 13.2893 24 12.8541 24C12.4188 24 12.0429 23.8549 11.7263 23.5647C11.4098 23.2482 11.2515 22.8723 11.2515 22.437C11.2515 22.0017 11.4098 21.6258 11.7263 21.3092L19.4425 13.5931Z" fill="#4E9C5A"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                }
                {options && options?.callnumber &&
                  <li class="call-us stagger-li">
                    <a href={`tel:${options?.callnumber}`} class="view-all pos-ab-aligh-right ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22.6 24C19.8222 24 17.0778 23.3944 14.3667 22.1833C11.6556 20.9722 9.18889 19.2556 6.96667 17.0333C4.74444 14.8111 3.02778 12.3444 1.81667 9.63333C0.605556 6.92222 0 4.17778 0 1.4C0 1 0.133333 0.666667 0.4 0.4C0.666667 0.133333 1 0 1.4 0H6.8C7.11111 0 7.38889 0.105556 7.63333 0.316667C7.87778 0.527778 8.02222 0.777778 8.06667 1.06667L8.93333 5.73333C8.97778 6.08889 8.96667 6.38889 8.9 6.63333C8.83333 6.87778 8.71111 7.08889 8.53333 7.26667L5.3 10.5333C5.74444 11.3556 6.27222 12.15 6.88333 12.9167C7.49444 13.6833 8.16667 14.4222 8.9 15.1333C9.58889 15.8222 10.3111 16.4611 11.0667 17.05C11.8222 17.6389 12.6222 18.1778 13.4667 18.6667L16.6 15.5333C16.8 15.3333 17.0611 15.1833 17.3833 15.0833C17.7056 14.9833 18.0222 14.9556 18.3333 15L22.9333 15.9333C23.2444 16.0222 23.5 16.1833 23.7 16.4167C23.9 16.65 24 16.9111 24 17.2V22.6C24 23 23.8667 23.3333 23.6 23.6C23.3333 23.8667 23 24 22.6 24Z" fill="#242424"/>
                      </svg>
                    </a>
                  </li>
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* home cta section ends */}

      </Layout>
  );
}

export const Head = ({ data }) => (
  <Seo
    seoData={data?.wpPage?.seo || []}
    bodyClass={"new-home-page"}
    pageUrl={data?.wpPage?.uri}
  >

  </Seo>
);

export const data = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 64}) {
      homePage {
        heroVideoDesktop {
          altText
          mediaItemUrl
        }
        heroVideoMobile {
          altText
          mediaItemUrl
        }
        heroVideoHolderImage {
          altText
          mediaItemUrl
        }
        heroLink
        heroLinkText
        heroTitleHtml
        stats {
          statInfo
          statTitle
        }
        aboutContent
        aboutTitle
        wcsSectionTitle
        wcsContent {
          wcContent
          wcTitle
          wcIconMobile
          wcIconDesktop
        }
        introVideoList {
          introVideoTitle
          pageLink {
            ... on WpPage {
              id
              databaseId
              slug
              uri
            }
          }
          introVideoFile {
            altText
            id
            mediaItemUrl
          }
        }
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