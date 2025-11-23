"use client";

import { Box, Button, Typography, Container, Stack } from "@mui/material";
import Image from "next/image";

export function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          gap: 8,
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
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

          <Typography
            variant="body1"
            sx={{ opacity: 0.7, lineHeight: 1.7 }}
          >
            Transformo ideias em soluções funcionais e elegantes com foco em
            performance, UX e design contemporâneo.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 2, justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Button
              variant="contained"
              size="large"
              component="a"
              href="#projetos"
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
              component="a"
              href="#contato"
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
            width: { xs: "90%", sm: "80%", md: 420 },
            maxWidth: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 0 80px rgba(0, 255, 255, 0.10)",
            mx: "auto",
            aspectRatio: { xs: "3/4", md: "auto" },
          }}
        >
          <Image
            src="/photo-code.jpeg"
            alt="foto"
            width={420}
            height={520}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
