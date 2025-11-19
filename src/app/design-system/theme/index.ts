
'use client';

import { createTheme } from "@mui/material/styles";
import { paletteDark, paletteLight } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

export const darkTheme = createTheme({
  palette: paletteDark,
  typography,
  components,
  shape: {
    borderRadius: 10,
  }
});

export const lightTheme = createTheme({
  palette: paletteLight,
  typography,
  components,
  shape: {
    borderRadius: 10,
  }
});
