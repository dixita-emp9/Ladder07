// pages/[slug].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (slug) {
      // Example data fetching based on slug
      fetch(`/api/pages/${slug}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [slug]);

  if (!data) {
    return (
    <>
    <Header/>
    
    <section data-scroll-section className="our_work comingsoon">

      <div className='container'>

      <div className="compliance_title text_center"><h2 className="h2_title">Coming Soon...</h2></div>
      </div>
    </section>
    <Footer/>
    </>
 ); }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Page;
