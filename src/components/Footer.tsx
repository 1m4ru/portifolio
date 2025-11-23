"use client";

import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 4,
        mt: 12,
        textAlign: "center",
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "#aaa",
        fontSize: "0.9rem",
      }}
    >
      © {new Date().getFullYear()} — Portfólio desenvolvido por <strong>Maruan Moussa</strong>.
    </Box>
  );
}
