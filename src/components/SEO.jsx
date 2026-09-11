import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = 'website', image = '/KB.svg', url }) {
  const siteTitle = 'Diene Thiam | Frontend, Fullstack & Mobile Developer';
  const fullTitle = title ? `${title} | Diene Thiam` : siteTitle;
  const metaDescription = description || 'Portfolio de Diene Thiam, Développeur Frontend, Fullstack & Mobile. Découvrez mes projets, compétences et réalisations premium.';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={metaDescription} />
      
      {/* Open Graph / Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content="Diene Thiam Portfolio" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
