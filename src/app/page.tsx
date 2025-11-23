"use client";

import { Box } from "@mui/material";
import { useThemeSwitch } from "./design-system/providers/ThemeProvider";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/About";
import Projects from "@/components/Projects";
import Divider from "./design-system/theme/divider";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  const { mode } = useThemeSwitch();

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
      <Header />
      <Hero />
      <Divider />
      <AboutMe />
      <Divider />
      <Projects />
      <Divider />
      <ContactForm />
      <Footer />
    </Box>
  );
}
