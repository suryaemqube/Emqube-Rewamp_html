// gatsby-browser.js
import React from 'react';
import { PageStateProvider } from './src/components/context/PageStateContext';

export const wrapRootElement = ({ element }) => (
    <PageStateProvider>{element}</PageStateProvider>
);


export const onClientEntry = () => {
  if (typeof window === "undefined") return;

  const EVENTS = ["mousemove", "click", "keydown", "wheel", "touchmove", "touchend"];
  let isInteracted = false;

  const loadScripts = () => {
    if (isInteracted) return;
    isInteracted = true;

    // Load Google Analytics
    // const gaScript = document.createElement("script");
    // gaScript.async = true;
    // gaScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-16971198-1";
    // document.head.appendChild(gaScript);

    // const gaInline = document.createElement("script");
    // gaInline.innerHTML = `
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'UA-16971198-1');
    // `;
    // document.head.appendChild(gaInline);

    // Load Google Analytics - given by abdullah - 31-08-2026 - starts
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-6DME89FC29";
    document.head.appendChild(gaScript);

    const gaInline = document.createElement("script");
    gaInline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6DME89FC29');
    `;
    document.head.appendChild(gaInline);
    // Load Google Analytics - given by abdullah - 31-08-2026 - ends

    // Load GTM
    const gtmInline = document.createElement("script");
    gtmInline.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KFWMDJVQ');
    `;
    document.head.appendChild(gtmInline);

    // Remove all listeners after loading
    EVENTS.forEach(event => {
      document.removeEventListener(event, loadScripts);
    });
  };

  EVENTS.forEach(event => {
    document.addEventListener(event, loadScripts, { passive: true });
  });
};
