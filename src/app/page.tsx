"use client";

import { Box} from "@mui/material";
import { useThemeSwitch } from "./design-system/providers/ThemeProvider";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/TechStack";

export default function Home() {
  const { mode} = useThemeSwitch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: mode === "dark"
          ? `
            radial-gradient(circle at 25% 35%, rgba(120, 0, 255, 0.04), transparent 70%),
            #050505
          `
          : `
            radial-gradient(circle at 25% 35%, rgba(0, 200, 255, 0.08), transparent 70%),
            #f7f7fa
          `,

        color: mode === "dark" ? "#fff" : "#1a1a1a",
        transition: "0.3s ease"
      }}
    >
    <Hero />
    <Box
  sx={{
    width: "80%",
    height: "1px",
    mx: "auto",
    my: 12,
    background: "linear-gradient(90deg, transparent, rgba(123,47,247,0.4), transparent)",
    filter: "blur(0.5px)"
  }}
/>

    <AboutMe />
    </Box>
  );
}
