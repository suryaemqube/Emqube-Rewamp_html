import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "/src/assets/css/common.css";
import "/src/assets/css/inside.css";
import "/src/assets/css/case-study-detail.css";

import Layout from "../components/Layout";

const PortfolioDetail = ({ data }) => {
  const post = data.wpPortfolio;

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
		<Layout isPortDetail>
			<>
				{/* Inside intro section starts */}
				<section className="inside-intro-wrapper">
					<div className="container">
						<div className="intro-left">
							<img src={post?.featuredImage?.node?.mediaItemUrl} alt={post?.title}></img>
						</div>
						<div className="intro-right">
							<div className="inside-intro-title">
								<h1 dangerouslySetInnerHTML={{__html: post?.title}} />
							</div>
							<div className="inside-intro-txt" dangerouslySetInnerHTML={{__html: post?.content}} />
						</div>
					</div>
				</section>
				{/* Inside intro section ends */}

				{/* case study detail section starts */}
				<section className="case-study-detail-wrapper">
					<div className="container">
						<div className="case-study-info-left">
							{post?.softwarePortfolioLayout?.clientName && 
								<div className="proj-client">
									<h2>Client</h2>
									<p dangerouslySetInnerHTML={{__html: post?.softwarePortfolioLayout?.clientName}} />
								</div>
							}
							{post?.softwarePortfolioLayout?.companyInfo && 
								<div className="proj-short-info">
									<h2>Company Brief</h2>
									<div dangerouslySetInnerHTML={{__html: post?.softwarePortfolioLayout?.companyInfo}} />
								</div>
							}
							{post?.softwarePortfolioLayout?.technologyLogos && 
								<div className="proj-tech-logo">
									<h2>Technology</h2>
									<ul>
										{post?.softwarePortfolioLayout?.technologyLogos.map((techLogo, index) => (
											<li>
												<img src={techLogo?.mediaItemUrl}></img>
											</li>
										))
										}
									</ul>
								</div>
							}
						</div>
						<div className="case-study-info-right">
							{post?.softwarePortfolioLayout?.aboutApplication && 
								<div className="proj-app">
									<h2>Application</h2>
									<div dangerouslySetInnerHTML={{__html: post?.softwarePortfolioLayout?.aboutApplication}} />
								</div>
							}
							{post?.softwarePortfolioLayout?.keyBenefitsList && 
							<div className="proj-key-benefit">
								<h2>Key Benefits</h2>
								<ul className="key-benefit-list">
									{post?.softwarePortfolioLayout?.keyBenefitsList.map((benifit, index) => (
										<li>
											<span className="tick-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
													<path d="M27.9998 9.33312L11.9998 25.3331L4.6665 17.9998L6.5465 16.1198L11.9998 21.5598L26.1198 7.45312L27.9998 9.33312Z" fill="#525151"/>
												</svg>
											</span>
											<p dangerouslySetInnerHTML={{__html: benifit?.keyBenefitsListText}} />
										</li>
										))
									}
								</ul>
							</div>
							}
							{post?.softwarePortfolioLayout?.projectCaseStudyFile && 
								<div className="download-case-study">
									<a href={post?.softwarePortfolioLayout?.projectCaseStudyFile?.link} className="view-all">Download Casestudy
										<span className="icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
												<rect y="24" width="33.939" height="33.939" rx="16.9695" transform="rotate(-45 0 24)" fill="white"/>
												<path d="M19.3177 23.4701L23.8631 28.0155M23.8631 28.0155L28.4086 23.4701M23.8631 28.0155V15.5156M15.9087 31.4245H31.8176" stroke="#4E9C5A" stroke-width="1.52381" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</span>
									</a>
								</div>
							}
						</div>
					</div>
				</section>
				{/* case study detail section ends */}

				{/* case study testimonial section starts */}
				{post?.softwarePortfolioLayout?.testimonialContent && 
					<section className="case-study-detail-testimonial">
						<div className="container">
							<div className="left-blockquote">
								<svg xmlns="http://www.w3.org/2000/svg" width="63" height="59" viewBox="0 0 63 59" fill="none">
									<path d="M0 58.88V30.59C0 11.4233 7.89667 1.30332 23.69 0.229996L26.68 0V13.8L24.15 14.03C18.17 14.7967 15.18 19.78 15.18 28.98V32.66H26.68V58.88H0ZM62.79 13.8L60.26 14.03C54.28 14.7967 51.29 19.78 51.29 28.98V32.66H62.79V58.88H36.11V30.59C36.11 11.4233 44.0067 1.30332 59.8 0.229996L62.79 0V13.8Z" fill="#C1C1C1"/>
								</svg>
							</div>
							<div className="right-blockquote">
								<svg xmlns="http://www.w3.org/2000/svg" width="63" height="59" viewBox="0 0 63 59" fill="none">
									<path d="M62.79 -0.001091V28.2889C62.79 47.4556 54.8934 57.5756 39.1 58.6489L36.11 58.8789V45.0789L38.64 44.8489C44.62 44.0822 47.61 39.0989 47.61 29.8989V26.2189H36.11V-0.001091H62.79ZM3.43323e-05 45.0789L2.53003 44.8489C8.51003 44.0822 11.5 39.0989 11.5 29.8989V26.2189H3.43323e-05V-0.001091H26.68V28.2889C26.68 47.4556 18.7834 57.5756 2.99003 58.6489L3.43323e-05 58.8789V45.0789Z" fill="#C1C1C1"/>
								</svg>
							</div>
							<div className="auth-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="228" height="229" viewBox="0 0 228 229" fill="none">
									<path opacity="0.37" d="M113.923 120.532C120.66 120.532 127.331 119.205 133.555 116.627C139.779 114.049 145.434 110.27 150.198 105.507C154.961 100.743 158.74 95.0879 161.318 88.8639C163.896 82.6399 165.223 75.969 165.223 69.2322C165.223 62.4954 163.896 55.8246 161.318 49.6006C158.74 43.3765 154.961 37.7213 150.198 32.9576C145.434 28.194 139.779 24.4153 133.555 21.8372C127.331 19.2591 120.66 17.9322 113.923 17.9322C100.318 17.9322 87.2692 23.337 77.6486 32.9576C68.028 42.5782 62.6232 55.6266 62.6232 69.2322C62.6232 82.8378 68.028 95.8862 77.6486 105.507C87.2692 115.127 100.318 120.532 113.923 120.532ZM114.003 3.63144e-06C129.019 -0.00488777 143.62 4.93174 155.552 14.0482C167.484 23.1647 176.084 35.9543 180.026 50.4438C183.968 64.9332 183.033 80.3173 177.364 94.2222C171.695 108.127 161.608 119.78 148.659 127.384C190.702 140.038 222.28 175.469 227.946 219.473C228.482 223.657 225.37 227.453 220.992 227.966C216.626 228.479 212.636 225.515 212.1 221.331C205.944 173.565 164.573 137.598 114.402 137.598C63.957 137.598 22.0506 173.633 15.906 221.331C15.3702 225.515 11.3802 228.479 7.014 227.966C2.6364 227.453 -0.475799 223.657 0.060001 219.473C5.7144 175.651 37.4634 140.266 79.575 127.498C66.5868 119.929 56.4538 108.292 50.7426 94.3866C45.0313 80.4812 44.0601 65.0815 47.979 50.5687C51.8978 36.0559 60.4886 23.2382 72.4229 14.0976C84.3572 4.95693 98.9704 0.00238559 114.003 3.63144e-06Z" fill="#C1C1C1"/>
								</svg>
							</div>
							<div className="auth-txt">
								<div dangerouslySetInnerHTML={{__html: post?.softwarePortfolioLayout?.testimonialContent}} />
								<p className="auth-name" dangerouslySetInnerHTML={{__html: `- ${post?.softwarePortfolioLayout?.testimonialAuthor}`}} />
							</div>
						</div>
					</section>
				}
				{/* case study testimonial section ends */}

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
  )
}

export const query = graphql`
  query PortfolioDetailQuery($id: String!) {
    wpPortfolio(id: { eq: $id }) {
      id
      title
      slug
      content
			featuredImage {
				node {
					altText
					mediaItemUrl
				}
			}
			softwarePortfolioLayout {
				aboutApplication
				clientName
				companyInfo
				keyBenefitsList {
					keyBenefitsListText
				}
				projectCaseStudyFile {
					altText
					link
				}
				technologyLogos {
					altText
					mediaItemUrl
				}
				testimonialAuthor
				testimonialContent
			}
    }
  }
`

export default PortfolioDetail