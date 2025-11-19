"use client";

import { Box, Button, Typography, Container, Stack } from "@mui/material";
import Image from "next/image";

export function Hero() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                py: 10,
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Stack spacing={3} sx={{ maxWidth: "600px" }}>

                    <Typography
                        variant="overline"
                        sx={{
                            color: "primary.main",
                            fontWeight: 600,
                            letterSpacing: 1,
                        }}
                    >
                        Bem-vindo ao meu portfólio
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            lineHeight: 1.2,
                        }}
                    >
                        Criando{" "}
                        <Box
                            component="span"
                            sx={{
                                background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            experiências digitais{" "}
                        </Box>
                        com impacto real.
                    </Typography>

                    <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.7 }}>
                        Transformo ideias em soluções funcionais e elegantes com foco em
                        performance, UX e design contemporâneo.
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontWeight: 600,
                                borderRadius: "12px",
                                background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
                                boxShadow: "0 0 12px rgba(123, 47, 247, 0.35)",
                            }}
                        >
                            Ver Projetos
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontWeight: 600,
                                borderRadius: "12px",
                                borderColor: "primary.main",
                                color: "primary.main",
                                "&:hover": {
                                    borderColor: "primary.light",
                                    background: "rgba(255,255,255,0.06)",
                                },
                            }}
                        >
                            Entrar em Contato
                        </Button>
                    </Stack>
                </Stack>
                <Box
                   sx={{
                    position: "relative",
                    width: 400,
                    height: 500,
                    borderRadius: "24px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 80px rgba(0, 255, 255, 0.10)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "-25%",
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.18), transparent 70%)",
                      zIndex: -1,
                    },
                  }}
                >

                    <Image
                        src="/photo-code.jpeg"
                        alt="foto"
                        fill
                        style={{
                            borderRadius: "16px", objectFit: "cover", zIndex: 1,

                        }}
                    />

                </Box>
            </Container>
            
        </Box>
    );
}
