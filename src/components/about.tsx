import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full mx-4 justify-center">
      <div className="flex my-5 justify-center text-2xl font-bold">
        About Us
      </div>
      <div className="flex flex-col items-center w-full py-8">
        <Image
          src="/temporarylogo.png"
          alt="logo"
          width={200}
          height={200}
          className="mb-4"
        />
        <div className="w-1/2 text-center">
          At TTickle, we believe that grassroots nonprofits deserve powerful,
          efficient, and accessible tools to amplify their impact. Many small
          and community-driven organizations struggle with marketing and donor
          engagement due to limited time, resources, and expertise. That’s why
          we created a platform that automates and streamlines key marketing
          efforts—so nonprofits can focus on what truly matters: their mission.
          <br />
          <br />
          Our platform harnesses the power of AI to generate engaging
          newsletters, craft compelling social media content, and maintain
          meaningful donor relationships through personalized outreach. By
          integrating AI and automation, we provide nonprofits with a seamless
          way to manage and enhance their digital presence. Whether it’s
          creating a consistent communication strategy, tracking donor
          engagement, or optimizing outreach efforts, we empower organizations
          to reach their audiences more effectively.
          <br />
          <br />
          Founded by a team passionate about social impact and technology,
          TTickle is built to bridge the gap between technology and nonprofit
          success. We collaborate closely with nonprofits to continuously
          improve our platform based on real-world needs and feedback. Our goal
          is simple: to give every nonprofit—regardless of size—the tools they
          need to tell their story, connect with their supporters, and drive
          lasting change in their communities.
        </div>
      </div>
    </div>
  );
};

export default About;
