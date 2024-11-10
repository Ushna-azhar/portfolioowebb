'use client';
import Image from "next/image";
import React, { useState } from "react"; 

import TabButton from './TabButton';
const TAB_DATA = [{
    
}]

const Abouts = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id); 
  };

  return (
    <section className="text-gray-300 py-8 px-6 sm:py-12 sm:px-10 lg:px-16">
      <div className="md:grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <Image
            src="/about.jpg" 
            alt="About Me"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-emerald-800 text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-green-400 font-mono">
          a passionate Web Developer and Graphic Designer. I specialize in creating dynamic, responsive websites and designing visually engaging user interfaces. With a strong foundation in both front-end and back-end development, I bring ideas to life with clean code and creative design. I thrive on solving complex problems and delivering seamless user experiences. Let's create something amazing together!


          </p>
          
          
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
          </div>
          
         
          <div className="mt-8">
            {tab === 'skills' && (
              <div className="text-white">
                <h3 className="text-xl font-semibold text-green-800">Skills</h3>
                <ul className="list-disc pl-6 mt-4">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>HTML & CSS</li>
                  <li>Adobe Illustrator & Photoshop</li>
                 
                </ul>
              </div>
            )}
            {tab === 'education' && (
              <div className="text-white">
                <h3 className="text-xl font-semibold text-emerald-800">Education</h3>
                <p className="mt-4">Cloud Generative AI from Gorvernor House Karachi</p>
              </div>
            )}
            {tab === 'experience' && (
              <div className="text-white">
                <h3 className="text-xl font-semibold text-emerald-800">Experience</h3>
                <ul className="list-disc pl-6 mt-4">
                  <li>Web Developer at Auzi(Australian brand)</li>
                  <li>web Developer at Shanaer shaikh Clothing store.</li>
                  <li>Graphic Designer at Tabarak Foods</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
