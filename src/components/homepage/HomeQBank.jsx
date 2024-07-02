import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { useNavigate } from "react-router-dom";

const items = [
  {
    name: "Sem - 1",
    slug: "/semester-qbank/1",
  },
  {
    name: "Sem - 2",
    slug: "/semester-qbank/2",
  },
  {
    name: "Sem - 3",
    slug: "/semester-qbank/3",
  },
  {
    name: "Sem - 4",
    slug: "/semester-qbank/4",
  },
  {
    name: "Sem - 5",
    slug: "/semester-qbank/5",
  },
  {
    name: "Sem - 6",
    slug: "/semester-qbank/6",
  },
];

export default function HomeQBank() {
  const navigate = useNavigate();

  return (
    <Box
      id="qbank"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "#4A249D",
        bgcolor: "#F6F5F5",
        mt: 5,
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h3" >
            Question Bank
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  //   opacity: "80%",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

                  //   background: 'transparent',
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div
                  onClick={() => navigate(item.slug)}
                  className="cursor-pointer"
                >
                  <Typography
                    fontWeight="bold"
                    fontSize="25px"
                    textAlign="center"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
