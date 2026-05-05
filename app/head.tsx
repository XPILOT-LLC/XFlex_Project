export default function Head() {
  const logo = "https://www.xflex.ae/logo.png";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "XFLEX",
    "url": "https://www.xflex.ae",
    "logo": logo,
  };

  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="48x48" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
