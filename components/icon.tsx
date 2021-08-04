import React from "react";
import { Box, Link } from "@chakra-ui/react";

export default function Icon({ as, href, color, onClick }) {
  return (
    <Link href={href}>
      <Box
        as={as}
        marginY="1"
        marginX="3"
        size="24px"
        color={color}
        onClick={onClick}
      />
    </Link>
  );
}
