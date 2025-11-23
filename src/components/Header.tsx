"use client";

import { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import { useThemeSwitch } from "@/app/design-system/providers/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function Header() {
  const { mode, toggleTheme } = useThemeSwitch();
  const [hidden] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(12px)",
        transition: "transform 0.35s ease, background 0.3s ease",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "radial-gradient(circle, #7b2ff7, #00c6ff)",
              p: 0.3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 8px 2px rgba(123,47,247,0.45)`,
            }}
          >
            <Avatar
              alt="Logo"
              sx={{
                width: 48,
                height: 48,
                fontWeight: 700,
                fontSize: "1.2rem",
                border: "2px solid rgba(255,255,255,0.2)",
                background: "linear-gradient(135deg, #7b2ff7, #00c6ff)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              M
            </Avatar>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Maruan Moussa
          </Typography>
        </Box>
        <IconButton onClick={toggleTheme} sx={{ color: "text.primary" }}>
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
