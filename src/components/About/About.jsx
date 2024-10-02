import React from 'react';

const About = () => {
  return (
    <div className="text-center py-16 bg-white">
      {/* Title Section */}
      <h1 className="text-6xl font-bold tracking-wide uppercase text-black mb-6">
        The CIO Times
      </h1>
      <div className="h-1 w-20 mx-auto bg-red-500 mb-6"></div>

      {/* Dark Background Section */}
      <div className="bg-gradient-to-r from-red-950 to-gray-800 text-white py-12 px-20 rounded-lg shadow-lg m-16">
        <p className="text-lg leading-relaxed px-20">
          The business world is full of enigmatic stories waiting to be seen and heard. 
          At CIO Times, we handpick such tales for the world to acknowledge. These stories 
          speak not just of success, but also of the struggle hiding behind them. As one 
          of the <span className="font-bold">top business magazines</span>, we share an 
          insight into the inner workings of different business sectors, through inspiring 
          stories. Business experts, SMEs, and Entrepreneurs share what works for them 
          and the industry, what doesn’t, and what is trending.
        </p>
      </div>

      {/* Additional Text Section */}
      <div className="mt-8 max-w-4xl mx-auto text-gray-800">
        <p className="text-left text-lg leading-relaxed">
          CIO Times is a print and digital media platform that curates opinions, outlooks, 
          and visions about the industries from their leaders. We strive to serve as a 
          one-stop, reliable source of information from the industries we cater to and 
          showcase their growth opportunities.
        </p>
        <p className="mt-4 text-left text-lg leading-relaxed">
          For the companies, we serve as a platform for sharing their experiences with 
          the readers and potential clients and uplifting their brand awareness. We provide a platform to share top business stories, business solutions, the latest technological solutions, products & services, and more. We are here for organizations of all sizes and sectors that seek to create their space in the business world.
        </p>
        <p className="mt-4 text-left text-lg leading-relaxed">
          We are committed to creating a transparent platform for top leaders and executives to bring forth unheard and unseen challenges they have faced while on their way to success. While sharing their experiences and views, they help inspire the next generation of entrepreneurs and professionals who can learn from them regarding industry perspectives, opportunities, challenges, and business needs.
        </p>
      </div>
    </div>
  );
};

export default About;

