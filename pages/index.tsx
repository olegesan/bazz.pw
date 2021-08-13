import React from "react";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import PersonalInfo from "../components/personal-info";
import Skills from "../components/skills";
// import Layout from "../components/layout-old"
import Experience from "../components/experience";
// import Projects from "../components/projectsBoxes"
import Projects from "../components/projectText";
import Hackathon from "../components/hackathons";
import TehemeComponent from "../components/themeComponent";
import Certifications from "../components/certifications";

const Home = () => {
  return (
    <TehemeComponent>
      <PersonalInfo />
      <div className="content">
        <Text color="black">
          <ul>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </Text>
      </div>
    </TehemeComponent>
  );
};

export default Home;
