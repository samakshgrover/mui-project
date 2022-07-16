import React from "react";
import { styled } from "@mui/material/styles";
import footerlogo from "../assets/Footer Adornment.svg";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom",
  zIndex: theme.zIndex.drawer + 1,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "21em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "15em",
  },
}));

function Footer() {
  return (
    <StyledFooter>
      <StyledImg alt="footer logo" src={footerlogo} />
    </StyledFooter>
  );
}

export default Footer;
