import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

interface PricingCardInfo {
  title: string;
  info: string;
  description: string[];
  price: string;
}
const PricingCard = ({ title, info, description, price }: PricingCardInfo) => {
  return (
    <Box
      border={1}
      borderColor="primary.main"
      bgcolor="lightblue"
      padding={2}
      borderRadius={4}
    >
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
      <Typography variant="body1" fontWeight="bold" color="textPrimary">
        {price}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {info}
      </Typography>
      <Divider sx={{ my: 2 }} />
      {/* <ul>
        {description.map((item, index) => (
          <li key={index}>
            <Typography variant="body2">{item}</Typography>
          </li>
        ))}
      </ul> */}
      <Button variant="contained" color="primary" fullWidth>
        {title}
      </Button>
    </Box>
  );
};

export default PricingCard;
