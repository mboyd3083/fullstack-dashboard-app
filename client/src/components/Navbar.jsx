import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { useState } from "react";
import profileImage from "assets/MikeProfilePicture.PNG";
import { useTheme, AppBar } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme;

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      Navbar
    </AppBar>
  );
};
export default Navbar;
