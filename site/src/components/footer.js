import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

export default function footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <div className="bg-white ">
@@ -11,7 +22,7 @@ export default function footer() {
              to="/"
              className="no-underline text-gray-700 hover:text-gray-500"
            >
              &copy; SketchXConf 2020
              &copy;{data.site.siteMetadata.title}
            </Link>
          </p>
