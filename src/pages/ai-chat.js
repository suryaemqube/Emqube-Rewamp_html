import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
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
import "/src/assets/css/ai-chat.css";

import Seo from "../components/SeoMeta";
import Breadcrumb from "../components/Breadcrumbs";
import Layout from "../components/Layout";



gsap.registerPlugin(ScrollToPlugin);

export default function Reference({ data }) {

    const refMain = data?.wpPage?.referencesPageLayout || {};

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

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
        script.async = true;
        document.body.appendChild(script);

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        // link2.href = "https://emqube.com/wp-content/themes/emqube_revamp/styles/home-ai.css?ver=1779776138";
        document.head.appendChild(link2);

        return () => {
            document.body.removeChild(script);
            document.head.removeChild(link);
            document.head.removeChild(link2);
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return

        const dfMessenger = document.querySelector('df-messenger');

        window.addEventListener("df-messenger-loaded", () => {
            console.log("df-messenger is now ready.");

            if (!dfMessenger) {
                console.error("df-messenger element not found.");
                return;
            }

            const payloadSent = sessionStorage.getItem('customCardSent');

            if (!payloadSent) {
                const payload = [
                    {
                        "type": "chips",
                        "options": [
                            {
                                "text": "What is your expertise in software development?",
                                "image": {
                                    "rawUrl": "https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/plus.svg"
                                },
                            },
                            {
                                "text": "Do you offer Digital Marketing services?",
                                "image": {
                                    "rawUrl": "https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/plus.svg"
                                },
                            },
                            {
                                "text": "Tell me more about emQube?",
                                "image": {
                                    "rawUrl": "https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/plus.svg"
                                },
                            },
                            {
                                "text": "Show me your projects portfolio.",
                                "image": {
                                    "rawUrl": "https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/plus.svg"
                                },
                            }
                        ]
                    }
                ];

                dfMessenger.renderCustomCard(payload);
                sessionStorage.setItem('customCardSent', 'true');
            }
        });


        const micButton = document.getElementById("mic");
        const SpeechRecognition = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);

        if (SpeechRecognition && micButton) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            micButton.addEventListener("click", () => {
                recognition.start();
            });

            recognition.onresult = (event) => {
                const voiceMessage = event.results[0][0].transcript;
                console.log("You said:", voiceMessage);

                const messenger = document.querySelector("df-messenger");

                if (!voiceMessage) {
                    console.warn("No text found.");
                    return;
                }
                if (messenger) {
                    messenger.renderCustomText(voiceMessage, false);
                    messenger.sendQuery(voiceMessage);
                }
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
            };
        } else if (micButton) {
            micButton.style.display = 'none';
        }





        let guestId = sessionStorage.getItem("guest-id");

        const generateGuestId = async () => {
            try {
                const response = await fetch("https://emqube.com/wp-json/custom/v1/ai-guest-user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                if (data.success && data.guest_user_id) {
                    guestId = data.guest_user_id;
                    sessionStorage.setItem("guest-id", guestId);
                }
            } catch (error) {
                console.error("Error generating guest ID:", error);
            }
        };

        if (!guestId) {
            generateGuestId();
        }

        if (typeof window === 'undefined') return
        window.addEventListener("df-response-received", async (event) => {
            try {
                const messages = event?.detail?.data?.messages || [];
                const chatResponse = messages.filter((message) => message.type === "text");

                let answer = "";
                chatResponse.forEach((message) => {
                    if (message?.text) {
                        answer += message.text;
                    }
                });

                const question = event?.detail?.raw?.queryResult?.text || "";

                console.log("Question:", question);
                console.log("Answer:", answer);

                if (!guestId) {
                    await generateGuestId();
                    guestId = sessionStorage.getItem("guest-id");
                }
                if (!guestId || !question || !answer) return

                const res = await fetch("https://emqube.com/wp-json/custom/v1/ai-response", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        guest_user_id: guestId,
                        question: question,
                        answer: answer,
                    }),
                });

                const result = await res.json();
                if (!result.success) {
                    console.error("Failed to save chat:", result.message || result);
                } else {
                    console.log("Chat saved successfully:", result);
                }
            } catch (err) {
                console.error("Error processing Dialogflow response:", err);
            }
        });

    }, []);

    useEffect(() => {
        const storageKey = 'chatStarted'; // Key to track chat state in localStorage

        // Function to update UI based on chat state
        function updateChatView(isChatStarted) {
            const topContent = document.querySelector('.emqube-details'); // The top content to hide
            const chatbox = document.querySelector('.chatbox'); // The chatbox
            const bottomLink = document.querySelector('.btm-link-slider'); // Bottom slider link
            const chatBubble = document.querySelector('.chat-bubble-wrapp');

            if (isChatStarted) {
                if (topContent) topContent.classList.add('off'); // Hide top content
                if (chatBubble) chatBubble.classList.add('hide');

                document
                    .querySelector('.emqube-gpt-new')
                    ?.classList.add('repostion-wrap-new');

                if (chatbox) chatbox.classList.add('reposition'); // Reposition chatbox
                if (bottomLink) bottomLink.classList.add('show'); // Show bottom link
            } else {
                document
                    .querySelector('.emqube-gpt-new')
                    ?.classList.remove('repostion-wrap-new');

                if (chatbox) chatbox.classList.remove('reposition');
                if (bottomLink) bottomLink.classList.remove('show');
            }
        }

        const dfMessenger = document.querySelector('df-messenger');

        if (dfMessenger) {
            dfMessenger.addEventListener('df-request-sent', function () {
                document.querySelector('.emqube-details')?.classList.add('off');
                document.querySelector('.chat-bubble-wrapp')?.classList.add('hide');
                document.querySelector('.chatbox')?.classList.add('reposition');
                document.querySelector('.emqube-gpt-new')?.classList.add('repostion-wrap-new');

                setTimeout(function () {
                    document.querySelector('.btm-link-slider')?.classList.add('show');
                }, 500);
            });

            // Detect when the user sends a message
            dfMessenger.addEventListener('df-message-sent', function () {
                console.log('Chat started by user');
                localStorage.setItem(storageKey, 'true'); // Save chat state
                updateChatView(true); // Update UI to hide top content
            });

            // Optional: Detect when the bot responds
            dfMessenger.addEventListener('df-response-received', function () {
                console.log('Bot sent a response');
            });

            // Detect if chat is already started from localStorage
            const checkIfChatStarted = sessionStorage.getItem(storageKey);
            if (checkIfChatStarted === 'true') {
                updateChatView(true); // Hide top content if chat is started
            }
        }

        // Check localStorage/sessionStorage to see if chat has started
        const chatStarted = sessionStorage.getItem(storageKey) === 'true';
        console.log('Chat started status from localStorage: ', chatStarted);
        updateChatView(chatStarted); // Apply the correct UI state on page load

        // Handle page navigation (e.g., going to non-AI website)
        document.querySelectorAll('.go-to-non-ai-web, .go-to-non-ai-web-btm').forEach((button) => {
            button.addEventListener('click', function (e) {
                localStorage.removeItem(storageKey); // Clear chat state when leaving
                updateChatView(false); // Reset UI when leaving
            });
        });

        // Session timeout (e.g., 10 seconds for demo)
        const SESSION_TIMEOUT = 10 * 1000;

        // Elements
        const emqubeGptNew = document.querySelector('.emqube-gpt-new');
        const section1 = document.getElementById('section1');
        const nextButton = document.getElementById('nextButton');
        const chatbox = document.querySelector('.chatbox');
        const chatBubble = document.querySelector('.chat-bubble-wrapp');

        // Function to handle initial visibility
        function checkSession() {
            if (sessionStorage.getItem('hideIntro')) {
                // If session exists, show section 2
                if (emqubeGptNew) emqubeGptNew.classList.add('repostion-wrap-add');
                if (section1) section1.classList.add('off');
                if (chatBubble) chatBubble.classList.add('hide');
                setTimeout(() => {
                    if (nextButton) nextButton.classList.add('visible');
                }, 2000);
                if (chatbox) {
                    chatbox.classList.add('reposition');
                    chatbox.classList.add('chat-hide');
                }
            } else {
                // Default: show section 1
                if (section1) section1.classList.remove('off');
                if (chatBubble) chatBubble.classList.remove('hide');
                if (emqubeGptNew) emqubeGptNew.classList.remove('repostion-wrap-add');
                setTimeout(() => {
                    if (nextButton) nextButton.classList.remove('visible');
                }, 2000);
                if (chatbox) {
                    chatbox.classList.remove('reposition');
                    chatbox.classList.remove('chat-hide');
                }
            }
        }

        // Check session on page load
        checkSession();

        // Handle Next button click
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                sessionStorage.setItem('hideIntro', 'true'); // Store session
                if (section1) section1.classList.add('off');
                if (chatBubble) chatBubble.classList.add('hide');
                if (emqubeGptNew) emqubeGptNew.classList.add('repostion-wrap-add');
                setTimeout(() => {
                    if (nextButton) nextButton.classList.add('visible');
                }, 2000);
                if (chatbox) {
                    chatbox.classList.add('reposition');
                    chatbox.classList.add('chat-hide');
                }
            });
        }

        function sendToChatbot(questionText) {
            const dfMessengerEl = document.querySelector('df-messenger');
            if (!dfMessengerEl) return;

            const messengerShadow = dfMessengerEl.shadowRoot;
            if (!messengerShadow) return;

            const dfChat = messengerShadow.querySelector('df-messenger-chat');
            if (!dfChat) return;

            const chatShadow = dfChat.shadowRoot;
            if (!chatShadow) return;

            const inputField = chatShadow.querySelector('input.chat-input');
            const sendButton = chatShadow.querySelector('button.send-button');

            if (inputField && sendButton) {
                inputField.value = questionText;
                inputField.dispatchEvent(new Event('input', { bubbles: true }));
                sendButton.click();
            }
        }

        const questionTimer = setTimeout(() => {
            document.querySelectorAll('.chat-ques-wrapp li').forEach((item) => {
                item.addEventListener('click', function () {
                    const question = this.textContent.trim();
                    sendToChatbot(question);
                });
            });
        }, 2000);
        if (typeof window === 'undefined') return
        let checkPreloader = setInterval(function () {
            let preloader = document.querySelector("#preloader");

            if (!preloader || window.getComputedStyle(preloader).opacity === "0" || window.getComputedStyle(preloader).display === "none") {
                clearInterval(checkPreloader); // Stop checking

                const winWidth = window.innerWidth;

                if (winWidth >= 1367) {
                    let tl = gsap.timeline();
                    let masterTimeline = gsap.timeline({ repeat: -1, delay: 2 });

                    tl.to(".chatbox.chat-hide .chat-wrapp,.chatbox.reposition .chat-wrapp", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    });

                    tl.to(".chat-bubble-wrapp",
                        { scale: 1, duration: 1, ease: "power2.out", delay: 1 }
                    );

                    tl.set(".emqube-details h2.anim-typewriter-2,.anim-txt-1", {
                        width: "auto",
                    });

                    // Left Content Staggered Animation
                    tl.fromTo(".emqube-details h1,.emqube-details p,.emqube-details h2.anim-typewriter-2", {
                        x: "-100%",
                        opacity: 0,
                    }, {
                        x: "0",
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        stagger: 0.3, // Stagger effect
                    });

                    // Move h1 & p up slightly after appearing
                    tl.to(".emqube-details h1,.emqube-details p,.emqube-details h2.anim-typewriter-2", {
                        y: "0px",
                        duration: 0.8,
                        ease: "power2.out",
                    });

                    // Anchor tag shows after delay
                    tl.to(".emqube-details a", {
                        opacity: 1,
                        y: "0px",
                        duration: 0.8,
                        ease: "power2.out",
                    }, "-=0.8");

                    // 4. Add typewriter animation sequence
                    tl.add(() => {
                        const typewriter = gsap.timeline();

                        // Typewriter H2 animations
                        const items = [".anim-txt-1", ".anim-txt-2", ".anim-txt-3"];

                        items.forEach((selector, index) => {
                            typewriter.fromTo(selector, {
                                width: "0"
                            }, {
                                width: "auto",
                                duration: 0.7,
                                ease: "steps(35)"
                            });

                            typewriter.to(selector, {
                                width: 0,
                                delay: 1,
                                duration: 0.7,
                                ease: "power2.inOut"
                            });

                            typewriter.set(selector, { borderRight: "none" });
                        });

                        masterTimeline.add(typewriter);
                    });

                    if (winWidth >= 1800) {
                        tl.to(".chat-bubble-wrapp,.chat-bubble-wrapp p", {
                            width: "680px",
                            y: "0",
                            height: "52px",
                            duration: 1,
                            ease: "power2.out"
                        });
                    }
                    else if (winWidth >= 1650) {
                        tl.to(".chat-bubble-wrapp,.chat-bubble-wrapp p", {
                            width: "570px",
                            y: "0",
                            height: "45px",
                            duration: 1,
                            ease: "power2.out"
                        });
                    }
                    else if (winWidth >= 1600) {
                        tl.to(".chat-bubble-wrapp,.chat-bubble-wrapp p", {
                            width: "520px",
                            y: "0",
                            height: "45px",
                            duration: 1,
                            ease: "power2.out"
                        });
                    }
                    else if (winWidth >= 1200) {
                        tl.to(".chat-bubble-wrapp,.chat-bubble-wrapp p", {
                            width: "450px",
                            y: "0",
                            height: "52px",
                            duration: 1,
                            ease: "power2.out"
                        });
                    }

                    tl.to(".chat-bubble-wrapp", {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => document.querySelector(".chat-bubble-wrapp")?.remove()
                    });

                    tl.to(".chatbox .chat-wrapp", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    }, "-=1.3");

                    tl.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox #voiceWidget", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    }, "-=1");

                    tl.to(".chatbox .chat-ques-wrapp li", {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.08,
                    }, "-=1.2");
                }
                else if (winWidth >= 1024) {
                    let tl = gsap.timeline();
                    let masterTimeline = gsap.timeline({ repeat: -1, delay: 2 });

                    tl.to(".chatbox.chat-hide .chat-wrapp,.chatbox.reposition .chat-wrapp", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    });

                    tl.to(".chat-bubble-wrapp",
                        { scale: 1, duration: 1, ease: "power2.out", delay: 1 }
                    );

                    tl.set(".emqube-details h2.anim-typewriter-2,.anim-txt-1", {
                        width: "auto",
                    });

                    // Left Content Staggered Animation
                    tl.fromTo(".emqube-details h1,.emqube-details p,.emqube-details h2.anim-typewriter-2", {
                        x: "-100%",
                        opacity: 0,
                    }, {
                        x: "0",
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        stagger: 0.3, // Stagger effect
                    });

                    // Move h1 & p up slightly after appearing
                    tl.to(".emqube-details h1,.emqube-details p,.emqube-details h2.anim-typewriter-2", {
                        y: "0px",
                        duration: 0.8,
                        ease: "power2.out",
                    });

                    // Anchor tag shows after delay
                    tl.to(".emqube-details a", {
                        opacity: 1,
                        y: "0px",
                        duration: 0.8,
                        ease: "power2.out",
                    }, "-=0.8");

                    // 4. Add typewriter animation sequence
                    tl.add(() => {
                        const typewriter = gsap.timeline();

                        // Typewriter H2 animations
                        const items = [".anim-txt-1", ".anim-txt-2", ".anim-txt-3"];

                        items.forEach((selector, index) => {
                            typewriter.fromTo(selector, {
                                width: "0"
                            }, {
                                width: "auto",
                                duration: 2,
                                ease: "steps(35)"
                            });

                            typewriter.to(selector, {
                                width: 0,
                                delay: 2,
                                duration: 1,
                                ease: "power2.inOut"
                            });

                            typewriter.set(selector, { borderRight: "none" });
                        });

                        masterTimeline.add(typewriter);
                    });

                    if (winWidth >= 1100) {
                        tl.to(".chat-bubble-wrapp,.chat-bubble-wrapp p", {
                            width: "320px",
                            y: "0",
                            height: "52px",
                            duration: 1,
                            ease: "power2.out"
                        });
                    }
                    else {
                        tl.to(".chat-bubble-wrapp,.chat-bubble-wrapp p", {
                            width: "470px",
                            y: "-70",
                            height: "52px",
                            duration: 1,
                            ease: "power2.out"
                        });
                    }

                    tl.to(".chat-bubble-wrapp", {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => document.querySelector(".chat-bubble-wrapp")?.remove()
                    });

                    tl.to(".chatbox .chat-wrapp", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    }, "-=1.3");

                    tl.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox #voiceWidget", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    }, "-=1");

                    tl.to(".chatbox .chat-ques-wrapp li", {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.08,
                    }, "-=1.2");
                }
                else if (winWidth <= 1023 && winWidth > 767) {
                    let tlMobile = gsap.timeline();
                    let masterTimeline = gsap.timeline({ repeat: -1, delay: 2 });

                    tlMobile.to(".chatbox.chat-hide .chat-wrapp,.chatbox.reposition .chat-wrapp", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    });

                    tlMobile.to(".chat-bubble-wrapp", {
                        scale: 0.7,
                        duration: 1,
                        ease: "power2.out",
                        delay: 1
                    });

                    tlMobile.set(".emqube-details h2.anim-typewriter-2,.anim-txt-1", {
                        width: "auto",
                        y: "4px"
                    });
                    tlMobile.set(".anim-txt-2,.anim-txt-3", {
                        y: "4px"
                    });

                    tlMobile.to(".emqube-details h1,.emqube-details p", {
                        y: "0",
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.08,
                    }, "-=0.5");

                    tlMobile.fromTo(".chat-bubble-wrapp",
                        { opacity: 1, scale: 0.7 },
                        {
                            scale: 1,
                            duration: 1,
                            ease: "power2.out",
                            delay: 0.2,
                            onComplete: () => document.querySelector(".chat-bubble-wrapp")?.remove()
                        }
                    );

                    tlMobile.add(() => {
                        const typewriter = gsap.timeline();

                        // Typewriter H2 animations
                        const items = [".anim-txt-1", ".anim-txt-2", ".anim-txt-3"];

                        items.forEach((selector, index) => {
                            typewriter.fromTo(selector, {
                                width: "0"
                            }, {
                                width: "auto",
                                duration: 0.7,
                                ease: "steps(35)"
                            });

                            typewriter.to(selector, {
                                width: 0,
                                delay: 1,
                                duration: 0.7,
                                ease: "power2.inOut"
                            });

                            typewriter.set(selector, { borderRight: "none" });
                        });

                        masterTimeline.add(typewriter);
                    });

                    tlMobile.to(".emqube-details p", {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.08,
                        onComplete: () => document.querySelector(".para-wrapp")?.remove()
                    }, "-=0.8");

                    tlMobile.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox .chat-wrapp", {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power3.out"
                    });

                    tlMobile.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox #voiceWidget", {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power3.out"
                    });

                    tlMobile.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox", {
                        duration: 1.5,
                        ease: "power3.out"
                    }, "-=1.3");

                    tlMobile.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox .chat-ques-wrapp", {
                        opacity: 1,
                        y: "0",
                        duration: 1.5,
                        ease: "power3.out"
                    }, "-=0.8");

                    tlMobile.fromTo(".emqube-gpt-new .btm-link-slider", {
                        opacity: 0,
                        duration: 1.5,
                        y: "50",
                        ease: "power3.out"
                    },
                        {
                            opacity: 1,
                            y: "0",
                            duration: 1.5,
                            ease: "power3.out"
                        },
                        "-=0.9");
                }
                else if (winWidth <= 767) {
                    let tlMobile = gsap.timeline();
                    let masterTimeline = gsap.timeline({ repeat: -1, delay: 2 });

                    tlMobile.to(".chatbox.chat-hide .chat-wrapp,.chatbox.reposition .chat-wrapp", {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                    });

                    tlMobile.to(".chat-bubble-wrapp", {
                        scale: 0.7,
                        duration: 1,
                        ease: "power2.out",
                        delay: 1
                    });

                    tlMobile.set(".emqube-details h2.anim-typewriter-2,.anim-txt-1", {
                        width: "auto",
                    }, "-=2.5");

                    tlMobile.to(".emqube-details h1,.emqube-details p", {
                        y: "0",
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.08,
                    }, "-=0.5");

                    tlMobile.to(".emqube-details h2.anim-typewriter-2", {
                        top: "31%",
                        duration: 0.8,
                    }, "-=0.8");

                    tlMobile.fromTo(".chat-bubble-wrapp",
                        { opacity: 1, scale: 0.7 },
                        {
                            scale: 1,
                            duration: 1,
                            ease: "power2.out",
                            delay: 0.2,
                            onComplete: () => document.querySelector(".chat-bubble-wrapp")?.remove()
                        }
                    );

                    tlMobile.add(() => {
                        const typewriter = gsap.timeline();

                        // Typewriter H2 animations
                        const items = [".anim-txt-1", ".anim-txt-2", ".anim-txt-3"];

                        items.forEach((selector, index) => {
                            typewriter.fromTo(selector, {
                                width: "0"
                            }, {
                                width: "auto",
                                duration: 0.7,
                                ease: "steps(35)"
                            });

                            typewriter.to(selector, {
                                width: 0,
                                delay: 1,
                                duration: 0.7,
                                ease: "power2.inOut"
                            });

                            typewriter.set(selector, { borderRight: "none" });
                        });

                        masterTimeline.add(typewriter);
                    });

                    tlMobile.to(".emqube-details p", {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.08,
                        onComplete: () => document.querySelector(".para-wrapp")?.remove()
                    }, "-=0.8");

                    tlMobile.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox .chat-wrapp", {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power3.out"
                    });

                    tlMobile.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox #voiceWidget", {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power3.out"
                    });

                    tlMobile.to(".emqube-gpt-new .emqube-gpt-wrapp .chatbox", {
                        y: "-10%",
                        duration: 1.5,
                        ease: "power3.out"
                    }, "-=2.5");

                    tlMobile.fromTo(".emqube-gpt-new .emqube-gpt-wrapp .chatbox .chat-ques-wrapp", {
                        opacity: 0,
                        y: "0",
                        duration: 1.5,
                        ease: "power3.out"
                    }, {
                        opacity: 1,
                        y: "0",
                        duration: 1.5,
                        ease: "power3.out"
                    });

                    tlMobile.fromTo(".emqube-gpt-new .btm-link-slider", {
                        opacity: 0,
                        duration: 1.5,
                        y: "50",
                        ease: "power3.out"
                    },
                        {
                            opacity: 1,
                            y: "-64%",
                            duration: 1.5,
                            ease: "power3.out"
                        },
                        "-=2");
                }
            }
        }, 100);

        return () => {
            clearTimeout(questionTimer);
            clearInterval(checkPreloader);
        };
    }, []);

    return (
        <Layout isChat>
            <section className="emqube-gpt emqube-gpt-new" id="ai-website">
                <div className="chat-bubble-wrapp">
                    <div className="chat-bubble">
                        <p>Let’s Start! <span className="icon"><noscript>
                            <img src="https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/bot-icon.svg" alt="Lets Start" />
                        </noscript>
                            <img src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' className="lazyload" data-src="https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/bot-icon.svg" alt="Lets Start" />
                        </span>
                        </p>
                    </div>
                </div>
                <div className="emqube-gpt-wrapp">
                    <div className="chatbox">
                        <div id="voiceWidget">
                            <svg id="mic" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z" /></svg>
                            <div id="suggestions" style={{ marginTop: '10px' }}></div>
                        </div>
                        <div className="chat-wrapp">
                            <df-messenger
                                location="asia-south1"
                                project-id="emqube-chatbot"
                                agent-id="7dff986a-9319-48fe-94ea-08f7bd661bf8"
                                language-code="en"
                                max-query-length="-1">
                                <df-messenger-chat
                                    chat-title="" placeholder-text="Ask Anything..." bot-actor-image="https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/user-agent-1.svg" user-actor-image="https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/user-actor-1.svg">
                                </df-messenger-chat>
                            </df-messenger>
                        </div>
                    </div>
                    <div className="emqube-details" id="section1">
                        <div className="ai-intro-txt">
                            <div className="your-partner">
                                <h1 className="line-1 anim-typewriter-1">Your Partner for <br /> Digital
																	<span className="anim-txt">
																		<span className="anim-txt-1">Transformation</span>
																		<span className="anim-txt-2">Presence</span>
																		<span className="anim-txt-3">Disruption</span>
																	</span>
                                </h1>
                            </div>
                            <div className="para-wrapp">
                                <p>Interact with our AI powered website to know more about us.</p>
                                <p>We are pioneering AI innovations in business digital transformation.</p>
                                <p>We built this new wave website. <a href="/contact-us" className="txt-b"><strong>Get yours too.</strong></a></p>
                                <a href="/" id="top-slider-mob" className="go-to-non-ai-web main-web-btn">Go to our Classic Website</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btm-link-slider" id="nextButton" style={{ display: 'none' }}>
                    <a href="/" id="top-slider-mob-wrapp" className="go-to-non-ai-web main-web-btn-down">Go to our Classic Website</a>
                </div>
            </section>

        </Layout>
    );
}

export const Head = ({ data }) => (
  <Seo
    // seoData={data?.wpPage?.seo || []}
		bodyClass={"ai-chat-main"}
    // pageUrl={data?.wpPage?.uri}
  >

  </Seo>
);

export const data = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 183}) {
      title
      }
    }
`;