import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../assets/logo.svg";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";

const StyledImg = styled("img")({
  height: "7em",
});

const StyledTab = styled((props) => <Tab component={Link} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.tab,
  })
);

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
  const [value, setValue] = useState(0);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/services":
        setValue(1);
        break;
      case "/revolution":
        setValue(2);
        break;
      case "/contect":
        setValue(3);
        break;
      case "/about":
        setValue(4);
        break;
      default:
        break;
    }
  }, [location]);
  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <Button sx={{ m: 0, p: 0 }} component={Link} to="/" disableRipple>
            <img alt="logo" src={logo} style={{ height: "7em" }} />
          </Button>
          <Tabs
            value={value}
            onChange={(e, v) => {
              setValue(v);
            }}
            indicatorColor="primary"
            textColor="inherit"
            sx={{ ml: "auto" }}
          >
            <StyledTab label="Home" to="/" />
            <StyledTab label="Services" to="services" />
            <StyledTab label="The Revolution" to="/revolution" />
            <StyledTab label="Contect Us" to="/contect" />
            <StyledTab label="About Us" to="about" />
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
