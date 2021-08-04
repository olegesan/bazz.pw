import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Date from "./date";
import Location from "./location";
import { ImGithub } from "react-icons/im";

export default function SubSection({
  children,
  title,
  date,
  location,
  github,
}) {
  return (
    <Flex flexDir="column" marginY="3">
      <Flex flexDir={["column", "column", "row"]} align="baseline">
        <Flex
          flexDir="row"
          align="baseline"
          marginTop={["2", "3", "5"]}
          marginBottom={["2"]}
        >
          <Heading fontSize={["lg", "2xl", "2xl"]}>{title}</Heading>
          {github ? (
            <Box marginLeft="2" as="a" href={github}>
              <Box as={ImGithub} />
            </Box>
          ) : (
            ""
          )}
        </Flex>

        {location ? <Location>{location}</Location> : ""}
      </Flex>
      {date ? <Date marginBottom="2" date={date} /> : ""}
      <Box fontSize={["md", "xl"]}>{children}</Box>
    </Flex>
  );
}
