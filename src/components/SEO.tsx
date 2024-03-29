import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
  ogType?: string;
};

const SEO: React.FC<Props> = ({ title, description, ogType = 'webpage' }) => {
  const { site, file } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, titleTemplate, siteUrl, siteName } =
    site.siteMetadata;
  const ogpImagePath = file.childImageSharp.fixed.src;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    siteUrl: siteUrl,
    siteName: siteName,
    ogType: ogType,
    ogImagePath: `${siteUrl}${ogpImagePath}`,
    ogLocale: 'ja_JP',
  };

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang="ja" />
      <title>{seo.title}</title>
      <meta name="description" content={defaultDescription} />
      <link rel="canonical" href={seo.siteUrl} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:image" content={seo.ogImagePath} />
      <meta property="og:locale" content={seo.ogLocale} />
    </Helmet>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        titleTemplate
        siteUrl
        siteName
      }
    }

    file(relativePath: { eq: "mbp.jpg" }) {
      childImageSharp {
        fixed(width: 1920) {
          src
        }
      }
    }
  }
`;

export default SEO;
