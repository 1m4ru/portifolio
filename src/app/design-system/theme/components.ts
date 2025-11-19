import type { Components } from "@mui/material/styles";

export const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 600,
        textTransform: "none",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 14,
        backgroundImage: "none",
      },
    },
  },
};
