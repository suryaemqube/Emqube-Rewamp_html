// gatsby-ssr.js
import React from 'react';
import { PageStateProvider } from './src/components/context/PageStateContext';

export const wrapRootElement = ({ element }) => (
    <PageStateProvider>{element}</PageStateProvider>
);

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <script
      key="gtm-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-54SH2H3');
        `,
      }}
    />,
  ])

  setPreBodyComponents([
    <noscript
      key="gtm-noscript"
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54SH2H3"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
      }}
    />,
  ])
}