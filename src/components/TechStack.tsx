'use client';

import { techColors } from "@/contansts/techColors";
import { Box, Typography, Chip, Stack } from "@mui/material";

const techs = [
    { label: "React" },
    { label: "Next.js" },
    { label: "JavaScript" },
    { label: "TypeScript", },
    { label: "Tailwind CSS" },
    { label: "Material UI", },
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
                py: 12,
                px: 4,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 8,
            }}
        >
            {/* TEXT COLUMN */}
            <Box>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                        background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Quem Sou Eu
                </Typography>

                <Typography sx={{ opacity: 0.8, lineHeight: 1.8, fontSize: "1.1rem" }}>
                    Meu nome é Maruan Moussa e sou desenvolvedor de software com 3 anos de experiência, formado em Análise e Desenvolvimento de Sistemas pelo Senac Palhoça. Atuo criando produtos digitais com foco em performance, fluidez e experiência do usuário.
                    Trabalho principalmente com React e Next.js, utilizando uma arquitetura orientada à eficiência e scalabilidade — sempre buscando entregar interfaces elegantes e acessíveis.
                    Acredito que código limpo, testes, CI/CD e design systems não são bônus: são pilares fundamentais para produtos robustos e mantáveis.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
                    <Chip label="📍 Palhoça - SC" variant="outlined" />
                    <Chip
                        label="LinkedIn"
                        component="a"
                        href="https://www.linkedin.com/in/maruan-moussa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        clickable
                        sx={{ color: "#0A66C2", borderColor: "#0A66C2" }}
                    />

                    <Chip
                        label="GitHub"
                        component="a"
                        href="https://github.com/1m4ru"
                        target="_blank"
                        rel="noopener noreferrer"
                        clickable
                        sx={{ color: "#a78bfa", borderColor: "#a78bfa" }}
                    />
                </Stack>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    alignItems: "flex-start",
                    height: "fit-content"
                }}
            >
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                    {techs.map((t) => (
                        <Chip
                            key={t.label}
                            label={t.label}
                            sx={(theme) => ({
                                border: `1px solid ${techColors[t.label]}`,
                                color: techColors[t.label],
                                background:
                                    theme.palette.mode === "dark"
                                        ? "rgba(255,255,255,0.05)"
                                        : "rgba(0,0,0,0.05)",
                                textShadow:
                                    theme.palette.mode === "dark"
                                        ? `0 0 8px ${techColors[t.label]}`
                                        : "none",
                                "&:hover": {
                                    background:
                                        theme.palette.mode === "dark"
                                            ? "rgba(255,255,255,0.12)"
                                            : "rgba(0,0,0,0.12)",
                                    boxShadow:
                                        theme.palette.mode === "dark"
                                            ? `0 0 12px ${techColors[t.label]}`
                                            : "none",
                                },
                            })}
                        />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}
