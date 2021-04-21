import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  User as UserIcon,
} from "react-feather";
import NavItem from "./NavItem";

var isAdmin = localStorage.getItem("isAdmin");
let items = [];
if (isAdmin == "true") {
  items = [
    {
      href: "/app/dashboard",
      icon: BarChartIcon,
      title: "Dashboard",
    },
    {
      href: "/app/addemployee",
      icon: UserIcon,
      title: "Add Employees",
    },
    // {
    //   href: '/app/employees',
    //   icon: UserIcon,
    //   title: 'Employees'
    // },
    // {
    //   href: '/app/account',
    //   icon: UserIcon,
    //   title: 'Account'
    // },
    // {
    //   href: '/app/settings',
    //   icon: SettingsIcon,
    //   title: 'Settings'
    // },
  ];
} else {
  items = [
    {
      href: "/app/employeedashboard",
      icon: BarChartIcon,
      title: "Dashboard",
    },
  ];
}
const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const user = JSON.parse(localStorage.getItem("userData"));
  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Avatar
          component={RouterLink}
          src="/static/images/avatars/avatar_6.png"
          sx={{
            cursor: "pointer",
            width: 64,
            height: 64,
          }}
          to="/app/account"
        />
        {isAdmin == "true" && (
          <Typography color="textPrimary" variant="h5">
            {user.firstName + " " + user.lastName}
          </Typography>
        )}
        <Typography color="textSecondary" variant="body2">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: "calc(100% - 64px)",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
