
import { useEffect ,useRef } from "react";
import Head from 'next/head';
import Script from 'next/script';


//import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.css';
import '/public/styles/index.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


// import '../public/styles/style.css';
// import '../public/styles/style.min.css';
// import '../public/styles/index.min.css';
//import '../styles/global.css';
//import '../styles/Home.css';


export default function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    document.body.classList.add("fade-in");
    
  },[])
  const animatedSVGsRef = useRef(null);

 
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  
    
    
  //     document.addEventListener("DOMContentLoaded", function () {
  //     document.body.classList.add("fade-in");
  //     });
  
  //     const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true, // Example option, adjust as needed
  //     });
    
    
  //     // Cleanup function
  //     return () => {
  //     Fancybox.destroy();
  //     if (scroll) {
  //       scroll.destroy();
  //       }
  //     };
  
  //     }}
  //     , []);

  const containerRef = useRef(null)
  return (
    <>
   
    <Head>
        <title>Create Next App</title>
  
        {/* <link rel="preload" href="/public/fonts/PowerGrotesk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>

        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" /> */}
        {/* <link rel="stylesheet" type="text/css" href="/styles/css/locomotive-scroll.min.css" />
        <link rel="stylesheet" type="text/css" href="/styles/index.css" /> */}
    </Head>
   

<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      dataDirection : 'up'
    
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
 
>

    <div  className="smooth-scroll"  data-scroll-container ref={containerRef} >
  
      
  
  <Component {...pageProps} />

  </div>
  </LocomotiveScrollProvider>
 

  <Script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js" strategy="beforeInteractive" ></Script>
	<Script src="https://unpkg.com/swiper/swiper-bundle.min.js"   strategy="beforeInteractive"></Script>
  <Script src="/js/locomotive-scroll.min.js" strategy="afterInteractive"></Script>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></Script>
	<Script src="/js/custom.js"  strategy="afterInteractive" ></Script>


  
  </>
  )
}