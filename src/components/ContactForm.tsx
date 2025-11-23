"use client";

import { Box, TextField, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { ContactFormData } from "@/schemas/contactSchema";
import { useContactForm } from "@/hooks/useContactForm";
import { useState } from "react";

export default function ContactForm() {
  const { values, errors, loading, sent, handleChange, validate, submit } =
    useContactForm();

  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormData, boolean>>
  >({});

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    validate(values);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  return (
    <Box
    id="contato"
    sx={{
      width: "100%",
      maxWidth: 1100,
      mx: "auto",
      display: "grid",
      gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
      gap: { md: 8, xs: 4 },
      px: { xs: 2, md: 0 },
      textAlign: { xs: "center", md: "left" },
    }}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            mb: 2,
            background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Entre em Contato
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 420 }}>
          Tem um projeto em mente? Vamos construir algo incrível juntos. Respondo
          geralmente dentro de 24h.
        </Typography>
        <motion.div
          animate={{
            y: [0, -12, 0],
            boxShadow: [
              "0 20px 40px rgba(123, 44, 255, 0.25)",
              "0 28px 55px rgba(0, 204, 255, 0.35)",
              "0 20px 40px rgba(123, 44, 255, 0.25)",
            ],
            background: [
              "linear-gradient(135deg, #7B2FF7 0%, #00C6FF 100%)",
              "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
              "linear-gradient(135deg, #7B2FF7 0%, #00C6FF 100%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: 95,
            height: 95,
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "40px auto 0 auto",
            cursor: "default",
          }}
        >
          <EmailRoundedIcon
            sx={{
              fontSize: 48,
              color: "white",
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
            }}
          />
        </motion.div>
      </Box>
      <Box
  component={motion.div}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  sx={{
    width: "100%",
    maxWidth: 520,
    mx: "auto",
    backdropFilter: "blur(18px)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "24px",
    p: { xs: 2, md: 4 },
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: { md: "0 0 35px rgba(0,255,255,0.25)" },

    "@media (max-width: 600px)": {
      backdropFilter: "blur(8px)",
      background: "rgba(255,255,255,0.02)",
      borderRadius: "14px",
    },
  }}
>
        <motion.form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {(["name", "email", "phone"] as (keyof ContactFormData)[]).map(
            (field) => (
              <TextField
                key={field}
                label={
                  field === "name"
                    ? "Nome"
                    : field === "email"
                      ? "Email"
                      : "Telefone"
                }
                name={field}
                value={values[field]}
                onChange={handleChange(field)}
                onBlur={() => handleBlur(field)}
                fullWidth
                variant="filled"
                error={touched[field] && !!errors[field]}
                helperText={touched[field] ? errors[field] : ""}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    px: 2,
                    py: 1.6,
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: touched[field] && errors[field]
                      ? "2px solid #ff3b7f"
                      : "2px solid rgba(0,255,255,0.4)",
                    "&:focus-within": {
                      border: touched[field] && errors[field]
                        ? "2px solid #ff5faa"
                        : "2px solid #00eaff",
                    },
                  },
                }}
              />
            )
          )}
          <TextField
            label="Mensagem"
            name="message"
            multiline
            minRows={4}
            fullWidth
            required
            value={values.message}
            onChange={handleChange("message")}
            onBlur={() => handleBlur("message")}
            error={touched.message && !!errors.message}
            helperText={touched.message ? errors.message : ""}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              sx: {
                px: 2,
                py: 1.6,
                borderRadius: "12px",
                background: "rgba(255,255,255,0.04)",
                border: touched.message && errors.message
                  ? "2px solid #ff3b7f"
                  : "2px solid rgba(0,255,255,0.4)",
                "&:focus-within": {
                  border: touched.message && errors.message
                    ? "2px solid #ff5faa"
                    : "2px solid #00eaff",
                },
              },
            }}
          />
          <Button
            type="submit"
            disabled={loading}
            sx={{
              mt: 1,
              py: 1.6,
              fontWeight: 600,
              borderRadius: 2,
              background: "linear-gradient(90deg,#7b2ff7,#00c6ff)",
              "&:hover": { opacity: 0.85 },
            }}
            variant="contained"
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>

          {sent && (
            <Typography sx={{ mt: 2, color: "#00faff", fontWeight: 600 }}>
              Mensagem enviada! Vou te responder em breve. 👌
            </Typography>
          )}
        </motion.form>
      </Box>
    </Box>
  );
}
