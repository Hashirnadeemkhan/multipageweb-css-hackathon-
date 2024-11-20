import Head from 'next/head';
import Banner from '@/components/Banner';
import Discovery from '@/components/Discovery';
import Navbar from '@/components/Navbar';
// Import other components similarly as you create them

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Dealership Homepage</title>
        <meta name="description" content="Discover our car dealership, financing solutions, and explore our latest car models and offers." />
      </Head>
      <Navbar/>
      <Banner />
      <Discovery />
      {/* Add other components here as you create them */}
    </>
  );
}
