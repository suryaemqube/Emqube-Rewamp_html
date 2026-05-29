import React, { useEffect, useState, useRef } from "react";
import { graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "/src/assets/css/common.css";
import "/src/assets/css/inside.css";
import "/src/assets/css/inside-child.css";
import "/src/assets/css/digi-portfolio.css";

import Seo from "../components/SeoMeta";
import Breadcrumb from "../components/Breadcrumbs";
import Layout from "../components/Layout";

gsap.registerPlugin(ScrollToPlugin);


export default function DigitalProj({ data }) {

  const digiProjList  = data?.websites?.edges?.map(e => e.node) || [];

  const reelsList = data?.reels?.edges?.map(e => e.node) || [];
  const reelsListRepeated = reelsList.length > 0
  ? Array.from({ length: Math.ceil(6 / reelsList.length) })
      .flatMap(() => reelsList)
      .slice(0, 6)
  : [];

  const socialList = data?.socialMedia?.edges?.map(e => e.node) || [];

  const emailersList = data?.emailers?.edges?.map(e => e.node) || [];
  const emailersListRepeated = emailersList.length > 0
  ? Array.from({ length: Math.ceil(8 / emailersList.length) })
      .flatMap(() => emailersList)
      .slice(0, 8)
  : [];

  const digitalMediaList = data?.digitalMediaAssets?.edges?.map(e => e.node) || [];

  // repeat to fill at least 6 slides
  const digitalMediaRepeated = digitalMediaList.length > 0
    ? Array.from({ length: Math.ceil(6 / digitalMediaList.length) })
        .flatMap(() => digitalMediaList)
        .slice(0, 6)
    : [];

  const corpVideoList = data?.corporateVideos?.edges?.map(e => e.node) || [];

  const corpVideoRepeated = corpVideoList.length > 0
    ? Array.from({ length: Math.ceil(6 / corpVideoList.length) })
        .flatMap(() => corpVideoList)
        .slice(0, 6)
    : [];

  const [showTopFilter, setShowTopFilter] = useState(false);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      if(typeof window !== "undefined"){
        window.addEventListener('resize', handleResize);
      }
    return () => typeof window !== "undefined" && window.removeEventListener('resize', handleResize);
  }, []);


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

  
  const [view, setView] = useState("grid"); // default

  const videoRefs = useRef([]);
  const videoRefsCorp = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex1, setActiveIndex1] = useState(null);


  const handleToggle = (index) => {
    const currentVideo = videoRefs.current[index];

    // Pause all videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    // Toggle
    if (activeIndex === index) {
      currentVideo.pause();
      setActiveIndex(null);
    } else {
      currentVideo.play();
      setActiveIndex(index);
    }
  };

  const handleToggleCorp = (index) => {
    const currentVideo = videoRefsCorp.current[index];

    // Pause all videos
    videoRefsCorp.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    // Toggle
    if (activeIndex1 === index) {
      currentVideo.pause();
      setActiveIndex1(null);
    } else {
      currentVideo.play();
      setActiveIndex1(index);
    }
  };

  // onscroll fixed top filter section - starts
  useEffect(() => {
    
    const handleScroll1 = () => {
      if (typeof window !== "undefined" && window.scrollY > 500) {
        setShowTopFilter(true);
      } else {
        setShowTopFilter(false);
      }
    };

    if(typeof window !== "undefined"){
    window.addEventListener("scroll", handleScroll1);
    }

    return () => typeof window !== "undefined" && window.removeEventListener("scroll", handleScroll1);
  }, []);
  // onscroll fixed top filter section - ends 

  // onclick scroll to specific section - starts
  const getOffset = () => {
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
    return 130; // mobile
  } else if (typeof window !== "undefined" && window.matchMedia("(max-width: 1080px)").matches) {
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

    if (typeof window !== "undefined"){
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  }
};
  // onclick scroll to specific section - ends

  return (
    <Layout isDigiProj>
    <>
    
      {/* Inside intro section starts */}
      <section className="inside-intro-wrapper inside-child-intro-wrapper">
        <div class="container">
          <div class="breadcrumbs" vocab="http://schema.org/" typeof="BreadcrumbList">
            <span><a href="/">Home</a></span>
            <span><span> / </span><span class="post post-page current-item">Digital Portfolio</span></span>
          </div>
          <div className="title-wrapp">
            <h1>Digital Portfolio</h1>
            <p className="sub-txt">We design and build scalable tech and unforgettable brands.</p>
            <p>Since 2006 we have made our mark globally by successfully implementing Microsoft’s digital transformation solutions. We deliver positive outcomes by virtue of our global experience, sector specific expertise, and timely execution.</p>
          </div>
        </div>
      </section>
      {/* Inside intro section ends */}

      {/* top section starts */}
      <section className={`top-digital-portfolio-head-list ${showTopFilter ? "active" : ""}`}>
        <div className="container">
          <ul>
            <li><a onClick={() => scrollToSection("website")}>Websites</a></li>
            <li><a onClick={() => scrollToSection("reels")}>Reels</a></li>
            <li><a onClick={() => scrollToSection("social-media")}>Social Media</a></li>
            <li><a onClick={() => scrollToSection("emailer")}>E-mailers</a></li>
            <li><a onClick={() => scrollToSection("digitalMedia")}>Digital Media Assets</a></li>
            <li><a onClick={() => scrollToSection("corpVid")}>Corporate Video</a></li>
          </ul>
        </div>
      </section>
      {/* top section ends */}

      {/* website portfolio starts */}
      {digiProjList && 
      <section className="digi-portfolio-wrapper" id="website">
        <div className="container">
          <h2>Websites</h2>
          <div className="digi-proj-list">
            <ul>
              {digiProjList.map((digiProjItem,index) => (
                <li>
                  <a href={digiProjItem?.digitalPortfolioLayout?.websiteLink ? digiProjItem?.digitalPortfolioLayout?.websiteLink : "#"} target="_blank" rel="noopener noreferrer">
                    {digiProjItem?.digitalPortfolioLayout?.showcaseImageOnListingPage && 
                    <div className="desk-view">
                      <img 
                      // src={digiProjItem?.digitalPortfolioLayout?.showcaseImageOnListingPage?.mediaItemUrl} 
                      src={
                          digiProjItem?.digitalPortfolioLayout?.showcaseImageOnListingPage?.mediaItemUrl
                            ? digiProjItem?.digitalPortfolioLayout?.showcaseImageOnListingPage?.mediaItemUrl
                            : "https://wp.emqube.com/wp-content/uploads/2026/05/software-project-placeholder.webp"  // fallback image
                        }
                      alt={digiProjItem?.title}></img>
                      <div className="hover-txt" dangerouslySetInnerHTML={{__html: digiProjItem?.content}} />
                    </div>
                    }
                    {digiProjItem?.digitalPortfolioLayout?.mobileViewImage && 
                    <div className="mob-view">
                      <img src={digiProjItem?.digitalPortfolioLayout?.mobileViewImage?.mediaItemUrl} className="hover-mob-view-hide" alt={digiProjItem?.title}></img>
                      <img src={digiProjItem?.digitalPortfolioLayout?.desktopViewImage?.mediaItemUrl} className="hover-desk-view-show" alt={digiProjItem?.title}></img>
                    </div>
                    }
                    {digiProjItem?.digitalPortfolioLayout?.clientLogo && 
                    <div className="client-icon">
                      <img src={digiProjItem?.digitalPortfolioLayout?.clientLogo?.mediaItemUrl} alt={digiProjItem?.title}></img>
                    </div>
                    }
                    <span className="arrow-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                        <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </section>
      }
      {/* website portfolio ends */}

      {/* website portfolio starts - Reels */}
      {/* Reels section */}
      <section className="digi-portfolio-wrapper" id="reels">
        <div className="container">
          <h2>Reels</h2>
          <div className="digi-proj-list">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={30}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4 },
                1400: { slidesPerView: 5 },
              }}
              className="digi-reels-swiper"
            >
              {/* ✅ use reelsList instead of reels */}
              {reelsListRepeated.map((reel, index) => (
                <SwiperSlide key={reel.id || index}>
                  <div className="video-item">
                    <div
                      className="video-wrapper"
                      onClick={() => handleToggle(index)}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={reel?.reels?.reelVideo?.mediaItemUrl}
                        muted
                        playsInline
                        preload="metadata"
                        className="video"
                      />
                      <div className="play-btn video-control">
                        {/* {activeIndex === index ? "❚❚" : "▶"} */}
                        {activeIndex === index ? (
                          // Pause icon
                          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 0C11.2074 0 0 11.2074 0 25C0 38.7926 11.2074 50 25 50C38.7926 50 50 38.7926 50 25C50 11.2074 38.7926 0 25 0ZM25 2.43902C37.4744 2.43902 47.561 12.5256 47.561 25C47.561 37.4744 37.4744 47.561 25 47.561C12.5256 47.561 2.43902 37.4744 2.43902 25C2.43902 12.5256 12.5256 2.43902 25 2.43902ZM18 13C16.3431 13 15 14.3431 15 16V34C15 35.6569 16.3431 37 18 37C19.6569 37 21 35.6569 21 34V16C21 14.3431 19.6569 13 18 13ZM32 13C30.3431 13 29 14.3431 29 16V34C29 35.6569 30.3431 37 32 37C33.6569 37 35 35.6569 35 34V16C35 14.3431 33.6569 13 32 13Z" fill="white"/>
                          </svg>
                        ) : (
                          // Play icon
                          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 0C11.2074 0 0 11.2074 0 25C0 38.7926 11.2074 50 25 50C38.7926 50 50 38.7926 50 25C50 11.2074 38.7926 0 25 0ZM25 2.43902C37.4744 2.43902 47.561 12.5256 47.561 25C47.561 37.4744 37.4744 47.561 25 47.561C12.5256 47.561 2.43902 37.4744 2.43902 25C2.43902 12.5256 12.5256 2.43902 25 2.43902ZM18.5023 12.1761C17.8207 12.1906 17.1651 12.3725 16.5968 12.7096C15.4602 13.3839 14.6671 14.659 14.6341 16.1395V33.7843C14.6671 35.2646 15.4615 36.5551 16.5968 37.2332C17.7321 37.9113 19.2326 37.9808 20.5412 37.271C25.6277 34.3298 30.7176 31.3771 35.8041 28.4296C36.986 27.7431 37.8049 26.4386 37.8049 24.9616C37.8049 23.4846 36.986 22.199 35.8041 21.5127C30.7412 18.5258 25.5861 15.6816 20.5412 12.6712C19.8466 12.2947 19.1354 12.1687 18.5023 12.1761ZM18.5976 14.596C18.8448 14.6009 19.0901 14.6771 19.3407 14.8056C24.4188 17.7394 29.5049 20.6871 34.5846 23.628C35.062 23.9053 35.3659 24.3698 35.3659 24.9619C35.3659 25.554 35.0621 26.0374 34.5846 26.3148C29.4946 29.2468 24.436 32.2338 19.3407 35.1562C18.7724 35.448 18.2562 35.3885 17.8354 35.1373C17.4085 34.8824 17.0945 34.4308 17.0732 33.7654V16.1777C17.0945 15.5123 17.4096 15.0584 17.8354 14.8058C18.1013 14.6567 18.3503 14.5909 18.5976 14.596Z" fill="white"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* website portfolio ends */}

      {/* website portfolio starts - Social Media */}
      <section className="digi-portfolio-wrapper" id="social-media">
        <div className="container">
          <h2>Social Media</h2>
          <div className="digi-proj-list">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={40}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
              }}
              className="social-media-posts-swiper"
            >
              {/* ✅ dynamic data */}
              {socialList.map((socialPost, index) => (
                <SwiperSlide key={socialPost.id || index}>
                  <a
                    href={socialPost?.socialMediaLayout?.socialPostLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={socialPost?.socialMediaLayout?.socialPostImage?.mediaItemUrl}
                      alt={socialPost?.socialMediaLayout?.socialPostImage?.altText || socialPost.title}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* website portfolio ends */}

      {/* website portfolio starts - Emailers */}
      <section className="digi-portfolio-wrapper" id="emailer">
        <div className="container">
          <h2>Emailers</h2>
          <div className="digi-proj-list">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={30}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4 },
                1400: { slidesPerView: 5 },
              }}
              className="emailer-posts-swiper"
            >
              {emailersListRepeated.map((item, index) => {

                // ✅ gallery images array from WPGraphQL
                const galleryImages = item?.emailersLayout?.emailersGalleryImages || [];
                const thumbImage = item?.emailersLayout?.emailerMainImage?.mediaItemUrl;

                return (
                  <SwiperSlide key={item.id || index}>
                    <LightGallery
                      plugins={[lgThumbnail, lgZoom]}
                      loop={true}
                      thumbnail={true}
                      exThumbImage="data-exthumbimage"
                      download={false}
                      counter={false}
                      selector="li"
                    >
                      <ul className="design-gallery">
                        {galleryImages.map((img, i) => (
                          <li
                            key={`${index}-${i}`}
                            className="gallery-item"
                            data-src={img?.mediaItemUrl}
                            data-exthumbimage={img?.mediaItemUrl}
                          >
                            {/* show thumb only on first item */}
                            {i === 0 && (
                              <div className="thumb-wrapper">
                                <img
                                  src={thumbImage}
                                  alt={item?.emailersLayout?.emailerMainImage?.altText || item.title}
                                />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </LightGallery>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      {/* website portfolio ends */}

      {/* website portfolio starts - Digital Media */}
      <section className="digi-portfolio-wrapper" id="digitalMedia">
        <div className="container">
          <h2>Digital Media Assets</h2>
          <div className="digi-proj-list">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={35}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
              }}
              className="digiMedia-posts-swiper"
            >
              {digitalMediaRepeated.map((digiMedia, index) => {

                const layout = digiMedia?.digitalMediaLayout;
                const tag = layout?.typeOfDigitalMedia;         // "brochure" or "gallery"
                const mainImage = layout?.digitalMediaMainImage?.mediaItemUrl;
                const mainImageAlt = layout?.digitalMediaMainImage?.altText || digiMedia.title;
                const pdfUrl = layout?.brochureFile?.mediaItemUrl;
                const galleryImages = layout?.digitalMediaGallery || [];

                return (
                  <SwiperSlide key={`${digiMedia.id}-${index}`} className={tag}>

                    {/* brochure type */}
                    {tag === "brochure" && (
                      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        <div className="digiMedia-img">
                          <span className={tag}></span>
                          <img src={mainImage} alt={mainImageAlt} />
                        </div>
                        <div className="digiMedia-txt">
                          <p className="title">{digiMedia.title}</p>
                          <div dangerouslySetInnerHTML={{ __html: digiMedia.content }} />
                        </div>
                      </a>
                    )}

                    {/* gallery type */}
                    {tag === "gallery" && (
                      <>
                        <div className="digiMedia-img">
                          <span className={tag}></span>
                          <LightGallery
                            plugins={[lgThumbnail, lgZoom]}
                            loop={true}
                            thumbnail={true}
                            exThumbImage="data-exthumbimage"
                            download={false}
                            counter={false}
                            selector="li"
                          >
                            <ul className="design-gallery">
                              {galleryImages.map((img, i) => (
                                <li
                                  key={`${index}-${i}`}
                                  className="gallery-item"
                                  data-src={img?.mediaItemUrl}
                                  data-exthumbimage={img?.mediaItemUrl}
                                >
                                  {i === 0 && (
                                    <div className="thumb-wrapper">
                                      <img src={mainImage} alt={mainImageAlt} />
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </LightGallery>
                        </div>
                        <div className="digiMedia-txt">
                          <p className="title">{digiMedia.title}</p>
                          <div dangerouslySetInnerHTML={{ __html: digiMedia.content }} />
                        </div>
                      </>
                    )}

                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      {/* website portfolio ends */}

      {/* website portfolio starts - Corporate Video */}
      <section className="digi-portfolio-wrapper" id="corpVid">
        <div className="container">
          <h2>Corporate Video</h2>
          <div className="digi-proj-list">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={35}
              slidesPerView={3}
              // loopAdditionalSlides={5}
              navigation={true}
              breakpoints={{
                0: { 
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
              }}
            className="corpVid-posts-swiper"
            >
              {corpVideoRepeated.map((corpVideo, index) => (
                <SwiperSlide key={`${corpVideo.id}-${index}`}>
                  <div className="video-item">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={corpVideo?.corporateVideo?.corporateVideoFile?.[0]?.videoCoverImage?.mediaItemUrl}
                      src={corpVideo?.corporateVideo?.corporateVideoFile?.[0]?.videoFile?.mediaItemUrl}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* website portfolio ends */}

      {/* home cta section starts */}
      <section className="cta-wrapper">
        <div className="container">
          <p className="cta-title stagger-li">Ready to build your customized software?</p>
          <p className="cta-txt stagger-li">Talk to our Business Applications Team in Dubai</p>
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
    wpPage(databaseId: {eq: 7961}) {
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
    websites: allWpPortfolio(
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "digital"}}}}}
    ) {
      edges {
        node {
          content
          title
          link
          slug
          digitalPortfolioLayout {
            clientLogo {
              altText
              mediaItemUrl
            }
            desktopViewImage {
              altText
              mediaItemUrl
            }
            mobileViewImage {
              altText
              mediaItemUrl
            }
            showcaseImageOnListingPage {
              altText
              mediaItemUrl
            }
            websiteLink
          }
        }
      }
    }

    reels: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "reels" } } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          reels {
            reelVideo { mediaItemUrl altText }
          }
        }
      }
    }
    
    socialMedia: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "social-media" } } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          socialMediaLayout {
            socialPostImage {
              altText
              mediaItemUrl
            }
            socialPostLink
          }
        }
      }
    }

    emailers: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "emailers" } } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          emailersLayout {
            emailerMainImage {
              altText
              mediaItemUrl
            }
            emailersGalleryImages {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }

    digitalMediaAssets: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "digital-media-assets" } } } } }
    ) {
      edges {
        node {
          id
          title
          content
          slug
          digitalMediaLayout {
            typeOfDigitalMedia
            digitalMediaMainImage {
              altText
              mediaItemUrl
            }
            brochureFile {
              mediaItemUrl
            }
            digitalMediaGallery {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }

    corporateVideos: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "corporate-video" } } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          corporateVideo {
            corporateVideoFile {
              videoCoverImage {
                altText
                mediaItemUrl
              }
              videoFile {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }

  }
`;