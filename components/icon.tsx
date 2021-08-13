import React, { EventHandler } from "react";
import { Box, Link } from "@chakra-ui/react";

type Props = {
  as: any;
  href: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function Icon({ as, href, color, onClick }: Props) {
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
