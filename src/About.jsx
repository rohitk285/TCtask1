import { useState } from "react";

const About = () => {

  const [searchFor, setSearchFor] = useState("overview");
  
  return (
    <div className="flex">
      
      <div className="flex-1 p-10" style={{ backgroundColor: '#F3F7EC' }}>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <div className="flex justify-center space-x-5 mb-6">
          <button className={searchFor === "overview" ? 'toggle2':'toggle1'}
          onClick={()=>setSearchFor('overview')}>
          Overview</button>

          <button className={searchFor === "benefits" ? 'toggle2':'toggle1'}
          onClick={()=>setSearchFor('benefits')}>
          Benefits</button>

          <button className={searchFor === "features" ? 'toggle2':'toggle1'}
          onClick={()=>setSearchFor('features')}>
          Features</button>
        </div>

        {searchFor === 'overview' && (
          <ul className="about">
            <li>Purpose: Freelancopia aims to connect NITT students with potential employers, 
            facilitating freelancing opportunities and skill development. It is a community-driven
            platform where students can collaborate, learn, and grow.</li>

            <li>Mission: To create a thriving freelancing ecosystem that empowers NITT students 
            by providing them with real-world project experiences.</li>

            <li>Vision: To become the leading freelancing platform for NITT students, recognized 
            for its quality talent pool and impactful projects.</li>
          </ul>
        )}

        {searchFor === 'benefits' && (
          <ul className="about">
            <li>Skill Development: Opportunities to work on diverse projects, enhancing technical and soft skills.</li>

            <li>Portfolio Building: Ability to showcase work and achievements to future employers.</li>

            <li>Networking: Connect with peers, alumni, and industry professionals.
            Income Generation: Earn money while studying by working on freelance projects.</li>

            <li>Mentorship Opportunities: Access to guidance and advice from experienced freelancers and industry experts.</li>
          </ul>
        )}

        {searchFor === 'features' && (
          <ul className="about">
            <li>Skill Development: Opportunities to work on diverse projects, 
            enhancing technical and soft skills.</li>

            <li>Support and Assistance: Dedicated support team for resolving 
            issues and providing guidance.</li>

            <li>Project Management Tools: Integrated tools to manage projects efficiently.</li>

            <li>Communication Channels: In-platform messaging and video call features to 
            facilitate smooth communication.</li>
          </ul>
        )}
        
      </div>

    </div>
  );
};

export default About;
