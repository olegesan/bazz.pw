import React from "react";
import Link from "next/link";
import { Flex, Text, Box } from "@chakra-ui/react";
import PersonalInfo from "../components/personal-info";
import Skills from "../components/skills";
// import Layout from "../components/layout-old"
import Experience from "../components/experience";
// import Projects from "../components/projectsBoxes"
import Projects from "../components/projectText";
import Hackathon from "../components/hackathons";
import TehemeComponent from "../components/themeComponent";
import Certifications from "../components/certifications";
import { getFiles } from "../utils/mdx";

const Home = () => {
  return (
    <Flex w="100%" justifyContent="center">
      <PersonalInfo />
    </Flex>
  );
};

export default Home;
