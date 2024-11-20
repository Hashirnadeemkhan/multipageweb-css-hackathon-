"use client"
import React from 'react';
import Link from 'next/link';
import '../styles/Discovery.css';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });

const Discovery = () => (
  <section className="discovery-section">
    <div className="container">
      <div className="discovery-content">
        <MotionDiv 
          className="badge" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          What do you want to drive home?
          <Link href="#" legacyBehavior>
            <a className="see-more-link">See more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </Link>
        </MotionDiv>
        <MotionH2 
          className="discovery-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover Our Financing Solutions
        </MotionH2>
        <MotionP 
          className="discovery-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Explore a variety of financing options to bring your dream car home today. Whether youre buying new, used, or leasing, our solutions are designed to be flexible, affordable, and catered to your unique needs. Let us help you get on the road effortlessly.
        </MotionP>
        <MotionDiv 
          className="button-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <Link href="/contactus" legacyBehavior>
            <a className="button-primary">Visit Our Store</a>
          </Link>
          <Link href="" legacyBehavior>
            <a className="button-secondary">Contact Our Team</a>
          </Link>
        </MotionDiv>
      </div>
    </div>
  </section>
);

export default Discovery;

