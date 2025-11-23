"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  techs?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const MotionCard = styled(motion(Card))(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 20,
  border: `1px solid ${theme.palette.primary.main}20`,
  boxShadow: "0 0 40px rgba(0,0,0,0.4)",
  padding: theme.spacing(2.5),

  // 🔥 AJUSTE DE TAMANHO (agora cabe lado a lado)
  width: "100%",
  maxWidth: "none",

  // Desktop — tamanho controlado
  [theme.breakpoints.up("md")]: {
    width: "460px",
  },

  [theme.breakpoints.up("lg")]: {
    width: "500px",
  },

  // Mobile
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.6),
    borderRadius: 16,
  },
}));

const CarouselButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(6px)",
  color: "#fff",
  "&:hover": {
    background: "rgba(0,0,0,0.6)",
  },
}));

export default function ProjectCard({
  title,
  description,
  images,
  techs,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!textRef.current || isMobile) return;
    const el = textRef.current;
    const overflow = el.scrollHeight > el.clientHeight;
    setShouldShowButton(overflow);
  }, [description, expanded, isMobile]);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const shouldClamp = isMobile ? !expanded : !expanded && shouldShowButton;

  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: "0 0 60px rgba(91,76,255,0.4)" }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Box position="relative" sx={{ borderRadius: 3, overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            <CardMedia
              component="img"
              image={images[index]}
              alt={`${title}-${index}`}
              sx={{
                height: { xs: 180, sm: 220, md: 240 },
                objectFit: "cover",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <CarouselButton onClick={handlePrev} sx={{ left: 10 }}>
              <ArrowBackIosNewIcon fontSize="small" />
            </CarouselButton>

            <CarouselButton onClick={handleNext} sx={{ right: 10 }}>
              <ArrowForwardIosIcon fontSize="small" />
            </CarouselButton>
          </>
        )}
      </Box>

      <CardContent sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
          {title}
        </Typography>

        <Typography
          ref={textRef}
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            overflow: shouldClamp ? "hidden" : "visible",
            display: "-webkit-box",
            WebkitLineClamp: shouldClamp ? 3 : "none",
            WebkitBoxOrient: "vertical",
            transition: "0.3s ease",
          }}
        >
          {description}
        </Typography>

        {(isMobile || shouldShowButton) && (
          <Button
            onClick={() => setExpanded(!expanded)}
            variant="text"
            disableRipple
            sx={{
              display: "block",
              mx: "auto",
              mb: 2,
              fontSize: "0.9rem",
              fontWeight: 500,
              textTransform: "none",
              color: "primary.main",
            }}
          >
            {expanded ? "Ver menos" : "Ver mais"}
          </Button>
        )}

        {techs && (
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            {techs.map((tech) => (
              <Chip key={tech} label={tech} size="small" variant="outlined" />
            ))}
          </Box>
        )}

        <Box sx={{ display: "flex", gap: 2 }}>
          {githubUrl && (
            <Button
              variant="outlined"
              color="primary"
              href={githubUrl}
              target="_blank"
              fullWidth
            >
              GitHub
            </Button>
          )}

          {liveUrl && (
            <Button
              variant="contained"
              color="primary"
              href={liveUrl}
              target="_blank"
              fullWidth
            >
              Acessar
            </Button>
          )}
        </Box>
      </CardContent>
    </MotionCard>
  );
}
