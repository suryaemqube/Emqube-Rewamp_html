import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// src/components/FaqSchema.js
const FaqSchema = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.faqsTitle,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.faqsContent
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default FaqSchema;