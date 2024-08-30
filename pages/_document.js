// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
           <Head>
        <title>Create Next App</title>
  
        <link rel="preload" href="../public/fonts/PowerGrotesk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>

        <link rel="icon" href="/favicon.ico" />
        
        <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />
	    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
        <link rel="stylesheet" type="text/css" href="../public/styles/css/locomotive-scroll.min.css" />

	    <link rel="stylesheet" type="text/css" href="../styles/index.css" />
	    <link rel="stylesheet" type="text/css" href="../styles/css/bootstrap-grid.css" />
	    <link rel="stylesheet" type="text/css" href="../styles/css/bootstrap-utilities.css" />
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link> */}
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
