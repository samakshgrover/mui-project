import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../assets/logo.svg";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const menuOptions = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Custom Software Devepment",
    link: "/softwares",
  },
  {
    name: "App Development",
    link: "/mobileapps",
  },
  {
    name: "Web Development",
    link: "/websites",
  },
];

const StyledButton = styled((props) => (
  <Button component={Link} to="/" disableRipple {...props}>
    {props.children}
  </Button>
))(({ theme }) => ({
  margin: 0,
  padding: 0,
  height: "7em",
  [theme.breakpoints.down("md")]: {
    height: "5em",
  },
}));

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

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [el, setEl] = useState(null);
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = (e) => {
    setEl(e.currentTarget);
  };

  const handleClose = () => {
    setEl(null);
  };
  const handleMenuClick = (e, index) => {
    setSelectedIndex(index);
    setEl(null);
    setValue(1);
  };

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
      case "/mobileapps":
        setValue(1);
        break;
      case "/software":
        setValue(1);
        break;
      case "/websites":
        setValue(1);
        break;
      default:
        break;
    }
  }, [location]);

  const tabs = (
    <>
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
      <StyledMenu
        anchorEl={el}
        open={Boolean(el)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        variant="menu"
      >
        {menuOptions.map((option, index) => {
          return (
            <MenuItem
              key={index}
              selected={index === selectedIndex}
              onClick={(e) => handleMenuClick(e, index)}
              component={Link}
              to={option.link}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        PaperProps={{
          sx: { width: 240, backgroundColor: "#0b72b9", color: "#fff" },
        }}
      >
        <Toolbar />
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/services"
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/revolution"
          >
            <ListItemText disableTypography>Revolution</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/contect"
          >
            <ListItemText disableTypography>Contect Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/about"
          >
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/about"
            sx={{ backgroundColor: "#ffba60" }}
          >
            <ListItemText
              primary="Free Estimate"
              primaryTypographyProps={{
                sx: {
                  fontSize: "1rem",
                  fontFamily: "Pacifico",
                  color: "#fff",
                },
              }}
            ></ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => {
          setOpenDrawer(true);
        }}
        fontSize="large"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        sx={{
          zIndex: (theme) => {
            return theme.zIndex.drawer + 1;
          },
        }}
      >
        <Toolbar disableGutters>
          <StyledButton>
            <img alt="logo" src={logo} style={{ height: "inherit" }} />
          </StyledButton>
          {match ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
