import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Founder = ({
  name,
  src,
  description,
}: {
  name: string;
  src: string;
  description: string;
}) => {
  return (
    <Grid container direction="column" textAlign={"center"} alignItems="center">
      <Image src={src} alt="hasan" height={300} width={430} />
      <Typography color="white" variant="h4" marginTop={"2rem"}>
        {name}
      </Typography>
      <Typography color="white" paddingBottom="2rem">
        {description}
      </Typography>
    </Grid>
  );
};

export default Founder;
