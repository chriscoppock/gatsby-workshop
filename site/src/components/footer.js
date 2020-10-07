import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return {
    data: {
      site: {
        siteMetadata: {
          description: "we break react configs for fun",
          title: "newReactConf",
        },
      },
    },
    extensions: {},
  };
}
