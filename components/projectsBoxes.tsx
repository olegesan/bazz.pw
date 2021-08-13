import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Section from "./section";
import SubSection from "./subSection";
import Description from "./description";
import ProjectBox from "./projectBox";

const projects = [
  {
    image: "christmas_list",
    title: "Christmas List",
    date: "Dec, 2019",
    stack: "Python, Django, JQuery, Bootstrap",
    description: "Blahblah Pieds des ou la j'ai  vu de ou flache..",
  },
  {
    image: "bible_scraper",
    title: "Bible Scraper",
    date: "Jan, 2020",
    stack: "Python, BeautifulSoup, Requests",
    description:
      "Nonumy erat diam voluptua sanctus ipsum ipsum. Diam diam justo labore tempor kasd at eirmod dolore. Amet ipsum vero sit.",
  },
  {
    image: "bible_react",
    title: "Bible React",
    date: "Feb, 2020",
    stack: "Python, BeautifulSoup, Requests",
    description:
      "Nonumy erat diam voluptua sanctus ipsum ipsum. Diam diam justo labore tempor kasd at eirmod dolore. Amet ipsum vero sit.",
  },
  {
    image: "wedding_react",
    title: "Wedding React",
    date: "Mar, 2020",
    stack: "React.JS, MongoDB, SendGrid by Twillo, ",
    description:
      "Nonumy erat diam voluptua sanctus ipsum ipsum. Diam diam justo labore tempor kasd at eirmod dolore. Amet ipsum vero sit.",
  },
];
export default function Projects() {
  return (
    <Section title="Projects">
      <Flex wrap="wrap" flexDir="row" justify="space-around">
        {projects.map((project, idx) => {
          return (
            <Box key={idx}>
              <ProjectBox project={project} />
            </Box>
          );
        })}
      </Flex>
    </Section>
  );
}
