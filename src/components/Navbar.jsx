import * as React from "react";
import { useDispatch } from "react-redux";
import authService from "../api/auth";
import { logout } from "../redux/features/authSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const logoStyle = {
  width: "42px",
  height: "auto",
  cursor: "pointer",
  margin: "10px"
  
};

function Navbar() {
  const notify = () => toast("Wow so easy!");
  const authStatus = useSelector((state) => state.auth.status);
  const userData =""
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  const [open, setOpen] = React.useState(false);
  let userID = "";
  if (authStatus) {
    userData
    userID = useSelector((state) => state.auth.userData.$id);
  }
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src="../assets/logoipsum-280.svg"
          
                style={logoStyle}
                height="5"
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  onClick={() => navigate("/")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("notes")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Notes
                  </Typography>
                </MenuItem>

                {/* ------------------------ */}
                <MenuItem
                  onClick={() => scrollToSection("qpaper")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Q-Paper
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("qbank")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Q-Bank
                  </Typography>
                </MenuItem>
                {/*  <MenuItem
                  onClick={() => scrollToSection("pricing")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Pricing
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("faq")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem> */}
                {/* ----------- */}
              </Box>
            </Box>
            {authStatus ? (
              // Render something if authStatus is true
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                {" "}
                <Button
                  sx={{ color: "#4A249D" }}
                  variant="text"
                  size="small"
                  onClick={() => navigate(`/userposts/${userID}`)}
                >
                 All Post
                </Button>
                <Button
                  sx={{ color: "#4A249D" }}
                  variant="text"
                  size="small"
                  onClick={() => navigate("/add-post")}
                >
                  Add Post
                </Button>
                <Button
                  sx={{ backgroundColor: "#4A249D" }}
                  variant="contained"
                  size="small"
                  onClick={logoutHandler}
                >
                  Log out
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{ color: "#4A249D" }}
                  variant="text"
                  size="small"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  sx={{ backgroundColor: "#4A249D" }}
                  variant="contained"
                  size="small"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </Button>
              </Box>
            )}

            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                sx={{ color: "#4A249D", minWidth: "30px", p: "4px" }}
                aria-label="menu"
                onClick={toggleDrawer(true)}
                // sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                  <MenuItem onClick={() => scrollToSection("notes")}>
                    Notes
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("qpaper")}>
                    Q-Paper
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("qbank")}>
                    Q-Bank
                  </MenuItem>
                  {/*  <MenuItem onClick={() => scrollToSection("pricing")}>
                    Pricing
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("faq")}>
                    FAQ
                  </MenuItem> */}
                  <Divider />

                  {authStatus ? (
                    <>
                     <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => navigate(`/userposts/${userID}`)}
                          sx={{ width: "100%" }}
                        >
                          All Post
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => navigate("/add-post")}
                          sx={{ width: "100%" }}
                        >
                          Add Post
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={logoutHandler}
                          sx={{ width: "100%" }}
                        >
                          Logout
                        </Button>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => navigate("./login")}
                          sx={{ width: "100%" }}
                        >
                          Login
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={() => navigate("/signup")}
                          sx={{ width: "100%" }}
                        >
                          Sign up
                        </Button>
                      </MenuItem>
                    </>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
