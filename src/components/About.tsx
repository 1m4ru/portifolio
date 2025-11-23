"use client";

import { techColors } from "@/contansts/techColors";
import { Box, Typography, Chip, Stack } from "@mui/material";

const techs = [
  { label: "React" },
  { label: "Next.js" },
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "Tailwind CSS" },
  { label: "Material UI" },
  { label: "React Query" },
  { label: "React Hook Form" },
  { label: "Framer Motion" },
  { label: "Storybook" },
  { label: "Jest" },
  { label: "Cypress" },
];

export function AboutMe() {
  return (
    <Box
      id="sobre"
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 8,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          order: { xs: 2, md: 1 },
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          alignItems: "flex-start",
          justifyContent: { xs: "center", md: "flex-start" },
          height: "fit-content",
        }}
      >
        <Stack 
        direction="row" 
        flexWrap="wrap" 
        gap={1.5}
        justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {techs.map((t) => (
            <Chip
              key={t.label}
              label={t.label}
              sx={(theme) => {
                const color = techColors[t.label];
                return {
                  border: `1px solid ${color}`,
                  color: theme.palette.mode === "dark"
                    ? color
                    : "#111",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.05)",
                  textShadow:
                    theme.palette.mode === "dark"
                      ? `0 0 8px ${color}`
                      : "none",
                  "&:hover": {
                    background:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(0,0,0,0.12)",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? `0 0 12px ${color}`
                        : "none",
                  },
                };
              }}
            />
          ))}
        </Stack>
      </Box>
      <Box sx={{ order: { xs: 1, md: 2 }, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{
            background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Quem Sou Eu
        </Typography>

        <Typography
         sx={{
          opacity: 0.85,
          fontSize: { xs: "1rem", md: "1.15rem" },
          lineHeight: 1.7,
          maxWidth: 600,
        }}
        >
          Sou desenvolvedor focado em criar interfaces rápidas, fluidas e elegantes com React e Next.js.
          Meu código prioriza performance, previsibilidade e uma arquitetura simples de manter.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 3,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Chip label="📍 Palhoça - SC" variant="outlined" />
          <Chip
            label="LinkedIn"
            component="a"
            href="https://www.linkedin.com/in/maruan-moussa/"
            target="_blank"
            sx={{ color: "#0A66C2", borderColor: "#0A66C2" }}
            clickable
          />
          <Chip
            label="GitHub"
            component="a"
            href="https://github.com/1m4ru"
            target="_blank"
            sx={{ color: "#a78bfa", borderColor: "#a78bfa" }}
            clickable
          />
        </Stack>
      </Box>
    </Box>
  );
}
