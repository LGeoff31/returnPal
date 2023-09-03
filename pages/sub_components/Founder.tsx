import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Founder = ({
  name,
  src,
  role,
  description,
}: {
  name: string;
  src: string;
  role: string;
  description: string;
}) => {
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      paddingLeft={{ md: "10rem", sm: "3rem", xs: "2rem" }}
    >
      <Box>
        <Image
          src={src}
          alt="hasan"
          height={300}
          width={330}
          style={{ marginTop: "2rem" }}
        />
        <Typography
          paddingLeft="2rem"
          color="black"
          variant="h4"
          marginTop={"2rem"}
        >
          {name}
        </Typography>
        <Typography paddingLeft="2rem" color="black" paddingBottom="2rem">
          {role}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body2"
          fontSize="1rem"
          color="grey"
          paddingLeft={{ md: "4rem", xs: "2rem" }}
          paddingTop={{ md: "6rem", xs: "0rem" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          width="80%"
          paddingBottom="2rem"
        >
          {description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Founder;
