"use client"
import React from 'react';
import Image from 'next/image';
import financing from "/public/financing.png";
import maintenance from "/public/maintenance.png";
import test_drive from "/public/test_drive.jpg";
import trade from "/public/trade.png";

import dynamic from 'next/dynamic';
// import { motion } from 'framer-motion';
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });

const Services = () => {
  return (
    <div>
      {/* <Navbar /> */}
      
    <section className="services-section">
      <div className="container">
        <MotionH2 
          className="services-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </MotionH2>
        <MotionP 
          className="services-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We offer a wide range of services to ensure you have the best experience possible with your vehicle. From financing options to maintenance and test drives, we have you covered.
        </MotionP>
        <div className="services-grid">
          <MotionDiv 
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={financing} alt="Car Financing" className="service-icon" height={100} width={100} />
            <h3 className="service-title">Car Financing</h3>
            <p className="service-description-text">
              We offer customized financing options that are designed to fit your budget and help you drive home your dream car.
            </p>
          </MotionDiv>
          <MotionDiv 
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={maintenance} alt="Car Maintenance" className="service-icon" height={100} width={100} />
            <h3 className="service-title">Car Maintenance</h3>
            <p className="service-description-text">
              Keep your car in top condition with our expert maintenance services, provided by certified technicians.
            </p>
          </MotionDiv>
          <MotionDiv 
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={test_drive} alt="Test Drives" className="service-icon" height={100} width={100} />
            <h3 className="service-title">Test Drives</h3>
            <p className="service-description-text">
              Experience the car before you buy. Schedule a test drive today and feel the comfort and performance firsthand.
            </p>
          </MotionDiv>
          <MotionDiv
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={trade} alt="Car Trade-In" className="service-icon" height={100} width={100} />
            <h3 className="service-title">Car Trade-In</h3>
            <p className="service-description-text">
              Looking to upgrade? Trade in your old car for a new one at a competitive value with our hassle-free trade-in program.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;

