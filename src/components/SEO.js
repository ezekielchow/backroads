import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({
  title,
  description,
  image,
  pathname,
  article,
  imageWidth,
  imageHeight,
}) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            image: { defaultImage, defaultImageWidth, defaultImageHeight },
            twitterUsername,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          imageWidth: imageWidth || defaultImageWidth,
          imageHeight: imageHeight || defaultImageHeight,
          url: `${siteUrl}${pathname || "/"}`,
        }

        return (
          <>
            <Helmet
              htmlAttributes={{ lang: "en" }}
              title={seo.title}
              titleTemplate={titleTemplate}
            >
              <meta
                name="google-site-verification"
                content="fQQycs6DOLQYr9mjJjyDCeIkRT2gZ6WHzW_fzpC5ukA"
              />
              <meta name="description" content={seo.description} />

              {/* Facebook metas */}
              <meta name="image" content={seo.image} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {(article ? true : null) && (
                <meta property="og:type" content="article" />
              )}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
              {seo.image && <meta property="og:image" content={seo.image} />}
              {seo.imageWidth && (
                <meta property="og:image:width" content="seo.imageWidth" />
              )}
              {seo.imageWidth && (
                <meta property="og:image:width" content="seo.imageWidth" />
              )}

              {/* Twitter metas */}
              <meta name="twitter:card" content="summary_large_image" />
              {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
              )}
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.description && (
                <meta name="twitter:description" content={seo.description} />
              )}
              {seo.image && <meta name="twitter:image" content={seo.image} />}
            </Helmet>
          </>
        )
      }}
    />
  )
}
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        twitterUsername
        image {
          defaultImage: path
          defaultImageWidth: width
          defaultImageHeight: height
        }
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
