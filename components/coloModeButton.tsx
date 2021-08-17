import React, { useEffect, useState, useRef } from "react";
import { ImGithub, ImLinkedin, ImMail } from "react-icons/im";
import { BsMoon, BsSun } from "react-icons/bs";
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ColorModeButton(props: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#F7FAFC", "#2D3748");
  const color = useColorModeValue("gray.700", "gray.50");
  useEffect(() => {}, [colorMode]);
  const handleClick = () => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute(
        "style",
        `background-color: ${colorMode === "dark" ? "#F7FAFC" : "#2D3748"}`
      );
    toggleColorMode();
  };
  return (
    <IconButton
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      marginX="2"
      variant="ghost"
      color={`mode.${colorMode}.text`}
      fontSize="md"
      size="sm"
      onClick={handleClick}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      transition="all 0.2s"
      {...props}
    />
  );
}

export default ColorModeButton;
