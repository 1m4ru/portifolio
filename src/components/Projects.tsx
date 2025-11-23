"use client";

import ProjectCard from "@/app/design-system/theme/ProjectCard";
import { Box, Typography } from "@mui/material";

export function Projects() {
  return (
    <Box
    id="projetos"
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: 3, md: 0 }
      }}
    >
      <Typography
        variant="h3"
        fontWeight={700}
        textAlign="center"
        sx={{
          background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 8,
        }}
      >
        Projetos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <ProjectCard
          title="Beach Runner"
          description="Beach Runner é uma aplicação web moderna para monitoramento de treinos de corrida. Desenvolvido com Next.js, TypeScript, Prisma e Clerk, o app permite que corredores rastreiem sua evolução e cadastrem treinos com uma UI fluida."
          images={[
            "/beach_runner_one.jpeg",
            "/beach_runner_two.jpeg",
            "/beach_runner_three.jpeg",
          ]}
          techs={["Next.js", "TypeScript", "Prisma ORM", "TailwindCSS", "Clerk", "React Query"]}
          githubUrl="https://github.com/1m4ru/beach-runner"
        />

        <ProjectCard
          title="Event Manager"
          description="Plataforma de gestão de eventos com arquitetura modular, UX inteligente, permissões por papel, autenticação, cache otimizado e animações sutis para uma experiência fluida e escalável."
          images={[
            "/event_manager_one.jpeg",
            "/event_manager_two.jpeg",
            "/event_manager_three.jpeg",
          ]}
          techs={["Next.js", "TypeScript", "Material UI", "Redux Toolkit", "React Query", "Framer Motion"]}
          githubUrl="https://github.com/1m4ru/event-manager"
        />
        <ProjectCard
          title="Uzer Admin Panel"
          description="Painel web responsivo para gestão de usuários, com arquitetura escalável, UI fluida e foco em experiência do usuário.
Desenvolvido com React, TypeScript, Material UI e React Query, incluindo validação, dark mode e testes automatizados."
          images={[
            "/user_one.jpeg",
            "/user_two.jpeg",
            "/user_three.jpeg",
          ]}
          techs={["React", "TypeScript", "Material UI", "Jest", "React Query"]}
          githubUrl="https://github.com/1m4ru/event-manager"
          liveUrl="https://uzer-admin-panel.vercel.app/"
        />
      </Box>
    </Box>
  );
}

export default Projects;
