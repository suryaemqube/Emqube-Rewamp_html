// gatsby-browser.js
import React from 'react';
import { PageStateProvider } from './src/components/context/PageStateContext';

export const wrapRootElement = ({ element }) => (
    <PageStateProvider>{element}</PageStateProvider>
);
export const onRouteUpdate = ({ location, prevLocation }) => {
    if (prevLocation !== null && location.pathname !== prevLocation.pathname) {
        // if (location.pathname === '/kitchens/' || location.pathname === '/project-division/' || location.pathname === "/") {
            // window.location.reload();
            // console.log("reloaded", location, prevLocation)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        // }
    }
};