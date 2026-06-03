/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children, isContactPage = false, seoData, pageUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  
   // ✅ No window — use siteUrl from config + pageUrl prop
  const siteUrl = site.siteMetadata?.siteUrl || "https://www.emqube.com"
  const resolvedUrl = pageUrl ? `${siteUrl}${pageUrl}` : siteUrl

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  // ✅ Safe URL for contact schema
  // const pageUrl = typeof window !== "undefined" ? window.location.href : ""
   // ✅ Avoid window during SSR — use pageUrl prop directly
  // const resolvedUrl = pageUrl ? `https://www.emqube.com${pageUrl}` : ""
 

  var jsonSchema = seoData && seoData.schema ? seoData.schema.raw : "{}";
  var jsonObject = JSON.parse(jsonSchema);

  // 👇 Add this temporarily
  console.log("isContactPage:", isContactPage)
  console.log("@graph exists:", !!jsonObject["@graph"])
  console.log("jsonObject:", jsonObject)
  
  if (isContactPage && jsonObject["@graph"]) {
    jsonObject["@graph"].push({
      "@type": "ContactPage",
      "@id": `${resolvedUrl}#contactpage`,
      "url": resolvedUrl,
      "name": "Contact emQube",
      "description": "Contact emQube for software development, digital transformation and consulting services.",
      "inLanguage": "en-US"
    })

    jsonObject["@graph"].push({
      "@type": "LocalBusiness",
      "@id": "https://www.emqube.com/#localbusiness",
      "name": "emQube",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#801 M Square, Sheikh Khalifa Bin Zayed Street. Dubai. UAE",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "email": "info@emqube.com"
    })
  }

  if (jsonObject && Object.keys(jsonObject).length !== 0) {
    jsonObject = replaceSlashWithUrl(jsonObject);
  }
  

 

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      {/* ✅ Temporarily add this to see what's actually being rendered */}
      <meta name="debug-isContactPage" content={String(isContactPage)} />
      <meta name="debug-resolvedUrl" content={resolvedUrl} />
      <meta name="debug-graphCount" content={String(jsonObject?.["@graph"]?.length)} />

      <script type="application/ld+json">{Object.keys(jsonObject).length !== 0 ? JSON.stringify(jsonObject, null, 2) : "{}"}</script>
      
      {children}
    </>
  )
}

export default Seo
