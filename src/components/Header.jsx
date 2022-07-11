import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../public/assets/logo.svg";
import { styled } from "@mui/material/styles";

const StyledImg = styled("img")({
  height: "7em",
});

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
}));

function ElevationScroll(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <StyledImg alt="logo" src={logo} />
          <Tabs sx={{ ml: "auto" }}>
            <StyledTab label="Home" />
            <StyledTab label="Services" />
            <StyledTab label="The Revolution" />
            <StyledTab label="Contect Us" />
            <StyledTab label="About Us" />
          </Tabs>
          <Button
            color="secondary"
            variant="contained"
            sx={(theme) => ({
              ...theme.typography.estimate,
              borderRadius: "50px",
              mr: "25px",
            })}
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
