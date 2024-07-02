import * as React from "react";
import { Avatar, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";
import Semester from "./Semester";
import HomeQBank from "./homepage/HomeQBank";
import HomeQPaper from "./homepage/HomeQPaper";
export default function Hero() {
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);
  var userName = "";
  
  if (authStatus) {
    userName = useSelector((state) => state.auth.userData.name);
  }
  return (
    <>
      <Navbar />
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #d4c6f2, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
          
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >

          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: "100%", sm: "70%" } , mt:8}}
            
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
              }}
            >
              Hello&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "clamp(3rem, 10vw, 4rem)",
                  color: "#4A249D"
                }}
              >
                {authStatus ? userName + "!" + "👋" : "Wise man! 👋"}
              </Typography>
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            >
              Try Notes Keep. Capture notes, share them with others, and access
              them from your computer, phone or tablet. Free with a Email
              account.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
             
              {authStatus ? (
                <>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/")}
                    // color="primary"
                    sx={{  backgroundColor: "#4A249D"}}
                  >
                   Enjoy
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => navigate("./login")}
                    sx={{  backgroundColor: "#4A249D"}}
                    // className="text-[#4A249D]"
                  >
                    Start now
                  </Button>
                </>
              )}
            </Stack>
            {!authStatus && (
              <>
            <Typography
              variant="caption"
              textAlign="center"
              sx={{ opacity: 0.8 }}
            >
              By clicking &quot;Start now&quot; you agree to our&nbsp;
              <Link href="#" color="#4A249D">
                Terms & Conditions
              </Link>
              .
            </Typography>
            </>
            )}

          </Stack>
        </Container>
      </Box>
      <CardComponent />
      <HomeQBank/>
      <HomeQPaper/>
      <Footer />
    </>
  );
}
