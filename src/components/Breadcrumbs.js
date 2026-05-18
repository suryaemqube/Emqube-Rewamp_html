import React, { useEffect, useState } from "react";
import axios from "axios";

const WEBSITE_URL = process.env.GATSBY_BASE_URL;

const Breadcrumb = ({ postId }) => {
  const PAGEID = postId;
  const [jsonData, setJsonData] = useState(null);
  const [token, setToken] = useState("");

  const shortUrl = (fullUrl) => {
    const url = fullUrl;
    const urlObject = new URL(url);
    const desiredPart = urlObject.pathname;
    return desiredPart;
  };
  useEffect(() => {
    const fetchToken = async () => {
      try {
         const response = await fetch(`${process.env.GATSBY_MAIN_URL}/.netlify/functions/fghdfgrtbsrd`);
        const { token } = await response.json();
        setToken(token);
      } catch (error) { }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchBreadcrumbs = async () => {
      try {
        const response = await axios.get(
          `${WEBSITE_URL}/wp-json/bcn/v1/post/${PAGEID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setJsonData(response.data);
        // console.log('breadcrumbs:', response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchBreadcrumbs();
  }, [postId]);

  if (!jsonData) {
    return <div>Loading breadcrumbs...</div>;
  }

  const itemListElements = jsonData.itemListElement.map((item, index) => (
    <span key={index}>
      {index > 0 && <span className="seperate"> &gt; </span>}
      {index === jsonData.itemListElement.length - 1 ? (
        <span className="post post-page current-item" dangerouslySetInnerHTML={{ __html: item.item.name }} />
      ) : (
        <>
          <a
            href={item.item["@id"] === WEBSITE_URL ? "https://hacker.ae/" : "https://hacker.ae"+shortUrl(item.item["@id"])}
          >
            <span dangerouslySetInnerHTML={{ __html: item.item.name === "Häcker" ? "Home" : item.item.name }} />
          </a> 
        </>
      )}
    </span>
  ));
  

  return <>{itemListElements}</>;
};

export default Breadcrumb;