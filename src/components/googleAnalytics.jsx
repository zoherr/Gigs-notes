// GoogleAnalytics.jsx

import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TTSXXT2G23" />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TTSXXT2G23', {
            page_path: window.location.pathname,
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
