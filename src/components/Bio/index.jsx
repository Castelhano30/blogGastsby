
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Feito por <strong>{author.name}</strong> <hr></hr> {author?.summary || null}
          {` `}
        </p>
      )}
    </div>
  )
}

export default Bio
