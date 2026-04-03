import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.webp";
import img5 from "../images/img5.webp";

const ProjectsScroll = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // 👉 Static data (later you can replace with API / GraphQL)
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: img1,
      className: "card-one",
    },
    {
      id: 2,
      title: "Project 2",
      image: img2,
      className: "card-two",
    },
    {
      id: 3,
      title: "Project 3",
      image: img3,
      className: "card-three",
    },
    {
      id: 4,
      title: "Project 4",
      image: img4,
      className: "card-four",
    },
    {
      id: 5,
      title: "Project 5",
      image: img5,
      className: "card-five",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;

    // Initial stacked layout
    gsap.set(cards, {
      // x: 0,
      // y: 0,
      // scale: 0.9,
      position: "absolute",
      // top: "50%",
      // left: "50%",
      // xPercent: -50,
      // yPercent: -50,
      zIndex: (i) => cards.length - i,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    // Animate to horizontal layout
    tl.to(cards, {
			left: "50%",
			top: "50%",
			xPercent: -50,
			yPercent: -50,
      x: (i) => (i - (cards.length - 1) / 2) * 300,
			y: 0,
      // y: (i) => i * 20, // slight vertical shift
      scale: 1,
			rotate: 0,
      // rotate: (i) => (i - 2) * 3,
      stagger: 0.1,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#111",
      }}
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className={`card ${project.className}`}
          style={{
            width: "260px",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            position: "absolute",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectsScroll;