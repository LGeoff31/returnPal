import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import React, { useContext } from "react";
// import RightArrowIcon from "..images/right-arrow.png";
// import LeftArrowIcon from "..images/left-arrow.png";

const HorizontalScroller = () => {
  return (
    <div className="scroll-container">
      <div className="gridscroll">
        <Box
          paddingLeft={{ md: "6rem", xs: "1rem" }}
          display="flex"
          paddingBottom="2rem"
          alignItems={"center"}
        >
          <img
            src="/images/amazon.png"
            height="40px"
            width="120px"
            style={{ background: "white", marginRight: "2rem" }}
          />
          <img
            src="/images/bestbuy.png"
            height="40px"
            width="120px"
            style={{ background: "white", marginRight: "2rem" }}
          />
          <img
            src="/images/temu.png"
            height="40px"
            width="120px"
            // style={{ background: "white" }}
          />

          <img
            src="/images/homedepot.png"
            height="40px"
            width="120px"
            style={{ background: "white", marginRight: "2rem" }}
          />
          <img
            src="/images/walmart.png"
            height="40px"
            width="120px"
            style={{ background: "white", marginRight: "2rem" }}
          />
          <img
            src="/images/cosco.png"
            height="40px"
            width="120px"
            style={{ background: "white" }}
          />
          <img
            src="/images/sense.png"
            height="40px"
            width="120px"
            style={{ background: "white", marginRight: "2rem" }}
          />
          <img
            src="/images/nike.png"
            height="40px"
            width="120px"
            style={{ background: "white", marginRight: "2rem" }}
          />
          <img
            src="/images/canadiantire.png"
            height="40px"
            width="120px"
            style={{ background: "white" }}
          />
        </Box>
      </div>
    </div>
  );
};

export default HorizontalScroller;
