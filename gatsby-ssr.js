// gatsby-ssr.js
import React from 'react';
import { PageStateProvider } from './src/components/context/PageStateContext';

export const wrapRootElement = ({ element }) => (
    <PageStateProvider>{element}</PageStateProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
    // setHeadComponents([
    //   <script
    //     key="gtag"
    //     async
    //     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GMT_CODE}`}
    //   />,
    //   <script
    //     key="gtag-init"
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag(){dataLayer.push(arguments);}
    //         gtag('js', new Date());
    //         gtag('config', '${process.env.GATSBY_GMT_CODE}');
    //       `,
    //     }}
    //   />,
    // ]);
  };