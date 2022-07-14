import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
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

const StyledMenu = styled((props) => <Menu elevation={0} {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      backgroundColor: theme.palette.primary.main,
      color: "white",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
    },
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

const menuOption = [
  { name: "Custom Softwares", route: "/softwares" },
  { name: "App Devlopment", route: "/mobileapps" },
  { name: "Web Development", route: "/websites" },
];

function Header() {
  const [value, setValue] = useState(0);
  const [el, setEl] = useState(null);
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

  const handleOpen = (e) => {
    setEl(e.currentTarget);
  };

  const handleClose = () => {
    setEl(null);
  };

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
            <StyledTab
              label="Services"
              to="services"
              onMouseOver={(e) => handleOpen(e)}
            />
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
        <StyledMenu
          anchorEl={el}
          open={Boolean(el)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              setValue(1);
            }}
            component={Link}
            to="/softwares"
          >
            Custom Software
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setValue(1);
            }}
            component={Link}
            to="/mobileapps"
          >
            App Devlopment
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setValue(1);
            }}
            component={Link}
            to="/websites"
          >
            Web devlopment
          </MenuItem>
        </StyledMenu>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
