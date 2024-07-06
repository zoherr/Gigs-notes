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
      {/* <Box
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
            sx={{ width: { xs: "100%", sm: "70%" }, mt: 8 }}
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
                  color: "#4A249D",
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
                    sx={{ backgroundColor: "#4A249D" }}
                  >
                    Enjoy
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => navigate("./login")}
                    sx={{ backgroundColor: "#4A249D" }}
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
      </Box> */}
      <div>
        
    <div className="relative isolate px-6 pt-10 lg:px-8" id="hero">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl  tracking-tight text-gray-900 sm:text-6xl">
            Hello&nbsp;
            <span className="text-indigo-600">{authStatus ? userName + "!" + "👋" : "Wise man! 👋"}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Try Notes Keep. Capture notes, share them with others, and access them from your computer, phone or tablet. Free with an Email account.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {authStatus ? (
              <button 
                onClick={() => navigate("/")} 
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enjoy
              </button>
            ) : (
              <button 
                onClick={() => navigate("./login")} 
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start now
              </button>
            )}
          </div>
          {!authStatus && (
            <p className="mt-4 text-xs leading-5 text-gray-600">
              By clicking "Start now" you agree to our&nbsp;
              <a href="#" className="text-indigo-600">Terms & Conditions</a>.
            </p>
          )}
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>



      </div>
      <CardComponent />
      <HomeQBank />
      <HomeQPaper />
      <Footer />
    </>
  );
}
