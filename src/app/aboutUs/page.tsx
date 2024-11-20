"use client"
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import team1 from "/public/team1.jpg";
import team2 from "/public/team-2.png";
import team3 from "/public/team-3.png";

import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });


const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Car Dealership</title>
        <meta name="description" content="Learn more about our car dealership, our values, mission, and the team that makes it all possible." />
      </Head>
      <Navbar />
      <section className="about-intro">
        <MotionDiv 
          className="container" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h1>About Us</h1>
          <p>
            Welcome to CarDealer, where your driving experience begins. We are dedicated to providing the best vehicles and exceptional customer service to help you find your perfect car.
          </p>
        </MotionDiv>
      </section>

      <section className="mission-section">
        <MotionDiv 
          className="container" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2>Our Mission</h2>
          <p>
            At CarDealer, our mission is to make car ownership accessible to everyone. We strive to offer quality vehicles, transparent pricing, and outstanding support, ensuring that your journey on the road is as enjoyable and stress-free as possible.
          </p>
        </MotionDiv>
      </section>

      <section className="team-section">
        <MotionDiv 
          className="container" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2>Our Team</h2>
          <div className="team-members">
            <MotionDiv 
              className="team-member" 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={team1} alt="Team Member 1" className="team-image" height={500} width={500} />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </MotionDiv>
            <MotionDiv 
              className="team-member" 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={team2} alt="Team Member 2" className="team-image" height={500} width={500} />
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
            </MotionDiv>
            <MotionDiv 
              className="team-member" 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={team3} alt="Team Member 3" className="team-image" height={500} width={500} />
              <h3>Michael Johnson</h3>
              <p>Head of Sales</p>
            </MotionDiv>
          </div>
        </MotionDiv>
      </section>

      <section className="history-section">
        <MotionDiv 
          className="container" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2>Our History</h2>
          <p>
            Founded in 2010, CarDealer started as a small family business with a passion for automobiles. Over the years, we have grown into one of the most trusted car dealerships in the region, thanks to our commitment to quality and customer satisfaction.
          </p>
        </MotionDiv>
      </section>
    </>
  );
};

export default About;


