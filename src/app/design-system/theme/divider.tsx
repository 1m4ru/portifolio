"use client";

import { Box, useTheme } from "@mui/material";

export default function Divider() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        width: { xs: "80%", md: "70%" },
        height: "2px",
        my: 10,
        mx: "auto",
        position: "relative",
        background: isDark
          ? "rgba(255,255,255,0.05)"
          : "rgba(0,0,0,0.08)",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(123,47,247,0.6), rgba(0,198,255,0.6), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0,90,255,0.4), rgba(0,200,255,0.4), transparent)",
          filter: "blur(0.8px)",
        },
      }}
    />
  );
}
